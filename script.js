var activePlayer;
var scores;
var roundScore;
var isNewGame;
var diceNumber;
var  diceNumber2;

var diceDom = document.querySelector(".dice");

initGame();

function initGame(){
activePlayer = 0;
isNewGame = true;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.getElementById("name-0").textContent = "Usnii uher";
document.getElementById("name-1").textContent = "Nyalh Tugal";

document.querySelector(".player-0-panel" ).classList.remove("winner");
document.querySelector(".player-1-panel" ).classList.remove("winner");

document.querySelector(".player-0-panel" ).classList.remove("active");
document.querySelector(".player-1-panel" ).classList.remove("active");

document.querySelector(".player-0-panel" ).classList.add("active");

diceDom.style.display = "none";
  }

// Шоог шидэх эвент листенер
// function shidelt(){

// }
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна
  if (isNewGame) {diceNumber = Math.floor(Math.random() * 6) + 1;

    // var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
        switchToNextPlayer();
    }
  }
  else{
    alert("GAME IS OVER, PLEASE START NEW GAME")
  }
}); 
document.querySelector(".btn-hold").addEventListener("click", function(){
if(isNewGame){
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >=100){
        isNewGame = false;
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    }
    else{
        switchToNextPlayer();
    }
}
else{
    alert("GAME IS OVER, PLEASE START NEW GAME")
}
    
})

function switchToNextPlayer(){
roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        // Хэрэв идэвхтэй  тоглогч нь  0 байвал идэвхтэй тоглогчийг 1 болго.
        // Үгүй бол идэвхтэй тоглогчийг 0 болго.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        // obj.address.country;

        // Улаан цэгийг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // Шоог түр алга болгоно.
        diceDom.style.display = "none";
    }
document.querySelector(".btn-new").addEventListener("click", initGame);
// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.

    