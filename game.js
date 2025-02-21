const storyText = document.getElementById("storyText");
const choicesContainer = document.getElementById("choices");
const gameContainer = document.body;

const story = {
    start: {
        text: "Du befinner dig i en mörk skog. Vad gör du?",
        choices: [
      { text: "Gå framåt", next: "river" },
      { text: "Stanna kvar", next: "bear" }
    ]
    }
};


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
