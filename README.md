# Pomodoro

A 25/5 focus timer in a Nothing-style dot-matrix pill. Works offline and can be installed as an app.

## Host on GitHub Pages
1. Create a new public repository on GitHub.
2. Upload everything in this folder to the root of the repo (index.html must be at the top level).
3. Go to Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Install on Android
Open the site in Chrome → ⋮ → Install app.

## Updating
After changing files, bump the cache name in `sw.js` (e.g. `pomodoro-v7` → `pomodoro-v8`) so installed copies pick up the new version.
