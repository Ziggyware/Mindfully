/* [SPEC] Validate storage boundaries using isolated deterministic fakes.
Invariant: malformed inputs are rejected and failed writes are reported. Bounds: O(n) per case. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readState,writeState} from '../src/storage.js';
const ids = new Set(['general','mindfulness']);
function fake(initial={}) {const values={...initial};return {getItem:k=>Object.hasOwn(values,k)?values[k]:null,setItem:(k,v)=>{values[k]=v},values};}
test('empty and valid state',()=>{const store=fake();assert.deepEqual(readState(store,ids).value,{saved:[],practice:[],posts:[],journal:''});assert.equal(writeState(store,'saved',['general']).ok,true);assert.deepEqual(readState(store,ids).value.saved,['general']);});
test('malformed and unrecognized persisted data are rejected without writes',()=>{for(const value of ['{','null','["unknown"]','[1]']){const store=fake({'mindfully-saved':value});assert.equal(readState(store,ids).ok,false);assert.equal(store.values['mindfully-saved'],value);}});
test('invalid posts and inaccessible storage are reported',()=>{assert.equal(readState(fake({'mindfully-posts':'[{"text":1}]'}),ids).ok,false);assert.equal(readState({getItem(){throw Error('denied')}},ids).ok,false);assert.equal(writeState({setItem(){throw Error('quota')}},'journal','test').ok,false);assert.equal(writeState(fake(),'unknown',[]).ok,false);});
test('journal and notes round trip',()=>{const store=fake();assert.equal(writeState(store,'journal','hello').ok,true);assert.equal(writeState(store,'posts',[{text:'note',date:'Jan 1'}]).ok,true);const result=readState(store,ids);assert.equal(result.value.journal,'hello');assert.deepEqual(result.value.posts,[{text:'note',date:'Jan 1'}]);});
