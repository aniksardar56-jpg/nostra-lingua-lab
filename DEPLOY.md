# Deploy Nostro Lingua LAB

Run this site as a Node.js service (Node 22 or newer).

- Install: `npm ci`
- Start: `npm start`
- Set `ADMIN_PASSWORD` in the hosting dashboard's secret environment settings.
- Set `DATA_DIR` to a persistent writable directory to keep admin changes across deployments.
- The host supplies `PORT`; the default is 3000.
- To preserve existing content, copy `data/site-data.json` to `DATA_DIR/site-data.json` before the first start.

The public website is `/` and the admin login is `/admin.html`.
Never upload `.env` or `node_modules` to GitHub.
This app requires its Node server for login and saving content; a static-only deployment does not provide those features.
