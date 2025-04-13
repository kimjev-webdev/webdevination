// Function to generate the card section (cards in rows of 4)
function generateCardSection(cards, suit) {
    let cardHtml = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-6 g-4">';
    cards.forEach(card => {
        const imagePath = `assets/images/cardfronts/${card.name.toLowerCase().replace(/ /g, '')}.webp`;

        // Replace headers with emojis, bold tags, and convert \n to <br>
        const specificsHtml = card.specifics
            .replace(/LOVE:/g, "<strong>💜 LOVE:</strong>")
            .replace(/CAREER:/g, "<strong>✨ CAREER:</strong>")
            .replace(/FINANCE:/g, "<strong>💰 FINANCE:</strong>")
            .replace(/HEALTH:/g, "<strong>🌿 HEALTH:</strong>")
            .replace(/\n/g, "<br><br>");

        cardHtml += `
            <div class="col">
                <div class="flip-card" data-flipped="false">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${imagePath}" class="card-img-top" alt="${card.name}">
                        </div>
                        <div class="flip-card-back">
                            <p>${specificsHtml}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    cardHtml += '</div>';
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
            <p>We face <strong>Justice</strong>, who asks us for balance. We are forced to surrender with <strong>The Hanged Man</strong>, and we metaphorically die with <strong>Death</strong> — but oh, how sweet the death of the old self!? <strong>Temperance</strong> restores the light after our rebirth. Then comes the shadow: <strong>The Devil</strong> tempts us, but <strong>The Tower</strong> with weak foundations always falls.</p>
            <p>But <strong>The Star</strong> is born from collapse. It brings with it a glistening and introspective hope. <strong>The Moon</strong> reveals all illusion, and <strong>The Sun</strong> shines with divine clarity. <strong>Judgement</strong> calls us to rise from the ashes — and finally, in the macrocosm of <strong>The World</strong>, the soul is at one with all that is. The journey is finally complete… until a new cycle begins.</p>
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

            insertSuitIntro("wands", `The journey of Wands begins with a spark — a flame caught on the wind, a wild idea born in the soul. The Ace arrives like a match struck in the dark, igniting a vision. The Two stands at a crossroads, holding the globe of possibility, choosing direction. By the Three, momentum builds. The dream moves beyond the self — plans set sail on distant horizons.

But fire demands fuel. The Four celebrates progress, a pause for joy and foundation. Then comes the Five: the first clash, ambition met with competition. The Six rises above — recognition, victory, the crowd cheering. Yet with the Seven, one must defend what’s been earned. The Eight rushes in: movement, messages, unstoppable energy.

By the Nine, exhaustion lingers. The fire flickers but does not die. Strength holds on. And then the Ten — burdened by the weight of it all, the fire threatens to burn instead of warm. It is the culmination of passion, but also its cost.

The Wands court cards bring life to the flame. The Page is eager, curious, full of spark. The Knight charges forward — bold, impatient, ablaze with action. The Queen is radiant and magnetic, a master of inspiration. The King commands fire with wisdom, leading with vision, not ego.

The Suit of Wands teaches that passion is powerful, but must be guided. Creativity, ambition, desire — they are sacred flames. They can light the way forward, or consume you whole. The choice is yours: feed the fire, or become it.`);

            insertSuitIntro("cups", `The journey of Cups begins in stillness — a single chalice offered by the divine. The Ace is pure emotion, a new feeling, a heart ready to open. In the Two, love finds its mirror — connection, union, the sacred exchange between souls. The Three celebrates that love — friendship, joy, the magic of community.

But emotions are not always light. The Four turns inward, discontented even with blessings. The heart hesitates. Then the Five mourns — grief, disappointment, the ache of what’s been lost. Yet in the distance, two cups still stand.

The Six returns to the past — nostalgia, childhood, innocence remembered. By the Seven, the dream turns to illusion. Choices blur. What is real? What is fantasy? The Eight walks away. Sometimes the heart must leave what no longer serves it. The Nine is a wish — fulfillment, comfort, a full cup raised to the sky.

But the Ten is the true arrival — emotional harmony, family, wholeness. The journey has bloomed into love that lasts.

The court of Cups brings life to the heart. The Page is sensitive, dreamy, beginning to explore intuition. The Knight rides with romance and charm, but sometimes chases illusions. The Queen feels deeply — a nurturer, intuitive and wise. The King is emotionally masterful — calm in storms, compassionate, balanced.

The Suit of Cups teaches us that emotions are sacred. Love is a path, not just a feeling. It asks us to feel fully, to forgive freely, and to follow the currents of the soul — wherever they may lead.`);

            insertSuitIntro("swords", `The journey of Swords begins with a thought — clear, sharp, and undeniable. The Ace slices through illusion with truth, a new idea forged like steel. The Two stands in stillness, blindfolded between choices — the mind split, peace held in tension. By the Three, the heart is pierced — sorrow, betrayal, the pain that comes from clarity.

The Four retreats — rest, healing, a sacred pause for the mind. But the Five brings conflict. Victory, perhaps, but at what cost? The Six glides over still waters — transition, movement, the quiet escape from past troubles. The Seven creeps in shadows — secrets, strategy, and self-deception.

The Eight feels trapped — a maze of thoughts, a mind that binds itself. But the chains are loose, and the exit is near. The Nine wakes in the night — anxiety, dread, the torment of overthinking. And the Ten? The fall. The surrender. The final blow — but also, the end of mental suffering. A new dawn rises beyond the pain.

The court of Swords breathes life into thought. The Page seeks knowledge, sharp-eyed and clever. The Knight charges fast and fearless, sometimes too fast. The Queen sees all — piercing, truthful, wise beyond illusion. The King is a master of intellect — fair, logical, and just.

The Suit of Swords teaches that thoughts are powerful weapons. They can cut through lies or wound the ones we love. This is the suit of truth and conflict, of clarity and consequence. Use your mind — but never lose your heart.`);

            insertSuitIntro("pentacles", `The journey of Pentacles begins with a seed — the Ace, full of potential, held in steady hands. It’s the promise of prosperity, of something real taking root. The Two juggles — time, money, choices — learning balance in a changing world. The Three begins to build — skill, collaboration, the early rewards of hard work.

The Four clutches tightly — afraid to lose, afraid to trust. But the Five shows what lack feels like — hardship, isolation, the cold edge of reality. Still, the Six offers grace — generosity, exchange, the quiet rhythm of giving and receiving. The Seven waits patiently, tending the garden, unsure if the harvest will come.

The Eight leans in — practice, craft, devotion. Mastery is earned here. The Nine stands in elegance — independence, comfort, the bloom of self-made abundance. And the Ten? Legacy. Wealth shared, family supported, a foundation that lasts through generations.

The court of Pentacles walks the earth with purpose. The Page is a student — curious, grounded, eager to learn. The Knight moves steadily — dependable, focused, never rushed. The Queen nurtures what grows — a caretaker of home, health, and all things sacred. The King reigns with wisdom — a steward of resources, loyal and generous.

The Suit of Pentacles teaches that success is not only about money — it’s about roots, effort, and alignment with the physical world. Security is grown, not granted. Tend what you value. Build with care. True abundance takes time, but it lasts.`);

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

    // Add chevron flip logic to accordion buttons
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