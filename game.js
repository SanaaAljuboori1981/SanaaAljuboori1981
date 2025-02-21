const storyText = document.getElementById("storyText");
const choicesContainer = document.getElementById("choices");
const gameContainer = document.body;

const story = {
    start: {
        text: "Du befinner dig i en mörk skog. Vad gör du?",
        background: "assets/images/dark backrund image.jpg",
        sound: "assets/sounds/forest.mp3",
        choices: [
      { text: "Gå framåt", next: "river" },
      { text: "Stanna kvar", next: "bear" }
    ]
    },
river: {
  text: "Du hör ljudet av en flod framför dig. Vad gör du?",
  background: "assets/images/Jinzu_River.jpg",
  sound: "assets/images/river.mp3",
  choices: [
    { text: "Följ floden", next: "cabin" },
    { text: "Försök simma över", next: "drown" }
  ]
},
bear:{
  text: "Du hör ljudet av en flod framför dig. Vad gör du?",
  background: "assets/images/bear.jpg",
  sounds: "assets/sounds/bear.mp3",
  choices: [
    { text: "Springa", next: "lost" },
    { text: "Klättra upp i ett träd", next: "safe" }
  ]
},
cabin: {
  text: "Du hittar en stuga. Det ser ut att finnas ljus där inne. Vad gör du?",
background: "assets/images/cabin.jpg",
sounds: "assets/sounds/wide.mp3",
choices: [
  { text: "Gå in", next: "safe" },
  { text: "Gå vidare", next: "lost" }
]
},
drowing: {
  background: "assets/images/drowing.jpg",
  sounds: "assets/sounds/drowing.mp3",
  choices: [{ text: "Börja om", next: "start" }]
}



function makeChoice(choiceIndex) {
  const currentScene = story[window.currentStory];

  
  if (choiceIndex < 0 || choiceIndex >= currentScene.choices.length) return;

  const nextScene = currentScene.choices[choiceIndex].next;
  updateStory(nextScene);
}

choicesContainer.innerHTML = "";
currentScene.choices.forEach((choice, index) => {
    const button = document.creatElement("button);
    button.textcontent = choice.text;
    button.classList.add("choice-btn");
    button.onclick = () => makeChoice(index);
    choicesContainer.appendChild(button);
});
