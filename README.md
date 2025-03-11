
📜 Game Description# 🏕️ The Lost Explorer

Title: **The Lost Explorer**  is an interactive text-based adventure simple game where players navigate through choices to survive in a mysterious forest. The game features a **dynamic story**, background changes, and immersive sound effects.

Genre: Adventure, text-based game

Objective: The player must explore a mysterious forest, avoid dangers, and find a treasure.


## 🌟 Features
- 🎭 **Multiple Story Paths** – Every choice affects the outcome.
- 🎨 **Dynamic Backgrounds** – Changes based on the scene.
- 🎵 **Immersive Sound Effects** – Enhances gameplay experience.
- 🎮 **Easy-to-Use UI** – Simple button-based controls.
- 📱 **Responsive Design** – Works on mobile and desktop.

## 📂 Project Structure
 The Lost Explorer 
 -  📄 index.html # Main HTML file 
 -  📄 style.css # Game styling 
 -  📄 game.js # Game logic and story paths 
 -  📂 assets/ # Contains images and sounds 
 -  images/ # Scene backgrounds 
 -  sounds/ # Game audio 
 -  📄 README.md # Project documentation

 👤 How to Play

1- Open index.html in a web browser.

2- Read the story and choose an action by clicking the buttons.

3- Explore different paths and try to survive!



🎮 Game Flow
Start (index.html)

Game Description
7 unique rooms
3 possible endings:
Safe – Victory 🏆
Drown – Game Over 💀
Lost – Game Over 🌲
Branching choices leading to different paths
Interactive elements including background images & sound
This structure provides a well-balanced, engaging adventure with multiple paths and replayability

1. Room 1 Start – Dark Forest 🌲
The player sees an introduction.
Text: "Du befinner dig i en mörk skog. Vad gör du?"
Background: dark_background.forest.jpg 
Sound: dark_forest.mp3 - Background music begins to play
The player chooses:
Gå framåt → Leads to River 🌊
Stanna kvar → Leads to Bear 🐻

2. Room 2 - River 🌊
Text: "Du hör ljudet av en flod framför dig. Vad gör du?"
Background: river.jpg
Sound: river.mp3
Choices:
Följ floden → Leads to Cabin 🏡
Försök simma över → Leads to Drown 💀


3. Room 3- Bear Encounter 🐻
Text: "En björn dyker upp framför dig! Vad gör du?"
Background: bear.jpg
Sound: bear.mp3
The player can:
Springa → Leads to Lost 🌲
Klättra upp i ett träd → Leads to Safe 🏆

4. Room 4- Cabin 
Text: "Du hittar en stuga. Det ser ut att finnas ljus där inne. Vad gör du?"
Background: cabin.jpg
Sound: wide.mp3
The player can:
Gå in → Leads to Safe 🏆
Gå vidare → Leads to Lost 🌲

5. Room 5- Drown – Game Over 💀
Text: "Du druknade..."
Background: drown.jpg
Sound: drown.mp3
The player can : 
Börja om → Leads to Start 🌲

6. Room 6- Lost – Game Over 🌲
Text: "Du går vilse och hittar aldrig ut ur skogen..."
Background: the_lost_scene.webp
Sound: wide.mp3
The player can :
Börja om → Leads to Start 🌲

7. Room 7- Safe – Victory! 🏆
Text: "Du hittar en säker plats och räddas nästa dag. Grattis, du överlevde!"
Background: safe_place.jpg
Sound: success.mp3
The player can :
Spela igen → Leads to Start 🌲
