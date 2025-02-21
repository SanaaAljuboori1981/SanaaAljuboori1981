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
