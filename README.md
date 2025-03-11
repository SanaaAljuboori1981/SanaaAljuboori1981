
# 🏕️ The Lost Explorer

**The Lost Explorer**  is an interactive text-based adventure simple game where players navigate through choices to survive in a mysterious forest. The game features a **dynamic story**, background changes, and immersive sound effects, the game delivers a thrilling exploration experience.


---

## 🎮 Game Overview

- **Genre:** Adventure, Text-Based Game  
- **Objective:** Explore a mysterious forest, make the right decisions, and try to survive.  
- **Gameplay:** Choose your path by clicking buttons — your fate depends on your decisions.


---

## 🌟 Features
- 🎭 **Multiple Story Paths** – Every choice affects the outcome.
- 🎨 **Dynamic Backgrounds** – Changes based on the scene.
- 🎵 **Immersive Sound Effects** – Enhances gameplay experience.
- 🎮 **Easy-to-Use UI** – Simple button-based controls.
- 📱 **Responsive Design** – Works on mobile and desktop.

---


## 📂 Project Structure
 The Lost Explorer 
 -  📄 index.html # Main HTML file 
 -  📄 style.css # Game styling 
 -  📄 game.js # Game logic and story paths 
 -  📂 assets/ # Contains images and sounds 
 -  images/ # Scene backgrounds 
 -  sounds/ # Game audio 
 -  📄 README.md # Project documentation

 ---

## 👣 How to Play

1. Open `index.html` in your browser.
2. Read the scene description.
3. Click a button to make a choice.
4. Discover where your decisions take you!

---


## 🎮 Game Flow — 7 Rooms Adventure
Start (index.html)

G Room | Scene Title        | Description                       Outcomes     |
|------|--------------------|------------------------------------------------------------------
| 1    | Dark Forest 🌲     | You're in a dark forest.         | → River 🌊 or Bear 🐻     
| 2    | River 🌊           | You hear water ahead.            | → Cabin 🏡 or Drown 💀    
| 3    | Bear Encounter 🐻  | A bear appears!                  | → Lost 🌲 or Safe 🏆     
| 4    | Cabin 🏡           | You find a mysterious cabin.     | → Safe 🏆 or Lost 🌲     
| 5    | Drown              | You tried to swim across and drowned.| → Restart               
| 6    | Lost 🌲            | You got lost in the forest.        | → Restart               
| 7    | Safe 🏆            | You survived and were rescued the next day. | → Play again      
    

---

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


Projektlänkar:
- 🔗 GitHub Repository (kod och filer):
https://github.com/SanaaAljuboori1981/SanaaAljuboori1981

- 🌐 GitHub Pages (spel-demo):
https://sanaaaljuboori1981.github.io/SanaaAljuboori1981/