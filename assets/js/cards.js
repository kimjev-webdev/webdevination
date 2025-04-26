/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

// this script builds the dynamic tarot gallery with suit intros, major arcana intro, card flipping behavior, and accessibility improvements

// function to generate the card section html for a group of cards
function generateCardSection(cards, suit) {
    let cardHtml = `<section class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-6 g-4" role="region" aria-label="${suit.charAt(0).toUpperCase() + suit.slice(1)} cards">`;

    cards.forEach(card => {
        const imagePath = `assets/images/cardfronts/${card.name.toLowerCase().replace(/ /g, '')}.webp`;

        const specificsHtml = card.specifics
            .replace(/LOVE:/g, "<strong>💜 love:</strong>")
            .replace(/CAREER:/g, "<strong>✨ career:</strong>")
            .replace(/FINANCE:/g, "<strong>💰 finance:</strong>")
            .replace(/HEALTH:/g, "<strong>🌿 health:</strong>")
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

// function to insert the intro paragraph before the major arcana cards
function insertMajorArcanaIntro() {
    const introHtml = `
        <div id="majorArcanaIntro" class="intro-paragraph mb-4">
            <p>the major arcana is the sacred spine of the tarot...</p>
            <p>each card encountered is a lesson, a challenge, a transformation...</p>
            <p>the journey is finally complete… until a new cycle begins.</p>
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

// function to insert suit intro paragraph before the cards
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

// function to enable card flipping on touch devices
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

// main logic to build the page after content loads
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

            // insert intros and build major arcana
            insertMajorArcanaIntro();
            majorArcanaCards.innerHTML = generateCardSection(majorArcana, 'major');

            // insert minor arcana suits
            const suits = ['wands', 'cups', 'swords', 'pentacles'];
            suits.forEach(suit => {
                const suitCards = minorArcana.filter(card => card.name.toLowerCase().includes(suit));
                const suitContainer = document.getElementById(`${suit}Cards`);
                suitContainer.innerHTML = generateCardSection(suitCards, suit);
            });

            // insert suit intro stories
            insertSuitIntro("wands", `the journey of wands begins with a spark...`);
            insertSuitIntro("cups", `the journey of cups begins in the cosmic stillness...`);
            insertSuitIntro("swords", `the journey of swords begins with a clear vision...`);
            insertSuitIntro("pentacles", `the journey of pentacles begins with a seed...`);

            // enable card flipping after rendering
            setTimeout(() => {
                enableTouchFlipBehavior();
            }, 500);
        })
        .catch(error => console.error("error loading tarot data:", error));

    // set up accordion icon animations
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
