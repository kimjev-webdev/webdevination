
// improved function to generate the card section with semantic structure and aria labels
function generateCardSection(cards, suit) {
    let cardHtml = `<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-6 g-4" role="region" aria-label="${suit.charAt(0).toUpperCase() + suit.slice(1)} cards">`;

    cards.forEach(card => {
        const imagePath = `assets/images/cardfronts/${card.name.toLowerCase().replace(/ /g, '')}.webp`;

        const specificsHtml = card.specifics
            .replace(/LOVE:/g, "<strong>💜 LOVE:</strong>")
            .replace(/CAREER:/g, "<strong>✨ CAREER:</strong>")
            .replace(/FINANCE:/g, "<strong>💰 FINANCE:</strong>")
            .replace(/HEALTH:/g, "<strong>🌿 HEALTH:</strong>")
            .replace(/\n/g, "<br><br>");

        cardHtml += `
            <div class="col">
                <article class="flip-card" role="group" aria-labelledby="card-${card.name.replace(/\s+/g, '-').toLowerCase()}-title" data-flipped="false">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" aria-hidden="false">
                            <img src="${imagePath}" class="card-img-top" alt="${card.name}">
                        </div>
                        <div class="flip-card-back" aria-hidden="true">
                            <h3 id="card-${card.name.replace(/\s+/g, '-').toLowerCase()}-title" class="visually-hidden">${card.name}</h3>
                            <p>${specificsHtml}</p>
                        </div>
                    </div>
                </article>
            </div>
        `;
    });

    cardHtml += '</section>';
    return cardHtml;
}

// Function to insert the Major Arcana intro paragraph before the cards
function insertMajorArcanaIntro() {
    const introHtml = `
        <div id="majorArcanaIntro" class="intro-paragraph mb-4">
            <p>The Major Arcana is the sacred spine of the tarot, a luminous thread that weaves through the soul’s incarnate journey. These 22 archetypal cards are not mere symbols; they are cosmic initiations — mirrors of the soul's growth, echoes of ancient wisdom, and portals to the mysteries of life, death, and rebirth.</p>
            <p>We begin as <strong>The Fool</strong>; innocence unbound. With a knapsack of dreams and a heart full of wonder, we step off the cliff and begin the journey through the Major Arcana.</p>
            <p>Each card encountered is a lesson, a challenge, a transformation.</p>
            <p>We meet <strong>The Magician</strong>, who teaches manifestation and will; <strong>The High Priestess</strong>, who whispers of inner realms and mystery. With <strong>The Empress</strong> and <strong>The Emperor</strong>, we learn the sacred dance of nurturance and order. <strong>The Hierophant</strong> initiates us into tradition and spiritual law, while <strong>The Lovers</strong> present the divine puzzle of love and choice.</p>
            <p><strong>The Chariot</strong> is driven by our will, and <strong>Strength</strong> teaches us that true power lies in compassion. In <strong>The Hermit</strong>, we find wisdom in solitude. <strong>The Wheel of Fortune</strong> spins — fate stirs, and we learn that the only constant is change.</p>
            <p>We face <strong>Justice</strong>, who asks us for balance. We are forced to surrender with <strong>The Hanged Man</strong>, and we metaphorically die with <strong>Death</strong> — but oh, how sweet the death of the old self!? <strong>Temperance</strong> restores the light after our rebirth. Then comes the shadow: <strong>The Devil</strong> tempts us, but everyone knows <strong>The Tower</strong> with weak foundations always falls.</p>
            <p><strong>The Star</strong> is born from collapse. It brings with it a glistening and introspective hope. <strong>The Moon</strong> reveals all illusion, and <strong>The Sun</strong> shines with divine clarity. <strong>Judgement</strong> calls us to rise from the ashes — and finally, in the macrocosm of <strong>The World</strong>, the soul is at one with all that is. The journey is finally complete… until a new cycle begins.</p>
        </div>
    `;

    const cardContainer = document.getElementById("majorArcanaCards");
    if (cardContainer) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = introHtml;
        const parsedIntro = tempDiv.firstElementChild;
        cardContainer.parentNode.insertBefore(parsedIntro, cardContainer);
    }
}

// Function to insert suit intro paragraphs dynamically
function insertSuitIntro(suitId, storyText) {
    const cardContainer = document.getElementById(`${suitId}Cards`);
    if (cardContainer) {
        const introDiv = document.createElement("div");
        introDiv.className = "suit-intro mb-4";
        introDiv.style.position = "relative";
        introDiv.style.zIndex = "2";
        introDiv.style.maxWidth = "800px";
        introDiv.style.margin = "0 auto";
        introDiv.style.padding = "1rem";
        introDiv.innerText = storyText;

        cardContainer.parentNode.insertBefore(introDiv, cardContainer);
    }
}

// Function to enable flip toggle on touch devices
function enableTouchFlipBehavior() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                this.classList.toggle('flipped');
            }
        });
    });
}

// DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", function () {
    fetch('assets/tarot.json')
        .then(response => response.json())
        .then(data => {
            const majorArcanaCards = document.getElementById('majorArcanaCards');

            const majorArcanaNames = [
                "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
                "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
                "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
                "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"
            ];

            const majorArcana = data.tarot.filter(card => majorArcanaNames.includes(card.name));
            const minorArcana = data.tarot.filter(card => !majorArcanaNames.includes(card.name));

            insertMajorArcanaIntro();

            insertSuitIntro("wands", `The journey of Wands begins with a spark; a flame has caught the wind! A wild idea born in the soul. The Ace is much like a match struck in the dark, an idea that ignites our inner vision. With Two we stand at a crossroads, a choice lays before us...action or non-action? By the Three, momentum is building. Our dream is becoming a reality, as the idea we concieved moves beyond the corporeal and into the material world.

But fire demands fuel. The Four of Wands celebrates progress, a pause for joy and the foundations we have laid. Then comes the Five; our ambition has been noticed and is met with competition! The Six rises victorious. The battle has won us recognition, and yet with the Seven, we are forced to defend ourselves again! The Eight of Wands shows that our perserverance is unwavering. We have gained too much momentum to stop now! The energy, that was once just an idea, is now unstoppable!

By Nine, exhaustion sets in. We have faced many battles along the way. Keeping up with something which has grown beyond us can be a great test of our resilience. The fire has been smothered but it does not die. The embers of that initial idea are still glowing. And with the Ten, wind catches our fire once more, relighting our inspiration! But this time it threatens to burn us instead of providing warmth. The culmination of our passion is, of course, karmic. Our desires carry a price.

The Wands court cards embody the element of fire. Through them we become masters of it. The Page is eager, curious, unthreatened. The Knight charges forward; bold, impatient, ablaze! The Queen is radiant and magnetic. A master of inspiration, and finally The King of Wands. He commands fire with wisdom. He leads with the experience of many trials and  with a clear vision...not his ego. After all he has experience the dangers of fire first hand. 

The Suit of Wands teaches us that passion is powerful and must be guided carefully. Creativity, ambition, desire...they are sacred flames. They can light the way forward, or blind us. Tend to the fire with respect for its power, or be consumed by it. Will your imagination lead you to your dreams or down the beaten track? The choice is yours...`);

            insertSuitIntro("cups", `The journey of Cups begins in the cosmic stillness. A chalice filled with ambrosia is offered to the divine. The Ace represents pure emotion; just a feeling in a heart that is so ready to open! In the Two, this love finds its mirror. A connection, union, the sacred exchange between souls. The Three celebrates the many faces that love can adopt; friendship, joy, or the magic of community.

But emotions are not always light. With The Four of Cups we turn inwards, discontented, even with the blessings we have been given. The heart closes with reluctance. We hesitate. Then the Five mourns. We ache with what’s been lost a long the way. We learn the hard lesson that grief is a neccasary part of love. The Six is a memory. A return to a time we were care free. It’s a bittersweet nostalgia...a reminder of our innocence and the love that lead us here. 

By the Seven our dream is revealed as illusion. Choices blur. What is real? What is fantasy? With the Eight of Cups we decipher between true, unconditional love, and attatchment. We must learn to be alone, in order to find real connections. In the Nine our bravery is rewarded. A wish is granted. We recieve it with gratitude; a full cup raised to the sky.

Then with the Ten of Cups we have truly arrived home. Communion; emotional harmony, family, wholeness. The journey has bloomed into love that lasts.

The court of Cups embody the qualities present in watery depths of our hearts. The Page is sensitive, dreamy, beginning to explore his intuition. The Knight radiates romance and charm...and of course, sometimes chases illusions. But who would know love otherwise? The Queen feels everything so deeply. She is a mother; nurturing, intuitive and wise. The King of Cups is emotionally masterful. Balanced; using both his heart and his head in order to be a compassionate leader.

The Suit of Cups teaches us the sanctity of our emotions and intuition. Love is a never ending journey. A path we choose to take. It begs us to feel everything fully; the good and bad, to forgive freely, and to swim with the currents of our souls wherever they may lead us. In the end, all rivers lead us to love.`);

            insertSuitIntro("swords", `The journey of Swords begins with a clear vision. Precise. Sharp. Undeniable. The Ace slices through illusion with truth. Mental clarity forged like steel. The Two stands in stillness, blindfolded with a decision to make. The mind is split. To find peace a mental battle must be fought. By the Three the heart is pierced; sorrow, grief, betrayal. Pain that comes from facing the shadow self.

In the Four we retreat. Rest and healing are so needed on this inner journey. But the Five brings more inner conflict. We may be victorious, but at what cost? The Six glides over still waters of the mind. Change is the only constant and with this realisation we gain respite. Transition, movement, the quiet escape from past troubles. Yet the Seven shows us what still creeps in shadows. Doubts, secrets, strategy, and self-deception.

In The Eight of Swords we are trapped inside our mental prison. A maze of thoughts. A mind can so easily bind itself. The door was never locked, and yet still the Nine wakes in the night! Shackled by anxiety, dread, and the torment of rumination lead us to near breaking point. And the Ten? The final blow. A metaphorical death. Mental severance. The fall. We surrender...and when we do it is the end of mental suffering. Light leaks into the self inflicted wounds. A new dawn rises after the pain.

The court of Swords shows how we all breathe the life into our thoughts, and the qualities we need to waver the inner storms we face throughout life. The Page seeks knowledge, sharp-eyed and clever. The Knight charges fast and fearless. The Queen sees all; truthful, and perceptive of illusions and self-trickery. The King is a master of intellect; fair, logical, and just.

The Suit of Swords teaches that thoughts are powerful weapons. They can cut through lies and deceit or wound the ones we love. This is the suit of truth and conflict, of clarity and consequence. Use your mind carefully. Fight for what is right, and remember you hold the key to unlocking your own inner world. Don't let your thoughts cage you. Only the truth will set you free.`);

            insertSuitIntro("pentacles", `The journey of Pentacles begins with a seed. The Ace is so full of potential, it must be held in steady hands! It’s the promise of prosperity, of something real that can take root with a little care. The Two juggles; time, money, choices...learning balance is crucial in an ever-changing world. With resources, the Three begins to build, aquiring skills, collaborating. It shows the early rewards of hard work.

After we gain something, The Four fears to loose it; clutching tightly, afraid to trust. And the Five shows us what lack and loss really feels like; hardship, isolation, the bitter edges of reality. Still, the Six offers grace. With generosity, exchange, and gratitude we come to understand the quiet rhythm of giving and receiving. The Seven waits patiently, tending the garden, but unsure if the harvest will come.

The Eight leans on hope and trust. Practice and devotion. Mastery is earned here. The Nine stands in elegance; she is independant, comfortable, blooming in self-made abundance. And the Ten? It is the legacy. Wealth can be shared, family supported, a foundation that lasts through generations.

The court of Pentacles walks the earth with purpose. The Page is a student; curious, grounded, and eager to learn. The Knight moves steadily. He is dependable, focused, never rushed. The Queen nurtures what grows. She is a caretaker of home, health, nature and all things sacred. The King reigns with wisdom. He is a steward of resources, loyal and generous.

The Suit of Pentacles teaches that success is not only about money. Abundance needs roots, effort, and alignment with the physical world to grow. Security must be cultivated, it is not granted. The material world is a reflection of our inner state. What you create in the physical realm is a mirror of your soul. So what will you build?`);

            majorArcanaCards.innerHTML = generateCardSection(majorArcana, 'major');

            const suits = ['wands', 'cups', 'swords', 'pentacles'];
            suits.forEach(suit => {
                const suitCards = minorArcana.filter(card => card.name.toLowerCase().includes(suit));
                const suitContainer = document.getElementById(`${suit}Cards`);
                suitContainer.innerHTML = generateCardSection(suitCards, suit);
            });

            setTimeout(() => {
                enableTouchFlipBehavior();
            }, 500);
        })
        .catch(error => console.error("Error loading tarot data:", error));

    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach(button => {
        const icon = button.querySelector("i");
        const targetId = button.getAttribute("data-bs-target");
        const target = document.querySelector(targetId);

        if (target && icon) {
            target.addEventListener("show.bs.collapse", () => {
                icon.classList.remove("fa-chevron-down");
                icon.classList.add("fa-chevron-up");
            });
            target.addEventListener("hide.bs.collapse", () => {
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            });
        }
    });
});