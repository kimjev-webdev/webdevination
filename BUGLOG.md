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
| 2025-04-06 | Font not consistently applied in styles.css        | CSS          | Applied Source Code Pro across site via styles.css font-family updates. |
| 2025-04-06 | Rotate prompt misplaced on index.html              | HTML/CSS     | Moved rotate prompt inside footer in index.html to align properly on mobile. |
| 2025-04-06 | Three-card reading logic included unwanted response categories | HTML/JS      | Stripped 'yes/no' response data from card interpretation in threecard.js. |
| 2025-04-08 | General UI issue in styles.css                     | CSS          | Made structural layout fixes in styles.css. |
| 2025-04-09 | Overlapping footer or header elements in styles.css | CSS          | Adjusted z-index values in styles.css to fix visual stacking issues. |
| 2025-04-12 | Tarot data JSON had redundant interpretation text  | JS/Content   | Cleaned interpretation fields in tarot.json to improve clarity for learning game. |
| 2025-04-12 | Uneven spacing on layout elements in styles.css    | CSS          | Tuned margin and padding settings in styles.css for consistent spacing. |
| 2025-04-12 | Accordion chevrons did not reflect open/closed state | JS/CSS       | Synced chevron icon animation with accordion collapse logic using JS and CSS. |
| 2025-04-14 | SEO + social sharing optimized               | Meta/Head   | Added meta tags for Open Graph & Twitter, tuned theme color, preload, canonical URL, and social preview image. |
| 2025-04-18 | Navigation style bugs fixed              | Navigation/Header    | Implemented seperate nav.js to aid in hover and focus effects. Implemented collapse on readings when not hovered - user no longer has to click to close Readings tab. |
| 2025-04-18 | Repetitive `color` and `text shadow` style instructions         | HTML/CSS    | Where feasible replaced duplicate `color` and `text shadow` instructions with generic `.text-glow` utiliity applied across the site. |
| 2025-04-18 | `flashText` animation and `transform: scale(1:1)` not effective on info.html `'Pick One Card'` and `'Pick Three Card'` headings.       | HTML/CSS    | Attempted to implement dynamically, add important class and remove conflicting instructions. Was able to apply the transformation but flashText is still not being applied to these buttons. Revisit in future.  |
| 2025-04-19 | UPDATE `flashText` animation and `transform: scale(1:1)` not effective on info.html `'Pick One Card'` and `'Pick Three Card'` headings.       | HTML/CSS    | Successfully located issue at `.card-button.visible` and removed `important` from `opacity: 1;`. Animation and scale now succesfully applied to `'Pick One Card'` and `'Pick Three Card'` headings.  |
| 2025-04-19 | Contents of `rotate-prompt` not aligned to center of VP       | HTML/CSS    | Changed `max-width: 100%` to `min-width: 100%` |
| 2025-04-19 | Card draw 'flipping backs' overlaying footer on `threecards.html`       | HTML/CSS    | Inline `margin-bottom` increased to `300px` on `main` - pushes footer below dynamic container. |
| 2025-04-19 | Preloader 'portal' doesn't enter viewport smoothly. | CSS   | Added `opacity: 0;` and `transform: scale(0.1);` to the portal and mask.  |
| 2025-04-20 | Win95-style modal triggers `aria-hidden` focus warning in Chrome console. | JS / Accessibility | Focus was being applied to the OK button before `aria-hidden="false"` had updated. Added `requestAnimationFrame`, a slight delay, and a visibility check using `getBoundingClientRect()` to ensure modal is both visible and accessible before calling `.focus()`. |
