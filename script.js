// ==========================================
// Story Generator - JavaScript Script
// ==========================================

// DOM Elements
const prenomInput = document.getElementById('prenom');
const adjectifInput = document.getElementById('adjectif');
const lieuInput = document.getElementById('lieu');
const activiteInput = document.getElementById('activite');
const styleSelect = document.getElementById('style');
const btnGenerer = document.getElementById('btn-generer');
const btnEffacer = document.getElementById('btn-effacer');
const histoireDiv = document.getElementById('histoire');

// Story templates based on selected style
const templates = {
    drole: [
        "One fine day, {prenom} the {adjectif} decided to go {lieu}. Everything was going well until they tried to {activite}. Passersby couldn't believe their eyes! It was so ridiculous that everyone burst out laughing. {prenom} laughed heartily and became the funniest legend in town.",
        "{prenom} was known for being {adjectif}. While going {lieu}, they had the crazy idea to {activite}. The result? A hilarious spectacle that made all the spectators laugh to tears. Since that day, {prenom} is nicknamed 'the king/queen of comedy'.",
        "Once upon a time there was {prenom}, a {adjectif} person who loved wacky adventures. While heading {lieu}, they attempted to {activite}. It was such a funny disaster that even the birds stopped singing to laugh!"
    ],
    heroique: [
        "In ancient times, {prenom} the {adjectif} journeyed {lieu} to fulfill a sacred quest. Their challenge: to {activite}. Despite the obstacles, our hero showed extraordinary courage and triumphed against all odds. Their name was forever etched in the annals of history.",
        "{prenom}, a {adjectif} warrior, set out {lieu} with unwavering determination. The mission was perilous: to {activite}. After an epic battle, victory was theirs and peace returned to the kingdom.",
        "They still tell the tale of {prenom}, that {adjectif} adventurer who dared to venture {lieu}. Their objective: to {activite}. Facing danger, they displayed legendary bravery and became an example for all."
    ],
    mysterieuse: [
        "On a moonless night, {prenom} the {adjectif} found themselves {lieu}. A mystery hung in the air. What would happen if they decided to {activite}? The shadows seemed to whisper ancient secrets. The truth remained hidden in the darkness...",
        "No one ever knew why {prenom}, so {adjectif}, chose to go {lieu} that day. While attempting to {activite}, they discovered something inexplicable. Since then, questions remain unanswered...",
        "The strange story of {prenom} began {lieu}. This {adjectif} individual had a habit of {activite}, but this time, something was different. The mists of mystery enveloped everything, and no one ever knew what really happened..."
    ]
};

// Function to generate a random story
function genererHistoire() {
    // Get values
    const prenom = prenomInput.value.trim() || 'A stranger';
    const adjectif = adjectifInput.value.trim() || 'mysterious';
    const lieu = lieuInput.value.trim() || 'in a faraway place';
    const activite = activiteInput.value.trim() || 'do something unexpected';
    const style = styleSelect.value;

    // Select a random template based on style
    const templatesStyle = templates[style];
    const template = templatesStyle[Math.floor(Math.random() * templatesStyle.length)];

    // Replace placeholders
    let histoire = template
        .replace(/{prenom}/g, prenom)
        .replace(/{adjectif}/g, adjectif)
        .replace(/{lieu}/g, lieu)
        .replace(/{activite}/g, activite);

    // Display the story
    histoireDiv.textContent = histoire;
    histoireDiv.classList.remove('empty');

    // Fade-in animation
    histoireDiv.style.animation = 'none';
    histoireDiv.offsetHeight; // Trigger a reflow
    histoireDiv.style.animation = 'fadeIn 0.5s ease-out';
}

// Function to clear the form and story
function effacerTout() {
    prenomInput.value = '';
    adjectifInput.value = '';
    lieuInput.value = '';
    activiteInput.value = '';
    styleSelect.value = 'drole';
    histoireDiv.textContent = 'No story yet... Start by filling out the form above.';
    histoireDiv.classList.add('empty');
}

// Add event listeners
btnGenerer.addEventListener('click', genererHistoire);
btnEffacer.addEventListener('click', effacerTout);

// Allow generation with Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        genererHistoire();
    }
});

// Add CSS animation for story appearance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Console confirmation message
console.log('✨ Story Generator loaded successfully!');
