// Toglogchiin eeljiig hadgalah huwisagch, 1-r toglogchiiig 0, harin 2-r toglogchiiig 1 gej temdegley
 var activePlayer = 0;

//Toglogchdiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch

var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huwisagch, 1-6 gesen toog ene huwisagchind sanamsarguigeer ugnu

// Togloom ehlehed beldej onoog 0 bolgoh
document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener("click", function() {
    var diceNumber = Math.floor(Math.random() * 6) +1;
    diceDom.style.display = "block";
    diceDom.src ="dice-" + diceNumber + ".png";
});

