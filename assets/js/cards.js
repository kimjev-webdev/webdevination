// Function to generate the card section (cards in rows of 4)
function generateCardSection(cards, suit) {
    let cardHtml = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">';
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
                <div class="flip-card">
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
            <p>We begin as The Fool; innocence unbound. With a knapsack of dreams and a heart full of wonder, we step off the cliff and begin the journey through the Major Arcana.</p>
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

            insertSuitIntro("wands", `The journey of Wands begins with a spark ...`);
            insertSuitIntro("cups", `The journey of Cups begins in stillness ...`);
            insertSuitIntro("swords", `The journey of Swords begins with a thought ...`);
            insertSuitIntro("pentacles", `The journey of Pentacles begins with a seed ...`);

            majorArcanaCards.innerHTML = generateCardSection(majorArcana, 'major');

            const suits = ['wands', 'cups', 'swords', 'pentacles'];

            suits.forEach(suit => {
                const suitCards = minorArcana.filter(card => card.name.toLowerCase().includes(suit));
                const suitContainer = document.getElementById(`${suit}Cards`);
                suitContainer.innerHTML = generateCardSection(suitCards, suit);
            });
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
