<h2 id="validation">Validation</h2>

### 1. HTML

 HTML has been validated with W3C HTML5 Validator.


| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| index.html     | [W3C ](https://validator.w3.org/) | <img src="assets\images\testing\indexhtmlpass.png"> | PASSED   |
| info.html   | [W3C](https:/validator.w3.org) | <img src="assets\images\testing\infohtmlpass.png">  | PASSED   |
| onecard.html   | [W3C](https://validator.w3.org/) | <img src="assets\images\testing\onecardhtmlpass.png">| PASSED |
| threecard.html  | [W3C](https://validator.w3.org/) | <img src="assets\images\testing\threecardhtmlpass.png">| PASSED |
| cards.html   | [W3C](https://validator.w3.org/) | <img src="assets\images\testing\cardshtmlpass.png">| PASSED |
| learn.html  | [W3C](https://validator.w3.org/) | <img src="assets\images\testing\learnhtml.png"> | PASSED |
| 404.html   | [W3C](https://validator.w3.org/) | <img src="assets\images\testing\404htmlpass.png"> | PASSED |


### 2. CSS 

CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages    | [W3C ](https://jigsaw.w3.org/css-validator/) | <img src="assets\images\testing\csstests.png"> | PASSED | 

### 3. Link Testing

Links checked with [W3C Link Checker](https://validator.w3.org/checklink).



| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages   | [W3C ](https://validator.w3.org/checklink) | <img src="assets\images\testing\linkspass.png"> | PASSED |

### 4. JavaScript 
JavaScript files checked with [JSHint](https://jshint.com/).

| Page      | URL                  | Screenshot                                  | Notes              |
|-----------|----------------------|---------------------------------------------|--------------------|
| index.js   | [JSHint](https://jshint.com/) | <img src="assets\images\testing\indexjsmetrics.png" width="700px"> | PASSED |
| nav.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\navjsmetrics.png" width="700px"> | PASSED |
| info.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\infojsmetrics.png" width="700px"> | PASSED |
| oracle.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\oraclejsmetrics.png" width="700px"> | PASSED |
| server.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\serverjsmetrics.png" width="700px"> | JSHint does not fully recognize "type": "module" settings and incorrectly flags valid module code. The import.meta warning is a false positive from the linter and does not affect functionality, testing, or production deployment. |
| onecard.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\onecardjsmetrics.png" width="700px"> | PASSED |
| threecard.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\threecardjsmetrics.png" width="700px"> | PASSED |
| utilities.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\utilitiesjsmetrics.png" width="700px"> | PASSED |
| cards.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\cardsjsmetrics.png" width="700px"> | PASSED |
| learn.js  | [JSHint](https://jshint.com/) | <img src="assets\images\testing\learnjsmetrics.png" width="700px"> | PASSED |


<h2 id="mobiletesting">Mobile & Desktop Testing</h2>
<h2 id="desktoptesting" style="display:none;">Lighthouse Testing</h2>


## 1. Lighthouse

Preliminary mobile & desktop testing is undertaken with Chrome dev tools Lighthouse. This assesses the pages Performance, Accessibility, Best Practices and SEO

| Page      |  Screenshot                   | Notes              |
|-----------|----------------------------------|--------------------|
index.html - Mobile     | <img src="assets\images\testing\indexlighthousemob.png" width="700px"> |GOOD SCORES |
index.html - Desktop    | <img src="assets\images\testing\indexlighthousedt.png" width="700px"> |GOOD SCORES|
info.html - Mobile      | <img src="assets\images\testing\infolighthousemob.png" width="700px"> |GOOD SCORES |
info.html - Desktop     | <img src="assets\images\testing\infolighthousedt.png" width="700px"> | GOOD SCORES | 
onecard.html - Mobile   | <img src="assets\images\testing\onecardlighthousemob.png" width="700px"> | GOOD SCORES | 
onecard.html - Desktop  | <img src="assets\images\testing\onecardlighthousedt.png" width="700px"> | GOOD SCORES |
threecard.html - Mobile | <img src="assets\images\testing\threecardlighthousemob.png" width="700px"> | GOOD SCORES |
threecard.html - Desktop| <img src="assets\images\testing\threecardlighthousedt.png" width="700px"> | GOOD SCORES |
cards.html - Mobile     | <img src="assets\images\testing\cardslighthousemob.png" width="700px"> |GOOD SCORES |
cards.html - Desktop    | <img src="assets\images\testing\cardslighthousedt.png" width="700px"> |GOOD SCORES |
learn.html - Mobile     | <img src="assets\images\testing\learnlighthousemob.png" width="700px"> |GOOD SCORES |
learn.html - Desktop    | <img src="assets\images\testing\learnlighthousedt.png" width="700px"> | GOOD SCORES |
404.html - Mobile       | <img src="assets\images\testing\404lighthousemob.png" width="700px"> | GOOD SCORES |
404.html - Desktop      | <img src="assets\images\testing\404lighthousedt.png" width="700px"> | GOOD SCORES | 

<h2 id="accessibility">Accessibility</h2>

## 1. WAVE

More detailed accessibility testing was undertaken using [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool.

| Page         | URL                             | Screenshot                                              | Notes              |
|--------------|----------------------------------|---------------------------------------------------------|--------------------|
| index.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/waveindex.png" height="auto" width="600px"> | NO ERRORS |
| info.html    | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/waveinfo.png" height="auto" width="600px"> | NO ERRORS - alerts for `text-align: justify` and redundant links ignored for styling purposes. |
| onecard.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/waveonecard.png" height="auto" width="600px"> | NO ERRORS - 2 alerts for `text-align: justify` ignored for styling purposes. |
| threecard.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/wavethreecard.png" height="auto" width="600px"> | NO ERRORS |
| cards.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/wavecards.png" height="auto" width="600px">  | NO ERRORS - 32 alerts for `text-align: justify` ignored - justified text chosen for stylistic reasons, only heavy use on this page. Does not effect readability. |
| learn.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/wavelearn.png" height="auto" width="600px"> | NO ERRORS - 2 alerts for `text-align: justify` ignored for styling purposes.|
| 404.html     | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/wave404.png" height="auto" width="600px"> | NO ERRORS |

<br>

Evidence to support the readability and accessibility of the colour scheme is provided by [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/):

<img src="assets/images/testing/textcontrast1.png">
<img src="assets/images/testing/textcontrast2.png">

<h2 id="manual">Manual Testing</h2>

The site has been tested across a wide variety of devices to offer a detailed snapshot of the User Experience and iron out any final issues. Users were directed to the site and asked to send screenshots of each page. The users were also asked to report any issues they had with the site. 

## 1. Mobile
Initial mobile user feedback was unanimous: viewer preferences for viewing site in portrait on phone screens was taken into account and rotate prompt icon was subsequently removed from the index.html footer. A bug caused by double clicking the 'REVEAL YOUR FATE' button beneath Oracle more than once whilst the API was generating a response, was also flagged. JS was updated in order to remove the bug. 

| Device/Browser | Page | Screenshots | Notes |
|---|---|---|---|
| Google Pixel 6 Pro - Chrome | index.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/index1.png" width="200px"> <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/index2.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| Google Pixel 6 Pro - Chrome | info.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/info1.png" width="200px"> <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/info2.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| Google Pixel 6 Pro - Chrome | onecard.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/onecard1.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES.|
| Google Pixel 6 Pro - Chrome | threecard.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/threecard1.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| Google Pixel 6 Pro - Chrome | cards.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/cards1.png" width="200px"> <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/cards2.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| Google Pixel 6 Pro - Chrome | learn.html | <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/learn1.png" width="200px"> <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/learn2.png" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| iPhone 13 - Safari | index.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/index1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/index2.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. USER ALSO FLAGGED 'SCRAMBLED TEXT BUG' ON ORACLE RESPONSE - JS UPDATED TO PREVENT MULTIPLE BUTTON CLICKS BEFORE ORACLE HAS FINISHED TYPING RESPONSE. |
| iPhone 13 - Safari | info.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/info1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/info2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/info3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/info4.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. USER ALSO FLAGGED 'SCRAMBLED TEXT BUG' ON ORACLE RESPONSE - JS UPDATED TO PREVENT MULTIPLE BUTTON CLICKS BEFORE ORACLE HAS FINISHED TYPING RESPONSE. |
| iPhone 13 - Safari | onecard.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/onecard1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/onecard2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/onecard3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/onecard4.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. USER ALSO FLAGGED 'SCRAMBLED TEXT BUG' ON ORACLE RESPONSE - JS UPDATED TO PREVENT MULTIPLE BUTTON CLICKS BEFORE ORACLE HAS FINISHED TYPING RESPONSE.|
| iPhone 13 - Safari | threecard.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard4.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard5.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard6.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/threecard7.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. USER ALSO FLAGGED 'SCRAMBLED TEXT BUG' ON ORACLE RESPONSE - JS UPDATED TO PREVENT MULTIPLE BUTTON CLICKS BEFORE ORACLE HAS FINISHED TYPING RESPONSE.  |
| iPhone 13 - Safari | cards.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/cards1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/cards2.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. USER ALSO FLAGGED 'SCRAMBLED TEXT BUG' ON ORACLE RESPONSE - JS UPDATED TO PREVENT MULTIPLE BUTTON CLICKS BEFORE ORACLE HAS FINISHED TYPING RESPONSE. |
| iPhone 13 - Safari | learn.html | <img src="assets/images/testing/manualtesting/lily_iphone13_safari/learn1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/learn2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/lily_iphone13_safari/learn3.PNG" width="200px"> | USER SUGGESTION - PREFERANCE FOR VIEWING IN PORTRAIT ORIENTATION - RECCOMENDS SWAPPING - ACTION TAKEN: REMOVED ROTATE SCREEN PROMPT ON INDEX.HTML - WILL MANUALLY TEST IN PORTRAIT ON PHONES. |
| iPhone 13 Pro - Safari    | index.html   | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/index1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/index2.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 13 Pro - Safari    | info.html    | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/info1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/info2.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/info3.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 13 Pro - Safari    | onecard.html | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard2.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard3.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard4.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard5.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/onecard6.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 13 Pro - Safari    | threecard.html | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard2.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard3.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard4.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard5.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard6.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard7.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/threecard8.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 13 Pro - Safari    | cards.html   | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/cards1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/cards2.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/cards3.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/cards4.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/cards5.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 13 Pro - Safari    | learn.html   | <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/learn1.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/learn2.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/learn3.png" width="200px"> <img src="assets/images/testing/manualtesting/rob_iphone13pro_safari/learn4.png" width="200px"> | NO ISSUES REPORTED |
| iPhone 16 - Chrome | index.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/index1.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS.  |
| iPhone 16 - Chrome | info.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/info1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/info2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/info3.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS.  
| iPhone 16 - Chrome | onecard.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/onecard1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/onecard2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/onecard3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/onecard4.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS. |
| iPhone 16 - Chrome | threecard.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/threecard1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/threecard2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/threecard3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/threecard4.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/threecard5.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS. |
| iPhone 16 - Chrome | cards.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/cards1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/cards2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/cards3.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS. |
| iPhone 16 - Chrome | learn.html | <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/learn1.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/learn2.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/learn3.PNG" width="200px"> <img src="assets/images/testing/manualtesting/kim_iphone16_chrome/learn4.PNG" width="200px"> | TESTING WITH VERTICAL ORIENTATION POST USER FEEDBACK - NO ERRORS. |

## 2. Tablets

| Device/Browser | Page | Screenshots | Notes |
|----------------|------|-------------|-------|
| iPad Pro - Safari | index.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/index1.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |
| iPad Pro - Safari | info.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/info1.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/info2.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/info3.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/info4.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |
| iPad Pro - Safari | onecard.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/onecard1.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/onecard2.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |
| iPad Pro - Safari | threecard.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/threecard1.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/threecard2.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/threecard3.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/threecard4.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |
| iPad Pro - Safari | cards.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/cards1.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/card2.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |
| iPad Pro - Safari | learn.html | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/learn1.png" height="auto" width="300px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/learn2.png" height="auto" width="300px"> | **NO ERRORS REPORTED. USER FEEDBACK:** "I love the colour and the glow and the retro style! The animations don’t distract and really add to the experience it genuinely feels like you’re playing an old game. It looks wicked!" |

## 3. Laptop/Desktop

| Device/Browser | Page | Screenshots | Notes |
|----------------|------|-------------|-------|
| MacBook Air - Safari | index.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/index1.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook Air - Safari | info.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/info1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/info2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/info3.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/info4.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook Air - Safari | onecard.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/onecard1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/onecard2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/onecard3.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/onecard4.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook Air - Safari | threecard.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/threecard1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/threecard2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/threecard3.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/threecard4.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook Air - Safari | cards.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/cards1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/cards2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/cards3.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook Air - Safari | learn.html | <img src="assets/images/testing/manualtesting/lily_macbookair_safari/learn1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/lily_macbookair_safari/learn2.png" height="auto" width="200px"> | NO ERRORS REPORTED. USER FEEDBACK (After accessing on mobile) "It looks amazing on my laptop" |
| MacBook - Chrome | index.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/index1.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |
| MacBook - Chrome | info.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/info1.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |
| MacBook - Chrome | onecard.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/onecard1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/1card2.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |
| MacBook - Chrome | threecard.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/threecard1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/threecard2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/threecard3.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |
| MacBook - Chrome | cards.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards1.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards2.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards3.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards4.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards5.png" height="auto" width="200px"> <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/cards6.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |
| MacBook - Chrome | learn.html | <img src="assets/images/testing/manualtesting/leanne_macbook_chrome/learn1.png" height="auto" width="200px"> | USER WAS DISSAPOINTED THAT THEY WERE UNABLE TO NAVIGATE TO A.I ORACLE VIA NAVBAR - ORACLE LINK WAS SUBSEQUENTLY ADDED IN AND JS USED TO AVOID REPETATIVE TERMINAL TEXT BOMBARDING VISITORS IN ONE SESSION TO IMPROVE UX. |

<h2 id="user"> User Stories Testing</h2>

<h2 id="user"> User Stories Testing</h2>

| **User Story** | **Screenshots/Evidence** | **Notes** |
|:--------------|:-------------------------|:---------|
| **As an experienced tarot practitioner, I want the site to offer a digital tarot experience that feels as personal and sacred as an in-person reading, so that I can connect deeply with the cards and trust the intuitive guidance they offer, without feeling detached from the mystic elements of the practice.** | <img src="assets/images/readmefiles/sourcecodepro.webp" height="auto" width="600px"> <img src="assets/images/testing/manualtesting/brogan_googlepixel6pro_chrome/info2.png" height="auto" width="600px"> | The site's atmospheric design — black backgrounds, glowing green text, animated card flips, poetic descriptions — creates a sacred digital environment. Card interactions mimic the experience of physically drawing cards, supporting deep personal engagement. The Oracle is responsive, conversational, personal giving feedback informed by astrological placements and moon phases adding to the personal nature. When first directed to the info.html page, the user is greeted by the 'machine' again forging connection much like in a real life setting. |
| **As a person with a disability who finds divination fun and accessible, I want the site to be easy to navigate using assistive technology, so I can experience the tarot readings in a way that feels personal, calming, and supportive, without feeling overwhelmed by design or functionality.** | Full evidence for the site's accessibility can be found [here.](TESTING.md#accessibility) | Semantic HTML structure, ARIA labels, skip buttons for animations, focus-visible outlines, responsive layouts, and WAVE-tested contrast/color settings ensure strong accessibility. Simple navigation and descriptive alt text help reduce cognitive load. |
| **As a software developer with an interest in spirituality, I want to interact with a tarot game that blends meaningful content with engaging, innovative design and functionality, so I can appreciate how the technical aspects of the site enhance the spiritual experience without overshadowing it.** | <img src="assets/images/readmefiles/modalwrong.webp" height="auto" width="600px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/info3.png" height="auto" width="600px"> <img src="assets/images/readmefiles/preloader1.webp" height="auto" width="600px"> | The site seamlessly integrates animation (flashText, card flip), dynamic loading (JS-controlled text and buttons), and API integration (Oracle responses) without breaking the thematic mysticism. Technology supports, rather than disrupts, the spiritual tone. The modals that parody 'Win95' themes would be attractive to developers, and fun features like the windows ['error ding'](assets/audio/win95_error.mp3) which plays with incorrect answers on the learn page. The entire site is developed to showcase JS development skills. The fact that cards were made with A.I should also be appealing to the web-dev community |
| **As someone interested in the modern resurgence of folk traditions, I want the site to offer a contemporary approach to tarot that still maintains its roots in ancient practices, so I can experience tarot in a way that feels connected to both history and modern spirituality.** | <img src="assets/images/readmefiles/images.jpg" height="auto" width="600px"> <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/cards1.png" height="auto" width="600px"> | The project uses traditional tarot archetypes but wraps them in a modern, sleek, web-based experience. Ancient symbolism is honored while using 21st-century tools like GPT integration, making the practice feel both timeless and current. The real enthusiasts have a chance to revel in the stories and symbolism which accompany the images on the cards page. |
| **As a newcomer to tarot, I want the site to provide a simple and approachable introduction to tarot, with easy-to-understand explanations and interactive features, so I can learn about tarot at my own pace and feel comfortable exploring the cards without feeling overwhelmed.** | <img src="assets/images/testing/manualtesting/rob_ipadpro_safari/learn2.png" height="auto" width="600px"> | The 'Learn' page offers short, beginner-friendly explanations without jargon and the modal informs them of the correct answer dynamically so they can learn from their mistakes in a way that isn't intimidating - they cannot lose the game but can keep score of their progress. They compete against themselves and not others to encourage interest and provide a positive, encouraging learning experience. Interactive features like one-card pulls and clear prompts help new users explore tarot easily. The Oracle tool introduces symbolic thinking gently through fun engagement. |



<h2 id="bugs">Bugs & Other Bits!</h2>

Here I list known issues with the site and some notes about things I would do differently if I knew what I know at the start of this project. 
For the full list of resolved issues throughout the project timeline please view the [Bug Log](BUGLOG.md). 

### 1. Dropdown Nav Minor DevTools Testing Behavior (No Impact on Mobile Devices)
* During development, a minor behavior was observed when using browser DevTools to simulate a mobile device:
On first tap of the "Readings" dropdown in the navbar, the background highlight activated before expanding the dropdown menu itself.

* This issue only occurs inside DevTools simulation because hover and click states can overlap in emulated touch environments.

* Extensive real-device testing on phones confirmed that on actual mobile devices, the navbar dropdown behaves correctly:
one tap expands the menu, and no incorrect hover behavior occurs.

* As this is a DevTools-only quirk with no effect on real-world usability, no code changes were required.

* The project prioritizes real-user experience, and this observation was documented instead of forcing unnecessary workarounds that could compromise overall navbar functionality.

### 2. Notes on Some Vague Commit Messages and Workflow Constraints

During the development of this project, some commit messages (such as "Update README.md") may appear vague or overly simple. This was due to a combination of practical constraints:

* While I was able to access the GitHub web editor and browser-based VS Code (vscode.dev), the browser version does not provide a built-in terminal. For this reason I was forced to use Github Codespaces when working from my tablet.

* Limited time on GitHub Codespaces: I ran out of my allocated Codespaces hours midway through the project which meant when working from the tablet, at a certain point I was uploading and changing files manually through Github. (I have been working from an iPad due to childcare responsibilities with a young baby in order to keep  up with deadlines as desktop is located outside house in garden). Because of this, I could not easily create local commits with detailed messages or run advanced Git operations from the iPad

* Knowledge gap at the time: I was unaware that GitHub allowed adding or editing commit messages post-push directly through the web interface.

**When working from a desktop, I always use the full Visual Studio Code editor with an integrated terminal, which allows for detailed commits, branches, and full local control. Despite these hurdles, I made sure to clearly document major features, fixes, and updates elsewhere — particularly within the README, the Deployment instructions, and the Bug Logs to ensure a transparent, traceable development process.**

### 3. Notes on CSS Class Usage and Learning Reflection

Throughout this project, I used a large number of very specific and sometimes repetitive CSS classes.

This approach initially helped me to individually style each page and element exactly how I envisioned. However, as the project grew, I realized that using highly specific classes for every variation led to unnecessary repetition, larger CSS files, and more maintenance complexity.

### Biggest Learning Curve:

* I have learned that more general, reusable utility classes (following DRY principles — Don't Repeat Yourself) would have made my CSS cleaner, more scalable, and easier to manage.

* In future projects, I plan to group common styles together, make better use of CSS variables, and create modular class systems where possible, rather than styling each element uniquely.

**This project has been a huge lesson in balancing creative freedom with maintainable, efficient front-end code and refining my CSS architecture is one of my key takeaways moving forward.**

### 4. Performance Scores on Lighthouse

* Another personal goal for my next project would be to reach higher performance scores on lighthouse tests overall. 
