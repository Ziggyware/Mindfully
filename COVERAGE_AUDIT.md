# DBT book vs. Mindfully: coverage audit

**Audit date:** 2026-10-31  
**Source:** Marsha M. Linehan, *DBT Skills Training Handouts and Worksheets*, second edition, [linked PDF](https://www.cbc-psychology.com/uploads/DBT-Adult-Skills-Training-Handouts-and-Worksheets.pdf).  
**Website reviewed:** `src/main.jsx`, including skill dialogs, examples, reflection prompts, and site features.

## Scope and limits

This is a topic-level inventory and cross-check against the book's table of contents and introductory section, not a page-by-page or clinical fidelity review. The PDF reader available for this audit extracted only its first 30 pages, including the complete contents; the individual handouts and worksheets later in the book were not reviewed in full. A status of **partial** means a related concept appears on the site; it does not mean the complete skill, instructions, exercises, or clinical nuances are covered. **Absent** means no substantive corresponding lesson was found. References below use the book's section and handout/worksheet numbers so the original can be consulted; they are not reproductions of the worksheets.

**Bottom line:** The site covers introductions to all four main skill modules, but only partially. It does not cover the general skills section or many specialized topics, and it does not reproduce the book's worksheet collection. There is currently no live sharing, advice, or peer communication.

## Cross-verification: book topics against website

| Book section and source references | Book topic inventory | Site coverage and finding |
|---|---|---|
| General H1–5, W1 | Skills-training goals; options for responding to problems; program overview, guidelines and assumptions; biosocial theory; pros and cons of skills use | **Absent.** About page gives a short DBT description but does not teach these topics. |
| General H6–8, W2–3 | Behavior analysis, including chain analysis, an example, and missing-links analysis | **Absent.** No structured analysis tool or lesson. |
| Mindfulness H1–1a, W1 | Goals, definitions, and pros and cons of mindfulness | **Partial.** Mindfulness dialog defines present-moment attention but does not fully explore goals or pros and cons. |
| Mindfulness H2–5c, W2–5c | Core skills: wise mind; observing, describing, participating; nonjudgment, one-mindfulness, effectiveness; practice ideas, checklists, calendars | **Partial.** Dialog names and briefly explains these skills and includes an example and challenge. No dedicated checklists, calendars, or equivalent depth. |
| Mindfulness H6–8, W6 | Spiritual perspectives and loving-kindness practice | **Absent.** |
| Mindfulness H9–10, W7–10b | Balancing doing and being, pleasant and unpleasant events, and finding a middle path between opposites | **Absent.** Wise mind is briefly mentioned, but these distinct topics and exercises are not taught. |
| Interpersonal H1–2a, W1–2 | Goals, obstacles, and beliefs that interfere with interpersonal effectiveness | **Partial.** Goals are briefly introduced; barriers and beliefs are not systematically covered. |
| Interpersonal H3–9, W3–7 | Setting priorities; requests and refusals; DEAR MAN, GIVE, FAST; validation levels; deciding how strongly to ask; troubleshooting | **Partial.** The dialog describes prioritizing goals, making requests, listening, and self-respect. It does not provide the full frameworks, validation levels, intensity decision process, or troubleshooting worksheets. |
| Interpersonal H10–13a, W8–10 | Finding relationships, mindfulness of others, and ending destructive relationships | **Partial.** Safety and boundaries are briefly mentioned; relationship building and ending relationships are not taught as detailed skills. |
| Interpersonal H14–22a, W11–15 | Dialectics, balancing opposites, validation and self-validation, recovery from invalidation, and behavior-change strategies | **Partial.** Acknowledging another person's feelings is mentioned; the rest is not substantively taught. |
| Emotion H1–6, W1–4a | Goals; functions of emotion; barriers and myths; emotion model; descriptions of emotions; diaries | **Partial.** The dialog discusses functions, events, interpretations, sensations, urges and actions; it does not systematically address myths, detailed emotion descriptions, or structured diaries. |
| Emotion H7–13, W5–8 | Checking facts, deciding between opposite action and problem solving, applying and reviewing each | **Partial.** These approaches are introduced with one example; decision rules, detailed steps and worksheets are missing. |
| Emotion H14–20b, W9–14b | Pleasant experiences, values and priorities, long-term positive experiences, mastery, coping ahead, physical self-care, nightmares and sleep | **Partial.** Self-care, positive experiences and manageable challenges are briefly mentioned. Values-based planning, coping ahead, detailed sleep and nightmare protocols, and related worksheets are absent. |
| Emotion H21–25, W15–16 | Mindfulness of current emotions, extreme emotions, troubleshooting and review | **Partial.** Naming and allowing feelings is mentioned; systematic guidance and troubleshooting are absent. |
| Distress H1–9a, W1–7b | Crisis-survival goals and timing; STOP; pros and cons; TIP and relaxation; distraction, self-soothing, body scan, improving the moment and sensory awareness | **Partial.** Pausing, cooling, movement, breathing, distraction and soothing are introduced. The full protocols, decisions, relaxation and other exercises are not provided. |
| Distress H10–15a, W8–12a | Reality acceptance, barriers and practice; turning the mind, willingness, half-smiling, willing hands and mindfulness of thoughts | **Partial.** Acceptance is distinguished from approval; other named skills and their exercises are absent. |
| Distress H16–21, W13–18 | Addiction-specific skills: abstinence planning, clear mind, reinforcement, changing cues and connections, alternate rebellion and adaptive denial | **Absent.** No addiction-specific lesson or practice. |

## Website inventory

- **Home:** welcome, four skill cards, a five-option mood check-in, and navigation to skills and community. Mood selection is held only in current page state.
- **Explore skills:** searchable cards for mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Each opens a dialog with a brief overview, concept summaries, three practice steps, one scenario and response, two reflection prompts, and one practice challenge.
- **Practice tracking:** a single practiced/not-practiced flag per skill stored in the browser's local storage. It is not the book's detailed practice tracking or a calendar.
- **Saved:** bookmarked skill cards stored in local storage on the current device.
- **Journal:** one free-text reflection saved in local storage on the current device. The text in a skill dialog's reflection field is temporary page state and is not persisted.
- **Community:** locally saved private notes and deletion. It explicitly does **not** publish, share, connect users, or provide advice from people or professionals.
- **About and safety:** brief educational-purpose and crisis-support notice, plus a link to the source book.
- **Source relationship:** explanations and activities are original short summaries; the book's handouts and worksheets are not included. The source PDF states that electronic display and redistribution of its materials require permission.

## Verification priorities

1. Obtain authorized access to the full book and, with an appropriately qualified DBT clinician, review each handout and worksheet against proposed original lessons. The table of contents alone cannot establish factual or clinical equivalence.
2. Address the entire missing general-skills section and the omitted topic groups identified above, preserving clear boundaries between education and treatment.
3. Design original, clinically reviewed activities and progress tracking without copying the book's protected worksheets.
4. If live communication is desired, separately design accounts, consent, moderation, privacy, reporting, crisis escalation, and professional-advice boundaries before enabling it.

**No numerical completion percentage is asserted:** the book's handouts vary greatly in depth and the available review did not inspect each one.

> This audit records the earlier site state. The General Skills page and additional introductory topics were added afterward; a new clinical and page-by-page review is still needed.
