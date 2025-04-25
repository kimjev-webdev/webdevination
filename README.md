<h1 align="center"> Welcome to WebDevination </h1>

<img src="assets\images\readmefiles\landingtitle.webp" alt="WebDevination" width="100%"/>

[WebDevination](http://webdevination.onrender.com/) is a portmanteau of web development and divination. This project seeks to blend the ancient art of tarot reading with the power of modern technology. The interactive tarot game is designed to offer a unique user experience that updates the divinatory experience within a digital framework.

With design influences drawn from the classic terminal interface, combined with a beautiful set of cards generated using MidJourney, the site introduces users to the concept of techno-divination which seeks to refresh and replicate the personal nature of in-person fortune telling. Javascript aids interactivity and helps to provide this authentic experience.

The single card reading, and three card reading both encourage the user to tap into their intuition and use the cards for introspective inquiry. A revolutionary 'techno oracle' powered by ChatGPT offers a unique and exciting addition to the cards, providing mysterious, metaphysical responses to the users questions. In addition to the card reading and AI oracle features, the site includes a dedicated page where users can explore the unique card designs and familiarise themselves with more specific meanings. For those wishing to learn or remember the cards, there's also an interactive game that challenges users to match card descriptions to the correct images, reinforcing their understanding in a fun and engaging way.

This project brings divination into the modern age, creating a space where the internet is justified as the perfect transcendental, immaterial environment for this practice which enables deeper connection and self-reflection.
## Table of Contents

<details>
  <summary><a href="#1">UX</a></summary>

  <details>
    <summary><a href="#2">Planning & Goals</a></summary>

1.  <a href="#3">Business Goals</a>
2. <a href="#4">User Profiles</a>
3. <a href="#5">User Stories</a>
4. <a href="#6">Minimum Viable Product</a>

  </details>

<details>
  <summary><a href="#7">Visual Design</a></summary>

1. <a href="#8">Wireframes</a>
2. <a href="#9">Colour Palette</a>
3. <a href="#10">Icons</a>
4.  <a href="#11">Fonts</a>
5.  <a href="#12">Images</a>
6.  <a href="#13">Styling</a>

</details>
</details>

</details>
<details>
<summary><a href="#14">Features</a></summary>
<details>
<summary><a href="#15">All Pages</a></summary>

1. <a href="#16">Navbar</a>
2. <a href="#17">Footer</a>
3. <a href="#18">Preloader</a>
</details>
<details>
<summary><a href="#19">Landing Page (index.html)</a></summary>

1. <a href="#20">Text/Icon Animation</a>
2. <a href="#21">Enter Button</a>
</details>
<details>
<summary><a href="#22">Readings Info & A.I Oracle Page (info.html)</a></summary>

1. <a href="#23">Terminal Typed Welcome & Skip Button</a>
2. <a href="#24">Readings Selection</a>
3. <a href="#25">A.I Oracle</a>
</details>
<details> 
  
<summary><a href="#26">Reading's Pages (onecard.html & threecard.html)</a></summary>

1. <a href="#27">Shuffle Feature</a>
2. <a href="#28">Draw Feature</a>
3. <a href="#29">Card Images & Descriptions</a>
4. <a href="#30">Modal</a>
5. <a href="#31">Fake Advertisment</a>

</details>
<details>
<summary><a href="#32">Cards Page (cards.html)</a></summary>

1. <a href="#33">Card Images</a>
2. <a href="#34">Flip Info</a>
3. <a href="#35">Suit Stories</a>
</details>

<details>
<summary><a href="#36">Learn Page (learn.html)</a></summary>

1. <a href="#37">Multiple Choice Game</a>
2. <a href="#38">Modal</a>

</details>
</details>
</details>

<details>
<summary><a href="#39">Technologies Used</a></summary>
 
<details>
<summary><a href="#40">Languages</a></summary>

1. <a href="#41">HTML</a>
2. <a href="#42">CSS</a>
3. <a href="#43">JavaScript</a> 
</details>


<details>
<summary><a href="#44">Frameworks</a></summary>

1. <a href="#45">Bootstrap 5</a>  
2. <a href="#46">Express.js</a>  
3. <a href="#47">Node.js</a>  
</details>

<details>
<summary><a href="#38">Libraries & APIs</a></summary>

1. <a href="#39">Font Awesome</a>  
2. <a href="#40">OpenAI API</a>  
3. <a href="#41">Aztro API</a>  
4. <a href="#42">Farmsense API</a>  
</details>

<details>
<summary><a href="#43">Platforms</a></summary>

1. <a href="#44">GitHub</a>  
2. <a href="#45">Render</a>  
3. <a href="#46">VS Code</a>  
</details>

<details>
<summary><a href="#47">Other Tools</a></summary>

1. <a href="#48">MidJourney</a>  
2. <a href="#49">Adobe Illustrator</a>  
3. <a href="#50">To WebP</a>  
4. <a href="#51">Trimmy</a>  
5. <a href="#52">Balsamiq</a>  
6. <a href="#53">Favicon Generator</a>  
7. <a href="#54">Procreate</a>  
</details>
</details>
</details>

<details>
<summary><a href="#55">Testing</a></summary>

1. <a href="#56">About Testing</a>
2. <a href="#57">Validation</a>
3. <a href="#58">Mobile Testing</a>
4. <a href="#59">Desktop Testing</a>
5. <a href="#60">Manual Testing</a>
6. <a href="#60a">User Story Testing</a>
7. <a href="#61">Bugs</a>
</details>


<details>
<summary><a href="#61a">Deployment</a></summary>
  
1. <a href="#61b">Github Deployment</a>
2. <a href="#61c">Render Deployment</a>

</details>

<details>
<summary><a href="#62">Credits</a></summary>

1. <a href="#64">Copyright Notice</a>
2. <a href="#65">Lisence For Use</a>
3. <a href="#66">Permitted Uses</a>
4. <a href="#67">Prohibited Uses</a>
5. <a href="#68">Trademark</a>
6. <a href="#69">No Warranty</a>
</details>

<details><summary><a href="#70">Contact</a></summary>
</details>

<h2 id="1"></h2>
<h2 id="2">UX - Planning & Goals</h2>

<h3 id="3">1. Business Goals</h3>

#### Primary Goal 
The primary objective of WebDevination is to seamlessly bring the ancient art of tarot reading into the digital age without compromising the experience. By blending modern web technology with the mystical world of divination, the site aims to create an immersive, authentic tarot experience that feels both modern and personal, guiding users through the process of self-discovery in a digital space.

#### Further business goals are:

<details>
<summary>Maintain Personal Connection</summary>
<li>Ensure that the experience of online tarot reading feels as intimate and connected as an in-person session, fostering a sense of trust and personalization for each user.</li>
</details>

<details> 
<summary>Provide an Intuitive Experience</summary>
<li>Design the interface to be user-friendly and easy to navigate, allowing users to focus on the tarot reading itself rather than technical elements, ensuring a smooth, engaging experience.</li>
</details>

<details>
<summary>Educate, Empower, and Encourage Self-Discovery </summary>
<li>Encourage users to learn more about tarot and their own intuition by offering educational elements alongside each reading, helping them understand the cards and their meanings in a deeper, more personal way. Foster a space that invites users to reflect, explore their emotions, and gain insights through the tarot, helping them grow personally and spiritually.</li>
</details>

<details>
<summary>Blending Aesthetics and Functionality</summary>
<li>Combine mystical tarot themes with the aesthetics of modern technology (like terminal interfaces), creating a visually appealing yet functional design that enhances the user experience without overshadowing the purpose of the site.</li>
</details>

<details>
<summary>Create a Transcendental Digital Space</summary>
<li>Offer a space where the intangible and transcendental nature of tarot can be experienced online, connecting users to both their own intuition and the ancient practice in a modern, accessible way.</li>
</details>

<details>
<summary>Promote Accessibility</summary>
<li>Ensure that the tarot experience is accessible to all users, regardless of their level of familiarity with tarot or technology, making it easy for anyone to access and enjoy.</li>
</details>

<details>
<summary>Establish an Online Presence</summary>
<li>Create a strong online presence that demonstrates technical and creative expertise, aiming to attract new opportunities and collaborations while showcasing the blend of art and web development.</li>
</details>


<h3 id="4">2. User Profiles</h3>

<details>
<summary>Experienced Pagan/Mystic</summary>
<li>A seasoned tarot practitioner seeking a digital space that maintains the sacred, intimate nature of in-person readings.</li>
</details>

<details>
<summary>Disabled Seeker</summary>
<li>A person with a disability who finds comfort and solace in tarot readings, requiring an accessible, personal online experience.</li>
</details>

<details>
<summary>Tech Enthusiast Looking for Meaning</summary>
<li>A software developer with an interest in spirituality, exploring how technology can enhance the tarot experience while maintaining its authentic essence. They are also interested in the dynamic and interactive elements on the site, it's design and functionality as well as the game itself.</li>
</details>

<details>
<summary>Folk Revival Enthusiast</summary>
<li>A person who has recently discovered tarot through the modern resurgence of interest in folk traditions, seeking a blend of contemporary spirituality and ancient practices in a digital format.</li>
</details>

<details>
<summary>Tarot Newcomer</summary>
<li>A curious individual intrigued by tarot, eager to learn and explore the practice through an intuitive and approachable platform.</li>
</details>

<h3 id="5">3. User Stories</h3>

* As an <b>experienced tarot practitioner</b>  I want the site to offer a digital tarot experience that feels as personal and sacred as an in-person reading so that I can connect deeply with the cards and trust the intuitive guidance they offer, without feeling detached from the mystic elements of the practice.
* As a <b>person with a disability who finds divination fun and accessible</b> I want the site to be easy to navigate using assistive technology, so I can experience the tarot readings in a way that feels personal, calming, and supportive, without feeling overwhelmed by design or functionality.
* As a <b> software developer with an interest in spirituality</b>  I want to interact with a tarot game that blends meaningful content with engaging, innovative design and functionality, so I can appreciate how the technical aspects of the site enhance the spiritual experience without overshadowing it.
* As <b>someone interested in the modern resurgence of folk traditions</b> I want the site to offer a contemporary approach to tarot that still maintains its roots in ancient practices, so I can experience tarot in a way that feels connected to both history and modern spirituality.
* As an <b>newcomer to tarot</b>  I want the site to provide a simple and approachable introduction to tarot, with easy-to-understand explanations and interactive features, so I can learn about tarot at my own pace and feel comfortable exploring the cards without feeling overwhelmed.

<h3 id="6">4. Minimum Viable Product</h3>

<details> 
<summary>Responsive & Accessible Design</summary> 
<li>Ensure the website is accessible and looks good on various devices (desktops, tablets, smartphones).</li>
<li>Implement accessibility features such as screen reader support, keyboard navigation, high-contrast mode, and adjustable text size. A simple, intuitive layout with clear navigation to make the site comfortable for users with disabilities.</li>
</details>

<details>
<summary>Navigation</summary>
<li> An easy-to-navigate menu that includes links which guide users around the site.</li>
 </details>

 <details>
 <summary>Landing Page</summary>
<li>An animated and inviting landing page that helps set the 'mystic' feeling of the experience right from the start.</li>
</details>

<details>
<summary>About the Game</summary>
<li>Information that offers explination for the game and guides the user and optimises their experience before they start playing. Can be skipped.</li>
</details>

<details>
<summary>Interactive Tarot Game</summary>
<li> A basic tarot game offering a single card draw which presents answer to a yes/no question.</li>
<li> A basic tarot game offering a three card draw which provides more context about a question with cards representing past, present and future.</li>
<li> Written information about the chosen cards which supplements the user and helps them interpret their reading.</li>
</details>

<details>
<summary>Technical and Spiritual Fusion</summary>
 <li>A sleek, responsive design that reflects a balance between spirituality and modern tech, with interactive elements (such as smooth transitions when drawing cards) and clean, intuitive functionality.</li>
<li>Phosphourescent glowing green text on primarily black background to reference terminal display.</li>
<li>Unique card designs which complement the terminal aesthetic, reference the developer's artistic style and authentically connects the user to the symbolism of tarot.</li>
 </details>

<h2 id="7">UX - Visual Design</h2>

<h3 id="8">1. Wireframes</h3>

<details><summary>Wireframes</summary>

### 1. Landing Page Wireframes (index.html)

| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets/images/wireframes/indexmob1.webp" height="200"/> | <img src="assets/images/wireframes/indexdt1.webp" height="200"/> |
| <img src="assets/images/wireframes/indexmob2.webp" height="200"/> | <img src="assets/images/wireframes/indexdt2.webp" height="200"/> |

### 2. Info, Reading Selection & Oracle Page Wireframes (info.html)

| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets\images\wireframes\infomob.webp" height="200"/> | <img src="assets\images\wireframes\infodt.webp" height="200"/> |

### 3. One Card Reading Page Wireframes (info.html)

| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets\images\wireframes\onecardmob1.webp" height="200"/> | <img src="assets\images\wireframes\onecarddt1.webp" height="200"/> |
| <img src="assets\images\wireframes\onecardmob2.webp" height="200"/> | <img src="assets\images\wireframes\onecarddt2.webp" height="200"/> |
| <img src="assets\images\wireframes\onecardmob3.webp" height="200"/> | <img src="assets\images\wireframes\onecarddt3.webp" height="200"/> |

### 4. Three Card Reading Page Wireframe (threecard.html)


| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets\images\wireframes\threecardmob1.webp" height="200"/> | <img src="assets\images\wireframes\threecarddt1.webp" height="200"/> |
| <img src="assets\images\wireframes\threecardmob2.webp" height="200"/> | <img src="assets\images\wireframes\threecarddt2.webp" height="200"/> |
| <img src="assets\images\wireframes\threecardmob3.webp" height="200"/> | <img src="assets\images\wireframes\threecarddt3.webp" height="200"/> |

### 5. Card Designs & Interpretation Supplement Page Wireframe (cards.html)

| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets\images\wireframes\cardsmob1.webp" height="200"/> | <img src="assets\images\wireframes\cardsdt1.webp" height="200"/> |
| <img src="assets\images\wireframes\cardsmob2.webp" height="200"/> | <img src="assets\images\wireframes\cardsdt2.webp" height="200"/> |
### 6. Learn Tarot Matching Game Page (learn.html)

| Mobile                                                   |   Desktop                                               |
|:----------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets\images\wireframes\learnmob1.webp" height="200"/> | <img src="assets\images\wireframes\learndt1.webp" height="200"/> |
</details>

<h3 id="9"> 2. Color Palette</h3>

![](assets/images/readmefiles/pallette.webp)

<details><summary>Terminal Green</summary>

#### Origins and Purpose
In the early days of computing, monochrome CRT (cathode-ray tube) monitors often displayed text in shades of green on black. This phosphorescent green was not just an aesthetic choice—it was a practical one:
CRT monitors used phosphor compounds to emit light when struck by an electron beam. The P1 phosphor, used in many displays, naturally emitted a green glow.

Readability - Green on black provided excellent contrast, reducing eye strain for prolonged periods of coding or command-line use.
Longevity - Green phosphor had a long persistence, meaning characters stayed visible slightly longer without flicker, enhancing clarity.

#### Modern Digital Terminals and Nostalgia
Even today, many digital terminal themes use shades of green on black—this is partly for readability, but largely due to nostalgic appeal. It taps into the retro-futuristic aesthetic of early hacking culture, matrix visuals, and vintage computing.

</details> 

<details><summary>Webdevination's Neon Green</summary>  

#### Artistic Reinterpretation

The chosen green ``(rgb(174, 255, 0)`` is brighter and more neon than classic terminal green. This is a subtle but impactful tweak that nods to the developer's own visual language. 
Since the card deck was generated by training midjourney with the developer's own artwork which often uses flourescent hues, this tone was also picked to coompliment the designs in the deck; bold, mystical, luminous.
Neon green feels more otherworldly than dull phosphor green. Even without a text shadow it is almost glowing - representing arcane energy, which aligns with the mystical, divinatory interface.

#### Adding Glow Through Text Shadow
The layered text-shadow:

``text-shadow: 0 0 5px #2aff1a, 0 0 10px #2aff1a, 0 0 20px #2aff1a;``

creates a radiant aura around each glyph. This emulates the soft bloom that would have been seen on CRT displays and further accentuates the "terminal meets tarot" feel:

Visual Depth - The glow give the text an extra dimension making the experience feel more tactile. 
It also adds and enchanting feel which references mystical glyphs perfect for a digital oracle/mystic experience.

</details>

<h3 id="10"> 3. Icons</h3>

A combination of icons from Google Material Icons, Font Awesome, and an Emoji have been used throughout this project. Icons have played a crucial role in solidifying the link between technology and esotericism. The landing page, info page, navbar and footer all utilize icons to enhance the design choices of the tarot site. 

For the landing page a selection of Google Material Icons were used to emphasise the connection between technology and mysticism. Below is a table showing the icons that 'flash between letters' in the landing sequence. Some of these icons were originally designed to represent ideas irrelevant to this project, but they are given new meaning in the context of divination. The table below outlines the icons used and their intended meaning within the scope of this project. 

#### Google Material Icons 

| Icon Preview | Icon Name | Description |
|--------------|-----------|-------------|
| ![](assets/images/readmefiles/icons/key.webp) | `key` | Key represents access or unlocking secrets/mysteries |
| ![](assets/images/readmefiles/icons/blur_on.webp) | `blur_on` | Blurred effect represents mystical aura |
| ![](assets/images/readmefiles/icons/saved_search.webp) | `saved_search` | Saved search represents looking inwards/ personal insight |
| ![](assets/images/readmefiles/icons/self_improvement.webp) | `self_improvement` | Meditation / inner growth |
| ![](assets/images/readmefiles/icons/paid.webp) | `paid` | Payment / Coin / Value / Suit of Pentacles|
| ![](assets/images/readmefiles/icons/remove_red_eye.webp) | `remove_red_eye` | Visionary / Third Eye / Perception |
| ![](assets/images/readmefiles/icons/electric_bolt.webp) | `electric_bolt` | Energy  or Lifeforce|
| ![](assets/images/readmefiles/icons/emoji_events.webp) | `emoji_events` | Trophy / achievement - represents suit of Cups|
| ![](assets/images/readmefiles/icons/flare.webp) | `flare` | Flare / light / sparkle / alchemy / fire |
| ![](assets/images/readmefiles/icons/emoji_nature.webp) | `emoji_nature` | Nature / spiritual connection |
| ![](assets/images/readmefiles/icons/auto_awesome.webp) | `auto_awesome` | Sparkles / magic |
| ![](assets/images/readmefiles/icons/public.webp) | `public` | Globe / world - The world card |
| ![](assets/images/readmefiles/icons/psychology_alt.webp) | `psychology_alt` | Brain / psyche |

#### Font Awesome Icons 

<p align="left">
  <img src="assets/images/readmefiles/icons/pentagram.webp" alt="Pentagram Icon" width="100" style="float: left; margin-right: 20px;">
  A custom icon was created on FontAwesome for the Navbar branding. The upright pentagram was chosen as the symbol underpins the entire metaphysical framework of the tarot. The pentagram is directly represented in The Suit of Pentacles. Its use in the branding space of the Navbar solidifies the use of web 'icons' as esoteric symbols throughout the project.
<br> 

Font Awesome's styling utilities have aided the 'flashing' of the icon, achieved by applying `fa-fade` inside of the `i class`.
</p>
<br>

<p align="left">
  <img src="assets/images/readmefiles/icons/heart.webp" alt="Heart Icon" width="100" style="float: left; margin-right: 20px;"><br>
  A second icon taken directly from the FontAwesome library was used in the footer. This adds a cohesive, lighthearted and personal touch to the otherwise straightforward and minimalistic footer used across the site. 
</p>
<br>

#### Emoji's

Emoji's are implemented on the site as playful supplements to the UX. 
<p align="left">
  <img src="assets/images/readmefiles/icons/crystal_ball.webp" alt="Heart Icon" width="100" style="float: left; margin-right: 20px;"><br>
  The crystal ball emoji was used in the title of the A.I oracle feature to help captivate the users attention. The color of the emoji also compliments the card designs featured on the info page and breaks up the otherwise heavy neon green and black elements.  
</p>
<br>

The four emoj's below reference the element's that the Minor Arcana suits correspond to. They are found inside the accordion for the Minor Arcana next to the suit titles on the 'Cards' page 
🔥💦🌪️🌳

<h3 id="11"> 4. Fonts </h3>

Typography plays a vital role in reinforcing the aesthetic and metaphysical tone of the project. Two distinct typefaces—Tourney and Source Code Pro—were chosen to complement the terminal-style theme and enhance the user’s immersive experience.

#### Primary Font - Tourney 

![](assets/images/readmefiles/tourney.jpg)

Tourney was selected and installed from the [Google Fonts Library](https://fonts.google.com/specimen/Tourney).

Tourney is a bold, futuristic display font that immediately conveys the tone of mysticism meeting modernity. It was chosen for headers and buttons because:

* It's condensed, geometric forms feel cryptic and alien —perfect for esoteric symbolism.
* The uppercase style evokes a commanding presence and ritualistic formality.
* It's synthetic, digital personality aligns with the site's techno-terminal aesthetic, making each heading feel like a cosmic interface label.
* By using Tourney on interactive elements (like buttons), the site invokes the feeling of activating a spell or accessing a sacred machine.
* Buttons using Tourney feature hover-based flash animations to clearly distinguish them from static headers.
* This visual flash, combined with a cursor pointer and a subtle `transform: scale(1,1)` effect, signals the button's interactivity and sets it apart from passive text.
* Letter-spacing is increased on both headers and buttons to enhance its glyphic, rune-like energy.
* Tourney appears in bright green tones that echo the mystic-glow palette used throughout the site.

Tourney/button example: <br>
![](assets/images/readmefiles/tourneybutton.webp)

#### Secondary Font - Source Code Pro

![](assets/images/readmefiles/sourcecodepro.webp) 

Source Code Pro was selected and installed via [Google Fonts Library](https://fonts.google.com/specimen/Source+Code+Pro?query=source+code).

Source Code Pro, a monospaced font originally designed for code editors, was selected for all paragraph and informational text because:

* It evokes the aesthetic of terminal interfaces, reinforcing the site's identity as a mystical operating system or divinatory console.
* It's fixed-width spacing makes it easy to scan and consistently legible, ideal for AI responses, tooltips, card descriptions, and modal text.
* The slightly italicized variant has been implemented to create a sense of quietness — as if the user is being whispered to by the machine, or gently told their fortune by a sentient digital oracle.
* Weights 400 and 500 were selected from the Google Fonts library to strike a balance between clarity and tone—bold enough to be readable, but light enough to feel elegant.
* The fallback stack is: `font-family: 'Source Code Pro', monospace;`
* This ensures that, in the absence of the Google font, the browser defaults to any available monospaced font. This choice is intentional: terminal-style text doesn’t need embellishment—as long as it’s monospaced, it retains the intended feel of a sacred codebase.

Fallback preview: 
![](assets/images/readmefiles/monospace.jpg)

<h3 id="12"> 5. Images </h3>

![](assets/images/readmefiles/images.jpg)

The tarot deck featured throughout this project was entirely custom-made using MidJourney, with artistic direction, structure, and refinement handled manually to ensure continuity, symbolism, and visual cohesion.

#### Original Art as Style Input

* The process began by feeding MidJourney with the developer’s own neon-infused illustrations and painted works. This not only grounded the deck in a unique personal style, but also allowed MidJourney to reflect consistent textures and color palettes from the onset.
  
#### Prompt Engineering with Purpose

* Prompts were carefully refined to align with the structure and symbolism of the original Rider–Waite–Smith tarot deck. Figures, objects, and settings were all influenced by this historic reference point, preserving the archetypal and symbolic elements of each card whilst evolving the aesthetic into something futuristic and enigmatic.

#### Stylistic Cohesion

* The neon tones of the developer’s own artwork, echoed throughout the card illustrations, were intentionally designed to complement the terminal-green hue used in the site’s typography and UI. This unifies the deck with the digital interface, visually complementing the 'operating system' that surrounds the cards.

#### Hand-Crafted Typography & Borders

* After generating the artwork, every card was brought into Adobe Illustrator, where each card front was then framed with a matching border.
* Using consistent geometry and visual weight gives the deck a unified identity.
* The intricate Art Nouveau-style border work offers a psychedelic but classical edge, amplifying the mystical and ornamental feel of the deck as though each card is a sacred or mystical object.
* The neon green stroke path around the black swirls in the border matches with the neon green terminal text.

#### Custom Card Backs

* Used in 'card flips'
* Separate card back designs were created to mirror the same visual language as the fronts.
* These backs incorporate the name of the project 'WEBDEVINATION' acting as a subtle signature. The psychedelic font and pattern on the back of the cards reflect the deck’s ritualistic function and digital mystique. The green hue on the backs matches with the terminal and `text-glow` class to give synergy between the other design elements and the cards themselves.
  
#### Curation & Optimization

* Final card artwork was selected from hundreds of MidJourney iterations and lightly refined before being exported as WebP files for maximum performance online.
* Card images and descriptions are all loaded dynamically through the json file `tarot.json`

#### Symbolic Integrity

* Although visually modern, the iconography, gestures, and spatial structures of the cards remain true to the symbolic language of traditional tarot ensuring that each one still carries its archetypal resonance and interpretive power.

<br>
<br>

<h3 id="13">6. Styling</h3>

The project’s visual identity is powered by a deep interplay between handcrafted CSS and immersive JavaScript logic, working together to create a world that feels both symbolic and alive.

#### CSS Styling Highlights

* The site uses over 100 custom CSS classes to style every element. From glowing buttons and floating icons to animated card draws, modals, and game elements.
* Multiple @keyframes animations are used to bring movement and atmosphere to the page: glowing effects, blinking lights, floating sparkles, flickering text, and portal transitions.
* A carefully structured class system allows consistent styling across pages while still letting individual components (like the oracle terminal, tarot deck, or navbar) express their own unique qualities and usefulness - no feature is redundant.
* Typography, spacing, and color are tightly integrated — from mystic-green glow on buttons to soft, monospaced text on responses — ensuring that every interaction feels like part of a ritual interface.

#### JavaScript-Driven Dynamics

* JavaScript is used extensively throughout the project to bring style to life: cards are loaded, flipped, shuffled, and drawn dynamically, all with coordinated animations and responsive behaviors.
* The navbar transitions, menu highlights, and active link states are all controlled by JS to help users feel like they’re navigating a mystical interface, not just a static page.
* Across the site loading transitions, interactive prompts, and session-based effects are enhanced by JS logic, adding rhythm, feedback, and timing that pure CSS alone can't provide.
* Rather than just adding behavior, JavaScript in this project is used to amplify the aesthetic, helping the visuals pulse, breathe, and respond to the user’s presence.
* Together, the custom CSS and dynamic JavaScript form a ritualistic design language, giving the entire site a surreal, responsive quality that transforms it from a simple website into a mystical, living experience.

<h2 id="14"></h2>

<h2 id="15">Features - All Pages</h2>

<h3 id="16">1. Navbar </h3>

![](assets/images/readmefiles/navbar1.jpg)

The navbar can be found on all pages apart from the landing page
It was created from a [boilerplate](https://getbootstrap.com/docs/4.0/components/navbar/) copied from Bootstrap 5 and then customized. It is fully responsive thanks to Bootstrap 5’s navbar-expand-lg and collapse behavior.

| <img src="assets/images/readmefiles/navbar2.JPG" alt="Navbar 1" style="width: 45%;"><br><img src="assets/images/readmefiles/navbar3.JPG" alt="Navbar 2" style="width: 45%;"> | 
* Fully responsive layout using Bootstrap 5’s `navbar-expand-lg` and collapse behavior.  
* Dropdown menu under "Readings" links to the One Card and Three Card spread pages.  
* Transparent background allows visuals and text to stylishly pass through the navbar.  
* Despite the fact that on `index.html`, users are prompted to rotate their device horizontally for optimal experience — all paragraph text and headings are styled to fit within the space between the navbar brand and the hamburger icon, maintaining readability and styling both horizontally and vertically just in case a user misses the "rotate screen" prompt on the landing page.  
* Uses a custom Font Awesome pentagram icon as the brand element, referencing both the occult and the suit of Pentacles.  
* The pentagram icon links back to `index.html` and features a pulsing glow animation that mirrors button keyframe styles.  
* Custom glow effects on links (`text-glow`) enhance interactivity and mood.  
* Mobile menu transforms into a glowing X icon when toggled.  
* Utilizes a monospaced, mystic-coded style (`Source Code Pro`). |

<h3 id="17">2. Footer</h3>

![](assets/images/readmefiles/footer1.jpg)

* Fixed at the bottom of every page, styled with subtle glow and low opacity text.
* Display the current year dynamically using JavaScript
* Includes the developers name and copyright
* Heart icon incorporated to match with index.html use of icons.
* Minimal styling and small font size to remain non-distracting.
* Inherits glow and font styling from global .text-glow and Source Code Pro.

<h3 id="18">3. Preloader</h3>

![](assets/images/readmefiles/preloader.gif)

* Handled through nav.js - please view file for full notes.
* Fullscreen overlay that displays on initial page load.
* Portal-style animation: a glowing circle that expands on entry and contracts on exit.
* Alternates between entry/exit using JavaScript `sessionStorage` to make the user feel like they are entering and leaving the portal between each page.
* CSS animations (@keyframes) manage scaling, rotation, and opacity.
* Lightweight and optimized for fast performance across devices.
* Adds an immersive mystical "gateway" effect to the UX - enhancing the convergence between technology and mysticism. 

<h2 id="19">Features - Landing Page (index.html).</h2>

![](assets/images/readmefiles/indexmockup.PNG)

<h3 id="20">1. Text/Icon Animation</h3>

<h3 id="21">2. Enter Button</h3>

<h2 id="22">Features - Readings Info & A.I Oracle Page (info.html)  </h2>

![](assets/images/readmefiles/infomockup.PNG)

<h3 id="23">Terminal Typed Welcome & Skip Button</h3>
<h3 id="24">Readings Selection</h3>
<h3 id="25">A.I Oracle</h3>

<h2 id="26">Features - Reading's Pages (onecard.html & threecard.html)</h2>

![](assets/images/readmefiles/onecardmockup.PNG)
![](assets/images/readmefiles/threecardmockup.PNG)

<h3 id="27">Shuffle Feature</h3>
<h3 id="28">Draw Feature</h3>
<h3 id="29">Card Images & Descriptions</h3>
<h3 id="30">Modal</h3>
<h3 id="31">Fake Advertisment</h3>

<h2 id="32">Cards Page (cards.html)</h2>

![](assets/images/readmefiles/cardsmockup.PNG)
<h3 id="33">Card Images
<h3 id="34">Flip Info
<h3 id="35">Suit Stories
  
<h2 id="36">Learn Page (learn.html)

![](assets/images/readmefiles/learnmockup.PNG)
<h3 id="37">Multiple Choice Game
<h3 id="38">Modal

<h2 id="39"></h2> 
<h2 id="39">Technologies Used</h2>
<h3 id="40">Languages</h3>

#### 1. HTML
The foundational markup language used to structure all pages across the site, including the Oracle, card gallery, spreads, and modals.

#### 2. CSS
Responsible for the entire visual language of the project. Custom classes were written to manage layout, color, animation, interactivity, and theming. Over 100 hand-authored classes power the site’s unique styling system.

#### 3. JavaScript
Powers dynamic behavior throughout the site. From controlling the navbar and shuffling cards to managing portal animations, dropdown logic, and Oracle input/output — JavaScript gives the site life and movement.

<h3 id="41">Frameworks</h3>

#### 1.  [Bootstrap 5](https://getbootstrap.com/)
Used as a responsive layout foundation and for components like the navbar, modals, and accordion galleries. Utility classes were also used throughout, though heavily customized to create a completely original aesthetic.

#### 2. Express.js
Provides the lightweight backend framework for the AI Oracle, handling routes, requests, and API integration.

#### 3. Node.js
Runs the server-side logic for the Oracle, allowing API calls to OpenAI, Aztro, and Farmsense while managing environment variables and user session memory.

<h3 id="42">Libraries & APIs</h3>

#### 1. [Font Awesome](https://fontawesome.com/)
Used throughout for iconography, including social links and the custom navbar pentagram icon.

#### 2. OpenAI API
Generates poetic, symbolic responses based on user questions and astrological context.

#### 3. Aztro API
Supplies real-time daily horoscopes based on user-provided birth date or zodiac sign.

#### 4. Farmsense API
Delivers current moon phase data to enrich the Oracle's predictions with lunar energy.

#### 5. [Google Fonts](https://fonts.google.com/)
Used to import and serve the project’s two core typefaces 'Tourney' and 'Source Code Pro'

<h3 id="43">Platforms</a>

#### 1. [Github](https://github.com)

Hosts the deployed frontend via GitHub Pages and stores the full project codebase with version control.

#### 2. [Render](https://render.com)
Hosts the backend Oracle service and allows secure management of API keys via environment variables.

#### 3. [VS Code](https://code.visualstudio.com)
The core IDE used to design, build, and test all code for both the frontend and backend.

<h3 id="44">Other Tools</a>

#### 1. [MidJourney](https://www.midjourney.com/)
AI image generation tool trained with original artwork from Kim Jevon’s portfolio. Used to generate the full tarot deck with prompts referencing Rider-Waite symbolism. it was also used to generate images for the fake fortune teller advertisment. 

#### 2. [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator/ipad.html)
Used to create hand-drawn card borders, typeset labels, and design consistent backs/fronts for all 78 tarot cards.

#### 3. [To WebP](https://towebp.io/)
Converts all images to .webp format for optimized loading and sharp, high-fidelity visuals on all devices.

#### 4. [Trimmy](https://app.trimmy.io/)
Used to crop and clean the exported tarot images, ensuring perfect alignment and consistency in visual spacing.

#### 5. [Balsamiq](https://balsamiq.com)
For sketching and visualizing early wireframes and planning responsive layouts.

#### 6. [Favicon](https://favicon.io/) 
Used to generate the site’s favicon and icon manifest files.

#### 7. [Procreate](https://procreate.com/) 
Used to paint over, clean up, or manually correct MidJourney outputs — removing unwanted elements or enhancing details that the AI misinterpreted.

#### 8. [ChatGPT](https://chatgpt.com/)
Used to brainstorm, refine prompts, debug code, and provides the mystical language for the Oracle itself. 


























<h2 id="55">Testing</h2>

<h3 id="56">1. About Testing</h3>

A document including a table with all tests can be found [here](TESTING.md).

* The entire site has been tested comprehensivley throughout the build. Further evidence of continuous testing can be seen throughout the [deployment history](https://github.com/kimjev-webdev/Unit1/deployments) on Github. 
* Each time a feature was added, all the pages on the site were tested to see if there was an impact.
* The site was sent to friends, family and contacts on social media  feedback and testing.
* The images in the gallery have been compressed so they are all below 300kb with an average image size of less than 150kb. 
* Color contrasts have been checked to ensure compliance with WCAG guidlines.

<h3 id="57">2. Validation</h3>

The validation section of the testing document can be found [here](TESTING.md#validation)

<h3 id="58">3. Mobile Testing</h3>

The mobile testing section of the testing document can be found [here](TESTING.md#mobiletesting)

<h3 id="59"> 4. Desktop Testing</h3>

The desktop testing section of the testing document can be found [here](TESTING.md#desktoptesting)

<h3 id="60"> 5. Manual Testing</h3>

The manual testing section of the testing document can be found [here](TESTING.md#manual)

<h3 id="60a"> 6. User Story Testing</h3>

The user story testing section of the testing document can be found [here](TESTING.md#user)

<h3 id="61"> 7. Bugs </h3>

A comprehensive log of all debugging actions taken throughout the project timeline can be found [here](BUGLOG.md).

<h2 id="61a"> Deployment </h2>

<h3 id="61b"> 1. Github Deployment </h3>

Github Pages works withh repositories that contain static files. 

The website is publicly accessible via this URL: https://kimjev-webdev.github.io/kimjevon/.

The instructions to deploy the project via Github Pages are as follows:

1. Go to the **Settings** tab in your repository.
2. Select **Pages** from the sidebar.
3. In the **Source** dropdown, select the **main** branch.
4. In the next drop down, keep **/root** as the default option.
5. Click **Save.**
6. Wait 2-3 minutes for the project to go live.

*To add a custom domain, purchase one from an external provider and enter it in the box at the bottom of the page.*

<h2 id="62">Credits</h2>

<h3 id="64">1. Copyright Notice</h3>

© 2025 Kim Jevon. All rights reserved.

The content on this website, including but not limited to text, images, graphics, designs & logos (with the exception of Instagram & LinkedIn Icon's), are the property of Kim Jevon and are protected by copyright law. Unauthorized use, reproduction, distribution, or modification of any materials from this website without the express written permission is prohibited.

<h3 id="65">2. Licence for Use</h3>

By accessing or using this website, you are granted a limited, non-exclusive, and non-transferable licence to view and use the content solely for personal, non-commercial purposes. You may not reproduce, distribute, transmit, display, or create derivative works based on any content from this website, except as permitted by the copyright owner. 

<h3 id="66">3. Permitted Uses</h3>

* You may view and download content for personal use, provided you do not remove or alter any content.
* You may share links to pages on the website, provided that proper attribution is given to the original source.

<h3 id="67">4. Prohibited Uses</h3>

* You may not use any content on this website for commercial purposes without prior written consent from Kim Jevon.
* You may not copy, reproduce, or distribute content in any manner that could infringe on the intellectual property rights of Kim Jevon.
* You may not use automated tools or bots to scrape, index, or otherwise extract content from this website.

<h3 id="68">5. Trademark</h3>

* The trademark logo displayed on this website are registered and unregistered trademarks of Kim Jevon. Nothing on this website grants any right to use any trademark without the prior written permission of the trademark owner.

<h3 id="69">6. No Warranty</h3>

* While every effort has been made to ensure the accuracy of the information provided on this website, Kim Jevon makes no representations or warranties regarding the accuracy, completeness, or reliability of any content on the site. 
* The website is provided "as is," and users access it at their own risk.

<h2 id="70">Contact<h2>

For any further information, queries & questions you can contact me directly: kimjevon.web@gmail.com
