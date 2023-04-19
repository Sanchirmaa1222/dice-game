// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;

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
}); 
document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >=20){
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    }
    else{
        switchToNextPlayer();
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
document.querySelector(".btn-new").function () ;{
    var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
  };
    