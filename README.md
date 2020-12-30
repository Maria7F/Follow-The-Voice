# Follow The Voice

<br>


### Description

its a game that contains a group of people sitting next to each other and in front of them a person who throws phrases and distracts them with his actions while they follow the phrases and not actions.

<br>

---

###  Technologies used
- HTML
- CSS
- Javascript
- jquery
- Terminal
- git
- github

<br>

---

### Wireframes
![](../images/wireframe-index.png){:height="50%" width="50%"}
<br>
![](../images/wireframe-howToPlay.png){:height="50%" width="50%"}
<br>
![](../images/wireframe-game.png){:height="50%" width="50%"}
<br>
![](../images/wireframe-players.png){:height="50%" width="50%"}
<br>

---

### Document
First i have finishe the layout using the wireframe, after that i started coding in the html and css files, then connected the pages to each other, finally i started to work in the javascript file also, while i'm working on js i gave every button an id.

<br>

---

### unsolved problems
- get the player names and make an alert box to check the loser

<br>

---

### User stories
- as a user, i want a guidenes of the game so i can know how the game is played
- as a user, i want to add as many players as i want so i can play with a big group of people.
- as a user, i want a user friendly interface so i can navigate between pages easily.
- as a user, i want to pause the game so if one of the members of the group got busy.
- as a user, i want to be able to delete all players and play a free game with no losers.

<br>

---

### Favorite function
```javascript
var input_player_name = $("player-name");
    $("#add").click(function(e) {
        e.preventDefault();
        $("#player-name-form").append('<p id="players">Player name: <input id="player-name"></p>')
    });
    $("#delete").on("click", function() {
        $("#players").remove();
    });
```

<br>

---

### Game link
[link to my game!](https://pages.git.generalassemb.ly/mariafelemban/project-1-game/)
