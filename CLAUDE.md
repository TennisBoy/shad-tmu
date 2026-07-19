# SHAD @ TMU, schedule site (agent instructions)

> Self-contained project, this is its own git repo (extracted from William's wiki on 2026-07-09).
> The app lives at the repo root. Do not add outside dependencies.

A **focus-on-today** schedule site for William's SHAD month at Toronto Metropolitan University
(July 2026), shared with up to ~128 peers, mostly on phones. The home page shows **only today**;
past/future live one click away on the Timeline. Each session is a **pre-loaded briefing**, not a
line in a calendar.

## Files

```
CLAUDE.md                 this file
README.md                 human guide
staticwebapp.config.json  cache headers + routing for Azure SWA
index.html                TODAY (home), thin shell, ~15 lines
timeline.html             PAST + FUTURE, thin shell
assets/
  theme.css               all styling: house gradient + TMU palette + layout (ONE copy)
  data.js                 window.SHAD, the whole dataset (ONE copy, both pages read it)
  app.js                  all logic: render, header, today-in-Toronto, expanders, widgets, GA
```

Both HTML files are near-empty shells. **All content lives in `data.js`; all behaviour in
`app.js`; all styling in `theme.css`.** There is exactly one copy of each, the two pages cannot
drift or desync.

## Data model (`assets/data.js`)

`window.SHAD` is keyed by ISO date. Each day carries its **PA duty roster** (residence-life) and
its **sessions**.

```js
window.SHAD = {
  tz: "America/Toronto",
  ga_id: "",                       // GA4 Measurement ID "G-XXXXXXXXXX" or "" to disable
  program: { start: "2026-07-05", end: "2026-08-01" },
  days: {
    "2026-07-09": {
      week: 1,
      headline: "optional per-day hero line",
      pa_duty: {
        room_checks: [ {floor:"1", pa:"Sam"}, {floor:"2", pa:"Aisha"} ],
        off:         [ {pa:"Jordan", when:"all day"}, {pa:"Maya", when:"from 6:00 PM"} ]
      },
      sessions: [ /* session objects */ ]
    }
  }
};
```

Session object:

```js
{
  display_time: "9:00–10:30",
  kind: "keynote|alum-talk|workshop|panel|field-trip",   // sets the card accent + label
  title: "Machines that move like muscle",
  speaker: "Dr. Amara Okonkwo",
  role: "Director, Biomechatronics Lab, University of Toronto",
  speaker_gist: "1–2 sentences, ALWAYS visible",
  speaker_full: "HTML string, expandable full profile (optional)",
  primer_gist:  "1–2 sentences of the ACTUAL info, ALWAYS visible",
  primer_full:  "HTML string, deep primer (optional)",
  widget: null,    // or a key in app.js WIDGETS, e.g. 'soft-muscle', mounted inside primer_full
  agenda:   "short, always visible",
  buildoff: "short, always visible"
}
```

## Authoring doctrine (how to write cards), non-negotiable

1. **Primer = the actual information, not a to-do list.** Do the ≤1-day of research yourself and
   hand over the *result*. Reading the box IS being prepared. Never write "go read X."
2. **Gist always visible; depth behind one tap.** `speaker_gist` / `primer_gist` are always shown.
   `speaker_full` / `primer_full` are the tap-to-expand depth. Lazy readers get the brief; curious
   readers click.
3. **Only Speaker + Primer expand.** Agenda + Build-off stay short and always visible. Don't make
   all four expandable, it's fatiguing.
4. **Earned visuals only ("if applicable").** Add a `widget` / diagram / graph ONLY where it truly
   teaches (physics, robotics, econ, algorithms). A story-driven talk gets great text, no forced
   chart. Tiered: every session gets text; only some get a visual.
5. **Exclude non-programming rows** from the CSV entirely: meals, breaks, sleep, free time,
   transitions. Only talks / workshops / panels / field trips become sessions.
6. **PA roster is day-level**, separate from sessions. Room checks (by floor) + who's off (with
   partial-day times). Never a session card.
7. **Verify before publishing:** speaker facts, dates, any numbers/diagrams in a primer. Research
   the real speaker; don't invent credentials.

## "Today" is Toronto time

`app.js` computes today via `Intl.DateTimeFormat('en-CA',{timeZone:'America/Toronto'})`. Never use
the viewer's local date, a peer in another timezone must still see the correct SHAD day.

## Deploy

- Own Azure Static Web App via `.github/workflows/azure-static-web-apps.yml`. App is at the repo
  root (`app_location: "/"`), static, no build step. Deploys on push to `main`.
- Needs repo secret `AZURE_STATIC_WEB_APPS_API_TOKEN` (create the SWA with deployment source
  "Other", copy its token, add it as that secret). The workflow skips cleanly until the secret set.
- Google Analytics: set `ga_id` in `assets/data.js`. Empty string disables it cleanly.

## House style

Committed **light** theme (no dark mode, deliberate). Ground = house gradient `#ffffff → #fffbe6`,
150° fixed. **TMU Blue `#004c9b`** for structure/labels; **TMU Gold `#ffdc00`** spent in one place
(the "today" marker + active states). Blue-biased near-black `#0f1b2d` for text. Mobile-first.
