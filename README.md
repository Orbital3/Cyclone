# Plan de projet final pour le cours Espace Interactif #
Tiré d'un projet Arduino du [Youtuber Viral Science](https://www.viralsciencecreativity.com/post/arduino-cyclone-arcade-led-chaser-game)
### Titre du projet ###
Cyclone

### Membres de l'équipe ###
* Philippe Trudel
* Raphaël Fillion
* Shylove Charles-Vilson

### Nom de l'équipe ###
Orbital

### Outils ###
Nous allons utilisez Max, Arduino et les Technologies Web (HTML, JavaScript et SASS), 
le projet va être basé sur un échaffaudage de Vite.js.

### Concept de projet ###
Le projet se veut un jeu intéractif ou une lumière LED jaune circule en orbite et lorsqu'elle passe par-dessus les trois marqueurs de points vert et que l'intéracteur presse le bouton au même moment, il gagne un point. Si l'intéracteur presse le bouton trop tôt ou trop tard, il perd.

Chaque tour, la vitesse augmente et le nombre de LED à toucher diminue, donc la difficulté est exponentielle. 

Les points seront affichés en temps réel sur une page web, donc le Javascript sera actualisé avec Max.

### Décrivez le concept de votre projet à partir du point de vue de l'intéracteur ###
L'intéracteur sera invité à participer à un jeu d'adresse. Sera t'il capable de presser le bouton au même moment que la lumière passe par dessus l'objectif? Il faut vaincre la vitesse et la précision. À 5 points, nous gagnons.

### Indiquer dans ce tableau toutes les entrées (capteurs) ###
| Capteur 	| Action 	| Donnée 	|
|---	|---	|--- |
| Bouton	| Pressé 	| Down	|

### Indiquer dans ce tableau toutes les sorties (actionneurs) ###
| Condition 	| Donnée 	| Actionneur 	|
|---	|---	|---	|
| Pause du jeu	| pauseGame	| Quand tu presse le bouton, ça arrête le LED	|

### Dessiner un schéma de l'électronique de votre projet ###
<kbd>![Moment 01](/_production/medias/moment_01.png)</kbd>

### Calendrier ###
| Échéance 	| Qui ? 	| Fait quoi 	| Avec quel outil ? |
|---	|---	|---	|---	|
| 25 novembre 	| Phil 	| Créer la page HTML avec le scoreboard et le début du Js	| HTML, SASS et Js	|
|  	| Raph 	| Programmer Arduino	| Arduino	|
|  	| Shylove	| Soudure 	| Classe soudure 	|
| 2 décembre 	| Phil 	| Finir la programmation web et tester	|  HTML, SASS et Js	|
|  	| Raph 	| Valider et test	| Arduino et Max 	|
|  	| Shylove	| Avoir fini le bricolage	|  	|
| 9 décembre 	| Phil 	| Présentation en classe 	|  	|
|  	| Raph 	| Présentation en classe 	|  	|
|  	| Shylove	| Présentation en classe	|  	|
