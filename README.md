# Memory Game Project

A simple Memory Game Project for Front-end development.The Memory Game Project is about mastering the JavaScript.

## This is a browser based card matching game.This project also includes CSS in the display of the webpage.

## Table of Contents

-   [Download](#download)
-   [Instructions](#instructions)
-   [Steps followed](#steps-followed)
-   [How to play](#how-to-play)
-   [Game functionality](#game-functionality)
-   [Benefits of Memory Game](#benefits-of-memory-game)
-   [Contributing](#contributing)

## Download

The project can be downloaded from :

1.  Memory Game project repository on GitHUB : <https://github.com/udacity/fend-project-memory-game>

2.  The Zipped File : <https://github.com/udacity/fend-project-memory-game/archive/master.zip>

## Instructions

\-> The starter project has some HTML and CSS styling to display a static version of the Memory Game project.

\-> We need to convert this project from a static project to an interactive one.

\-> This will require modifying the HTML and CSS files, but primarily the JavaScript file.

\-> To get started,we need to open `js/app.js` and start building the app's functionality

* * *

## Steps followed

-   Download the zip file of the project from the specified link in the Instructions document
-   Extract the files from the zip file
-   Open the html,css and js files in an editor
-   The static view of the game in the web browser should be in an interactive way
-   On the first click on the card in the game,the timer should start and should be displayed
-   Later on,for every selection of two cards,we should check for the chance of same cards
-   If two cards selected are same,they need to remain on the screen or else they should hide
-   Meanwhile,we need to count the number of comparisions we did
-   If comparisions exceed the specified number,the star rating of the game should decrease
-   After matching all the pairs successfully,print the popup message for congratulating the player
-   On the popup message,we should specify star rating,time to complete,moves

* * *

## How to play

-   The initial view of the game is in grid format with empty cells that have hidden cards
-   Player attempt to match cards by selecting two cards
-   The deck has 8 pairs of matching cards
-   At each selection:
       \->If it is the first selection out of the two,flip the card
       \->If it is second one,checks whether it is a matching pair or not
       \->If it is a matching pair,they  remain visible
       \->If not,they remain hidden for future selections
       \->At the end of all successful matchings,player will be congratulated for successful completion of game

    * * *

## Game functionality

The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that we need to handle:
● Flipping cards on selection by player
● If the flipped cards matches,they remain visible
● If cards do not match they again remain invisible
● The game finishes when all the 8 pairs of the cards are successfully matched
● When the game finishes,a congratulating popup message will come on to the screen displaying star rating,time and moves

* * *

## Benefits of memory game

\-- Helps the developer to use html,css,js combinely for better functionality of game
\-- Helps the player to boost the brain
\-- Helps player in building better concentration levels
\-- Trains visual memory
\-- Improves ability to find similarities and dissimilarities in objects

* * *

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
