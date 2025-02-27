const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices");
const gameContainer = document.body;
let currentAudio = null;

const story = {
    start: {
        text: "Du befinner dig i en mörk skog. Vad gör du?",
        background: "assets/images/dark_backgruond.forest.jpg",
        sound: "assets/sounds/dark_forest.mp3",
        choices: [
      { text: "Gå framåt", next: "river" },
      { text: "Stanna kvar", next: "bear" }
    ]
    },
river: {
  text: "Du hör ljudet av en flod framför dig. Vad gör du?",
  background: "assets/images/river.jpg",
  sound: "assets/sounds/river.mp3",
  choices: [
    { text: "Följ floden", next: "cabin" },
    { text: "Försök simma över", next: "drown" }
  ]
},
bear: {
  text: "En björn dyker upp framför dig! Vad gör du?",
  background: "assets/images/bear.jpg",
  sound: "assets/sounds/bear.mp3",
  choices: [
    { text: "Springa", next: "lost" },
    { text: "Klättra upp i ett träd", next: "safe" }
  ]
},
cabin: {
  text: "Du hittar en stuga. Det ser ut att finnas ljus där inne. Vad gör du?",
background: "assets/images/cabin.jpg",
sound: "assets/sounds/wide.mp3",
choices: [
  { text: "Gå in", next: "safe" },
  { text: "Gå vidare", next: "lost" }
]
},
drown: {
  text: "Du druknade...",
  background: "assets/images/drown.jpg",
  sound: "assets/sounds/drown.mp3",
  choices: [{ text: "Börja om", next: "start" }]
},
lost: {
  text: "Du går vilse och hittar aldrig ut ur skogen...",
  background: "assets/images/the_lost_scene.webp",
  sound: "assets/sounds/wide.mp3",
  choices: [{ text: "Börja om", next: "start" }]
},
safe: {
  text: "Du hittar en säker plats och räddas nästa dag. Grattis, du överlevde!",
  background: "assets/images/safe_place.jpg",
  sound: "assets/sounds/success.mp3",
  choices: [{ text: "Spela igen", next: "start" }]
}

};


function makeChoice(choiceIndex) {
  if (!story[window.currentStory]) return;

  const currentScene = story[window.currentStory];
  if (choiceIndex < 0 || choiceIndex >= currentScene.choices.length) return;

  const nextScene = currentScene.choices[choiceIndex].next;
  updateStory(nextScene);
}


function updateStory(scene) {
  window.currentStory = scene;
  const currentScene = story[scene];

  
document.body.style.backgroundImage = `url('${currentScene.background}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

  // Update text
  storyText.textContent = currentScene.text; 

  
choicesContainer.innerHTML = "";
currentScene.choices.forEach((choice, index) => {
  const button = document.createElement("button");
  button.textContent = choice.text;
    button.classList.add("choice-btn");
    button.onclick = () => makeChoice(index);
    choicesContainer.appendChild(button);
});


if (currentScene.sound) {
  if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(currentScene.sound);
  currentAudio.play();
}

}

window.currentStory = "start";
updateStory(window.currentStory);