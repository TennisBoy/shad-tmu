# SHAD @ TMU, schedule site

**🔗 Live:** https://brave-water-01f43ed0f.7.azurestaticapps.net/index.html

A **focus-on-today** schedule for SHAD @ Toronto Metropolitan University (July 2026). The home page
shows only **today**, every session as a pre-loaded briefing (who's speaking, the real background,
what it'll cover, how to build off it). Past and future live on the **Timeline**.

Built to be shared with the whole cohort, mobile-first. Self-contained, no build step, no
framework, no backend.

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8080   # then visit http://localhost:8080
```

("Today" is computed in Toronto time, so it highlights the correct SHAD day wherever you are.)

## Update the schedule

Everything lives in **`assets/data.js`** (`window.SHAD`). Add or edit a day under `days` (keyed by
ISO date), give it a `pa_duty` roster and a `sessions` array. Exclude meals / breaks / sleep /
travel, only real programming becomes a card. Full data model + authoring rules are in
[`CLAUDE.md`](./CLAUDE.md).

## Turn on Google Analytics

Set `ga_id` in `assets/data.js` to your GA4 Measurement ID (`G-XXXXXXXXXX`). Empty string = off.

## Deploy

Every push to `main` deploys to Azure Static Web Apps via
`.github/workflows/azure-static-web-apps.yml` (app is at the repo root). Requires the repo secret
`AZURE_STATIC_WEB_APPS_API_TOKEN`: create the SWA with deployment source **"Other"**, copy its
token, and add it as that secret. Until the secret exists the workflow skips cleanly (no failure).

## Structure

```
CLAUDE.md                 agent/author instructions (data model + doctrine)
index.html · timeline.html  thin shells (~15 lines each)
assets/theme.css          all styling (TMU palette on the house gradient)
assets/data.js            the whole dataset, the only file you edit weekly
assets/app.js             render logic, Toronto-time today, expanders, widgets, GA
staticwebapp.config.json  cache + routing
.github/workflows/        Azure Static Web Apps deploy
```

Self-contained: its own repo, no external dependencies.
