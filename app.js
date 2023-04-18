// Toglogchiin eeljiig hadgalah huwisagch, 1-r toglogchiiig 0, harin 2-r toglogchiiig 1 gej temdegley
 var activePlayer = 0;

//Toglogchdiin tsugluulsan onoog hadgalah huwisagch

var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch

var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huwisagch, 1-6 gesen toog ene huwisagchind sanamsarguigeer ugnu
 var dice = Math.floor(Math.random() * 6) +1;

//  document.querySelector("#score-0").textContent = dice;
//  document.querySelector("#score-1").innerHTML = "<em>Hey</em>";

// Togloom ehlehed beldej onoog 0 bolgoh
document.querySelector("#score-0").textContent = "0";
document.querySelector("#score-1").textContent = "0";

document.querySelector("#current-0").textContent = "0";
document.querySelector("#current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
 console.log("Dice:"  + dice);