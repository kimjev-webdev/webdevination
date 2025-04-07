| Date                | Bug                                        | Focus          | Solution                                                                                           |
|:--------------------|:-------------------------------------------|:---------------|:---------------------------------------------------------------------------------------------------|
| 2025-02-03 | Gugi font not displaying                   | CSS/HTML       | Fixed path to `styles.css`, ensured font linked correctly to HTML.                                 |
| 2025-02-06 | Symbols not rendering correctly            | HTML/CSS       | Tested Google symbols, adjusted margin and alignment of icons.                                     |
| 2025-02-09 | Landing animation not behaving as intended | JS/CSS         | Tweaked JS transitions and adjusted animation timing in CSS.                                       |
| 2025-02-15 | Hover effects inconsistent                 | CSS/JS         | Tested overlay activations and hover-triggered animations on deploy.                               |
| 2025-02-22 | Icon positioning issues on small screens   | CSS            | Applied targeted media queries and repositioned rotate icons responsively.                         |
| 2025-02-25 | Card button hover animation broken         | JS/CSS         | Resolved animation trigger logic in CSS and JS hover states.                                       |
| 2025-02-25 | Landing background not showing             | HTML/CSS       | Converted background image formats (.jpeg → .webp), fixed broken file paths.                       |
| 2025-02-25 | Card button animation not triggering       | CSS/JS         | Resolved animation sequence in styles and confirmed behavior on deploy.                            |
| 2025-02-25 | Landing background image not displaying    | HTML/CSS       | Switched between .jpeg and .webp formats, corrected image path.                                    |
| 2025-03-01 | JSON data not rendering on one card draw   | JS             | Linked `tarot.json`, debugged file paths, and matched card names.                                  |
| 2025-03-01 | Card layout misaligned                     | CSS/HTML       | Adjusted columns, spacing, and dynamic styles for chosen card container.                           |
| 2025-03-01 | Card not matching drawn value              | JS             | Fixed logic in onecard.js to bind drawn card ID to correct JSON data.                              |
| 2025-03-02 | File structure breaking logic              | JS             | Refactored file structure, updated paths, and continued debugging after reorganization.            |
| 2025-03-02 | JS file paths broken after restructure     | JS/Structure   | Reorganized project folders and updated all JS imports.                                            |
| 2025-03-08 | Shuffle animation not playing smoothly     | JS/CSS         | Fine-tuned animation timing and transitions in CSS, adjusted event logic.                          |
| 2025-03-08 | Shuffle animation glitchy                  | JS/CSS         | Created initial shuffle logic, fine-tuned timing and visibility control.                           |
| 2025-03-09 | Card description not matching draw         | JS             | Fixed logic in `onecard.js` to pull correct text from JSON after draw.                             |
| 2025-03-09 | Descriptions mismatched after draw         | JS             | Fixed assignment timing so description updates after DOM is ready.                                 |
| 2025-03-17 | Card flip animation not working            | JS             | Patched broken flip path, aligned animation with card draw logic.                                  |
| 2025-03-17 | Card flip animation file path incorrect    | JS             | Patched animation logic and corrected the image reference path.                                    |
| 2025-03-22 | Duplicate JS logic across scripts          | JS             | Created utilities.js to store shared functions across card draw pages.                             |
| 2025-03-29 | Redundant JS logic across pages            | JS             | Created `utilities.js` and migrated common functions into it.                                      |
| 2025-04-01 | Oracle backend not returning AI output     | Node.js/JS     | Debugged connection logic in server.js and oracle.js, fixed request handling.                      |
| 2025-04-01 | Oracle AI backend unresponsive             | JS/Node.js     | Debugged API connection, updated `server.js` and `oracle.js` to ensure backend responses.          |
| 2025-04-03 | Animation stuck on shuffle sequence        | JS             | Added JS reset logic to clear previous animation state on redraw.                                  |
| 2025-04-05 | Oracle feature not wired to backend        | JS/Node.js     | Connected Oracle front-end to server.js and got AI responses flowing.                              |
| 2025-04-05 | .env not properly ignored in Git           | Config         | Updated .gitignore to correctly exclude .env and sensitive files.                                  |
| 2025-04-05 | Oracle deployment prep                     | Node.js/Deploy | Created .env.example, cleaned up deployment structure, and pushed server configuration for Render. |
| 2025-04-06 | Oracle font not applying to response       | CSS            | Updated styles to ensure Source Code Pro was applied to Oracle output.                             |
| 2025-04-06 | Local not matching remote                  | Merge/Sync     | Synced local changes with Oracle integration and updated .gitignore for backend.                   |