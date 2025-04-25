<h2 id="validation">Validation</h2>

### 1. HTML

 HTML has been validated with W3C HTML5 Validator.


| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| Index.html - Before    | [W3C ](https://validator.w3.org/) | <img src="assets/images/testing/indexhtml1.jpeg" height="auto" width="600px"> <img src="assets/images/testing/indexhtml2.jpeg" height="auto" width="600px"> | Removed unnessacary roles, deleted stray end div tag, close footer form, change carousel section to div, remove alt text from icons in footer   |
| Index.html - After    | [W3C](https:/validator.w3.org) | <img src="assets/images/testing/indexhtml.jpeg" height="auto" width="600px">  | Passed all tests.   |
| About.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/abouthtml.jpeg" height="auto" width="600px">| Removed roles, closed form in footer, removed alt tags from footer icons, fixed headers and header hierarchy|
| About.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/aboutpass.jpeg" height="auto" width="600px">| Passed all tests. |
| Gallery.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/galleryhtml.jpeg" height="auto" width="600px"> <img src="assets/images/testing/galleryhtml2.jpeg" height="auto" width="600px"> | Remove navigation and header roles, remove img-fluid tags from all images in gallery, swap center element for css |
| Gallery.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/galleryhtmlafter.jpeg" height="auto" width="600px"> | Aria Labels maintained on up arrow icon - further explination needed for accessibility. Report filed to W3C |
| Contact.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/contacthtmlbefore.jpeg" height="auto" width="600px"> | Remove unnessacary aria labels from query items |
| Contact.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/contacthtmlafter.jpeg" height="auto" width="600px"> | Passed all tests. |
| 404.html   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/404html.jpeg" height="auto" width="600px"> | Passed all tests  |

### 2. CSS 

CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages - Before    | [W3C ](https://jigsaw.w3.org/css-validator/) | <img src="assets/images/testing/cssbefore.jpeg" height="auto" width="600px"> | Remove text shadow class for 311, apply comma after "Montserrat" 322, remove space between 1 and 00% for line 501. |
| All Pages - After    | [W3C](https://jigsaw.w3.org/css-validator/)| <img src="assets/images/testing/cssafter.jpeg" height="auto" width="600px">  | Passed all tests.   |

### 3. Link Testing

Links checked with [W3C Link Checker](https://validator.w3.org/checklink).



| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages   | [W3C ](https://validator.w3.org/checklink) | <img src="assets/images/testing/linktesting.jpeg" height="auto" width="600px"> | All links tested and valid - instagram and linked in links checked manually as they are blocked by robot.txt - working. 

### 4. JavaScript 

| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| contact.js   | [JSHint](https://validator.w3.org/checklink) | <img src="assets/images/testing/contactjs.jpeg" height="auto" width="600px"> | Warnings ignored, issue is with JSHint |
| main.js  | [JSHint](https://validator.w3.org/checklink) | <img src="assets/images/testing/mainjs.jpeg" height="auto" width="600px"> | Warnings ignored, issue is with JSHint |


<h2 id="mobiletesting">Mobile Testing</h2>

## 1. Lighthouse

Preliminary mobile testing is undertaken with Chrome dev tools Lighthouse. This assesses the pages Performance, Accessibility, Best Practices and SEO

| Page      | Screenshot           | Notes              |
|-----------|----------------------|--------------------|
| index.html |<img src="assets/images/testing/indextestingmobile.jpg" width="400px" height="auto"> | SEO ignored - LEARN MORE button is specific enough for purpose in this instance. |
| about.html|<img src="assets/images/testing/abouttestingmobile.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| gallery.html|<img src="assets/images/testing/gallerymobiletesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |00
| contact.html|<img src="assets/images/testing/contactmobiletesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| 404.html |<img src="assets/images/testing/404testingmobile.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |

<h2 id="desktoptesting">Desktop Testing</h2>

## 1. Lighthouse

Preliminary mobile testing is undertaken with Chrome dev tools Lighthouse. This assesses the pages Performance, Accessibility, Best Practices and SEO

| Page      | Screenshot           | Notes              |
|-----------|----------------------|--------------------|
| index.html - before |<img src="assets/images/testing/homepagedesktoptestingbefore.jpg" width="400px" height="auto"> | Footer links increased to 16px to improve accessibility |
| index.html - after |<img src="assets/images/testing/indexdesktopafter.jpg" width="400px" height="auto"> | SEO ignored - LEARN MORE button is specific enough for purpose in this instance. |
| about.html|<img src="assets/images/testing/aboutdesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| gallery.html|<img src="assets/images/testing/gallerydesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |00
| contact.html|<img src="assets/images/testing/contactdesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| 404.html |<img src="assets/images/testing/404desktoptesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |

<h2 id="accessibility">Accessibility</h2>

## 1. WAVE

More detailed accessibility testing was undertaken using [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool.


| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| index.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/indexwaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/indexwavealerts.jpeg" height="auto" width="600px">| Redundant link warning ignored - the 'READ MORE' button appears stationary on the page and only ever appears once at a time. It appears redundant as it is found several times in the code in order to button appear consistently over all images in the carousel. <br><br>Small text ignored - this is for the copyright at the bottom of the footer. <br><br> Long aria-labels ignored - under 100 characters so still succinct. These appear on the 'piffy logos' which are Kim's own logos and the hyperlinks require more in depth explination to make sense to the user. |
| about.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/aboutwaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/aboutpagewavedetails.jpeg" height="auto" width="600px"> | PDF button has clear labels, the PDF itself has been formatted with clear headings and the text in it is selectable to assist screen readers. <br><br> First paragaph left alone as it is less than 500 characters of justified text. Second paragraph has had break inserted to make the larger block of justified text more ledgible. <br><br> Small text ignored - this is for the copyright at the bottom of the footer.|
| gallery.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/gallerywaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/gallerywavedetails.jpeg" height="auto" width="600px"> <img src="assets/images/testing/gallerywavefixed.jpeg"> |ERROR RESOLVED <br><br> Added CSS class display:none to the h1 heading on gallery page to resolve the contrast error. Detailed descriptions of images required on the gallery page as this provides a richer user experience for sighted users. <br><br>Small text ignored - this is for the copyright at the bottom of the footer.|
| contact.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/contactwave.jpeg" height="auto" width="600px"> <img src="assets/images/testing/contactwavedetails.jpeg" height="auto" width="600px"> <img src="assets/images/testing/contactwaveafter.jpeg" height="auto" width="600px"> |ERROR RESOLVED <br><br> Hidden text added to social media icons on the form submit window. <br><br> Redundant link ignored: social icons only appear again after form submission and form part of a call to action. <br><br> Small text ignored - this is for the copyright at the bottom of the footer.|
| 404.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/404wave.jpeg" height="auto" width="600px"> | No substantial issues |

<h2 id="manual">Manual Testing</h2>

The site has been tested across a wide variety of devices to offer a detailed snapshot of the User Experience and iron out any final issues. Users were directed to the site and asked to send screenshots of each page. The users were also asked to report any issues they had with the site. 

## 1.Mobile

| Device/Browser              | Screenshots           | Notes              |
|----------------------|----------------------|--------------------|
| iPhone 11 - Chrome | <img src="assets/images/testing/iphone11index.png" height="auto" width="200px"> <img src="assets/images/testing/iphone11about.png" height="auto" width="200px"> <img src="assets/images/testing/iphone11gallery.png" height="auto" width="200px"> <img src="assets/images/testing/iphone11contact.png" height="auto" width="200px"> | No issues reported. |
| iPhone SE - Safari | <img src="assets/images/testing/iphoneSEindex.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphoneSEabout.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphoneSEgallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphoneSEcontact.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphoneSEabout2.jpeg" height="auto" width="200px">| ERROR RESOLVED (SEE LAST IMAGE IN COLUMN): Alignment issue on about page (misaligned - wider on left and thinner on right.) |
| iPhone 12 - Safari | <img src="assets/images/testing/iphone12index.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone12about.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone12gallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone12contact.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone12about2.jpeg" height="auto" width="200px"> | ERROR RESOLVED (SEE LAST IMAGE IN COLUMN): Alignment issue on about page (misaligned - wider on left and thinner on right.) |
| iPhone 13 Pro - Safari | <img src="assets/images/testing/iphone13index.png" height="auto" width="200px"> <img src="assets/images/testing/iphone13about.png" height="auto" width="200px"> <img src="assets/images/testing/iphone13gallery.png" height="auto" width="200px"> <img src="assets/images/testing/iphone13contact.png" height="auto" width="200px"> | No issues reported |
| iPhone 14 Pro Max - Safari | <img src="assets/images/testing/iphone14index1.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14about1.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14gallery1.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14contact1.png" height="auto" width="200px"> | No issues reported |
| iPhone 14 Pro Max - Chrome | <img src="assets/images/testing/iphone14index2.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14about2.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14gallery2.png" height="auto" width="200px"> <img src="assets/images/testing/iphone14contact2.png" height="auto" width="200px"> | No issues reported |
| iPhone 15 - Safari | <img src="assets/images/testing/iphone15index.png" height="auto" width="200px"> <img src="assets/images/testing/iphone15about.png" height="auto" width="200px"> <img src="assets/images/testing/iphone15gallery.png" height="auto" width="200px"> <img src="assets/images/testing/iphone15contact.png" height="auto" width="200px"> | No issues reported
| iPhone 16 - Safari | <img src="assets/images/testing/iphone16index.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone16about.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone16gallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone16contact.jpeg" height="auto" width="200px"> <img src="assets/images/testing/iphone16about2.jpeg" height="auto" width="200px">| ERROR RESOLVED (SEE LAST IMAGE IN COLUMN): Alignment issue on about page (misaligned - wider on left and thinner on right.) |
| Samsung S21 | <img src="assets/images/testing/samsungS21index.jpeg" height="auto" width="200px"> <img src="assets/images/testing/samsungS21about.jpeg" height="auto" width="200px"> <img src="assets/images/testing/samsungS21gallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/samsungS21contact.jpeg" height="auto" width="200px"> | No issues reported. |
| Xiomi Redmi | <img src="assets/images/testing/xiomiredmiindex.jpeg" height="auto" width="200px"> <img src="assets/images/testing/xiomiredmiabout.jpeg" height="auto" width="200px"> <img src="assets/images/testing/xiomiredmigallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/xiomiredmicontact.jpeg" height="auto" width="200px"> <img src="assets/images/testing/xiomiredmiabout2.jpeg" height="auto" width="200px">| ERROR RESOLVED (SEE LAST IMAGE IN COLUMN): Alignment issue on about page (misaligned - wider on left and thinner on right.) |

## 2. Tablets

| Device/Browser              | Screenshots           | Notes              |
|----------------------|----------------------|--------------------|
| iPad Pro 2018 - Safari  | <img src="assets/images/testing/ipadpro24index.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24about.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24gallery.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24contact.png" height="auto" width="200px"> | No issues reported.
| iPad 2021 - Safari  | <img src="assets/images/testing/ipad2012index.png" height="auto" width="200px"> <img src="assets/images/testing/ipad2012about.png" height="auto" width="200px"> <img src="assets/images/testing/ipad2012gallery.png" height="auto" width="200px"> <img src="assets/images/testing/ipad2012contact.png" height="auto" width="200px"> | No issues reported.
| iPad Pro 2024 - Safari  | <img src="assets/images/testing/ipadpro24index.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24about.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24gallery.png" height="auto" width="200px"> <img src="assets/images/testing/ipadpro24contact.png" height="auto" width="200px"> | No issues reported. |

## 3. Laptop/Desktop 

| Device/Browser              | Screenshots           | Notes              |
|----------------------|----------------------|--------------------|
| iMac 2024 - Chrome  | <img src="assets/images/testing/imac24index.png" height="auto" width="200px"> <img src="assets/images/testing/imac24about.png" height="auto" width="200px"> <img src="assets/images/testing/imac24gallery.png" height="auto" width="200px"> <img src="assets/images/testing/imac24contact.png" height="auto" width="200px"> | Image in 3rd column of about page is too large. Adjust responsive sizing. - Issue has since been resolved. |
| HP Elitebook - Edge  | <img src="assets/images/testing/hpeliteindex.png" height="auto" width="200px"> <img src="assets/images/testing/hpeliteabout.png" height="auto" width="200px"> <img src="assets/images/testing/hpelitegallery.png" height="auto" width="200px"> <img src="assets/images/testing/hpelitecontact.png" height="auto" width="200px"> | No major issues reported. Slight size issues on about image (3rd column - since resolved.) |
| MSI Trident 3 - Chrome | <img src="assets/images/testing/msitridentiindex.jpg" height="auto" width="200px"> <img src="assets/images/testing/msitridentabout.jpg" height="auto" width="200px"> <img src="assets/images/testing/msitridentgallery.jpg" height="auto" width="200px"> <img src="assets/images/testing/msitridentcontact.jpg" height="auto" width="200px"> | No issues reported. |
| MSI GF65 - Opera GX | <img src="assets/images/testing/operagxindex.jpeg" height="auto" width="200px"> <img src="assets/images/testing/operagxabout.jpeg" height="auto" width="200px"> <img src="assets/images/testing/operag6gallery.jpeg" height="auto" width="200px"> <img src="assets/images/testing/operagxcontact.jpeg" height="auto" width="200px"> |No major issues reported. Slight size issues on about image (3rd column - since resolved.) |

<h2 id="user"> User Stories Testing</h2>

| User Story            | Screenshots/Evidence           | Notes              |
|----------------------|----------------------|--------------------|
|As a recruiter I want to see a clear, well-structured site with intuitive navigation, so I can easily assess Kim’s understanding of UX/UI principles and her approach to design. | ![](assets/images/navfull.webp) ![](assets/images/footerfull.webp) ![](assets/images/navcollapse.webp) ![](assets/images/footerjs.webp). | Simple and slick navigation bar that is responsive to different devices, An impactful homepage with hero image/carousel showcasing Kim’s art and her style, A footer which aids the user experience, and includes newsletter/email sign up field. Use of JS in footer email sign up and on the contact form post submission. |
| As a prospective client I want to view smooth and interactive web elements so I can get a clear idea of how Kim's technical skills and creativity fit together. | ![](assets/images/carouseloverlaypreview.webp) ![](assets/images/overlayps.webp) | Dynamic hero imagery. Use of colour which compliments Kim’s artwork, Text accompanying on hero image/carousel which offers brief information about Kim’s style, Call to action ‘Learn More’ on carousel overlay, Stylish buttons and navigation aided by colour changing roll over, Interesting fonts which compliments Kim’s artistic style. |
As a potential employer I want to view Kim’s past credentials and get an in depth look at her professional profile so I can make an informed decision on whether or not to invite her to an interview. | ![](assets/images/aboutpreview.webp) | User story criteria is met with a [downloadable C.V](assets/kimjevoncv.pdf) and information from the [about page](about.html)|
| As a potential collaborator, I want to find a contact form or email link easily, so I can reach out to discuss possible partnerships or freelance opportunities. | ![](assets/images/contactpreview.webp) ![](assets/images/speaksoon.jpeg) ![](assets/images/footerjs.webp). | Clear link to [contact page](contact.html) in the navigation, Dynamic and simple contact form, When completed the form displays a direct email incase they want to reach out immediately or share extra info not included in the form, Call to action ‘email’ sign up button in the footer.|
| As an art enthusiast, I want to browse through a gallery of the artist's work, so I can see the artist’s style and creative range. | ![](assets/images/galleryresponsive.webp) ![](assets/images/gallerypreview.webp) | High quality images, A variety of images and content show Kim's versitality, Overall [gallery](gallery.html) gives a  strong visual idea of styles and skills. |
| As a first-time visitor, I want to see clear calls-to-action which will guide me toward contacting Kim for appropriate web development or creative projects. | ![](assets/images/overlayps.webp) ![](assets/images/artbuttonprev.webp) ![](assets/images/cvbuttonprev.webp) |Calls to action on each page guide the user through each page of the website. Learn more button on [homepage](index.html) guides to [about page](about.html). [Download C.V](assets/kimjevoncv.pdf) and view my work buttons on [about page](about.html).|
| As a student, I want to research and gather information on Kim’s artistic career to get an in-depth look at her credentials, creative process and web development techniques so that I can learn from her experiences. | ![](assets/images/speaksoon.jpeg) ![](assets/images/footerfull.webp) ![](assets/images/footerjs.webp) | Social media icons, Linked In and Instagram, Email/Newsletter sign up field. Direct contact through [contact page](contact.html). | 

<h2 id="bugs">Bugs</h2>

Here I list known issues with the site which are yet to be fixed.
For the full list of resolved issues throughout the project timeline please view the [Bug Log](BUGLOG.md). 

