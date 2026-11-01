/* [SPEC] Browser storage boundary: untrusted JSON -> validated values or explicit errors.
Invariant: persisted skill IDs belong to the supplied set; notes contain text and date strings.
Hazards: malformed data, denied storage, quota exhaustion; failures do not mutate application state.
Bounds: O(n) validation in the number of stored entries; single-threaded browser access. */
const keys = {saved:'mindfully-saved', practice:'mindfully-practice', posts:'mindfully-posts', journal:'mindfully-journal'};

export function readState(storage, validIds) {
  try {
    const parse = (key) => { const raw = storage.getItem(key); return raw === null ? [] : JSON.parse(raw); };
    const readIds = (key) => {
      const value = parse(key);
      if (!Array.isArray(value) || !value.every(id => typeof id === 'string' && validIds.has(id))) throw new Error('Invalid skill data');
      return [...new Set(value)];
    };
    const posts = parse(keys.posts);
    if (!Array.isArray(posts) || !posts.every(item => item && typeof item === 'object' && typeof item.text === 'string' && typeof item.date === 'string')) throw new Error('Invalid notes');
    const journal = storage.getItem(keys.journal) ?? '';
    return {ok:true, value:{saved:readIds(keys.saved), practice:readIds(keys.practice), posts:posts.map(({text,date})=>({text,date})), journal}};
  } catch {
    return {ok:false, error:'Saved data could not be read. Existing data was not changed.', value:{saved:[],practice:[],posts:[],journal:''}};
  }
}

export function writeState(storage, kind, value) {
  if (!Object.hasOwn(keys, kind)) return {ok:false, error:'Unknown storage operation.'};
  try {
    storage.setItem(keys[kind], kind === 'journal' ? value : JSON.stringify(value));
    return {ok:true};
  } catch {
    return {ok:false, error:'Your change could not be saved on this device. Check your browser storage settings and try again.'};
  }
}
