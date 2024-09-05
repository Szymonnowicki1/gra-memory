var cards = ["Brendfort.jpg", "Chelsea.jpg", "Liverpool.jpg", "ManchesterCity.jpg", "ManchesterUnited.jpg", "Arsenal.jpg", "Bournemouth.jpg", "Westham.jpg", "Westham.jpg", "Arsenal.jpg", 
    "ManchesterUnited.jpg", "Liverpool.jpg", "ManchesterCity.jpg", "Brendfort.jpg", "Chelsea.jpg", "Bournemouth.jpg",];


var c0 = document.getElementById('c0');
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

var c12 = document.getElementById("c12");
var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");

c0.addEventListener("click", function() {revealCard(0);});
c1.addEventListener("click", function() {revealCard(1);});
c2.addEventListener("click", function() {revealCard(2);});
c3.addEventListener("click", function() {revealCard(3);});

c4.addEventListener("click", function() {revealCard(4);});
c5.addEventListener("click", function() {revealCard(5);});
c6.addEventListener("click", function() {revealCard(6);});
c7.addEventListener("click", function() {revealCard(7);});

c8.addEventListener("click", function() {revealCard(8);});
c9.addEventListener("click", function() {revealCard(9);});
c10.addEventListener("click", function() {revealCard(10);});
c11.addEventListener("click", function() {revealCard(11);});

c12.addEventListener("click", function() {revealCard(12);});
c13.addEventListener("click", function() {revealCard(13);});
c14.addEventListener("click", function() {revealCard(14);});
c15.addEventListener("click", function() {revealCard(15);});

var oneVisible =false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 8;

function revealCard(nr) { 

    var opacityValue = $("#c"+nr).css("opacity");

    if(opacityValue != "0" && lock == false){

        lock = true

        var obraz = "url(" + cards[nr] + ")";

        $("#c" + nr).css("background-image", obraz);
        $("#c" + nr).addClass("cardA");
        $("#c" + nr).removeClass("card");

        if(oneVisible == false) {

            oneVisible = true;
            visible_nr = nr;
            lock = false
        }
        else{

            if(cards[visible_nr] == cards[nr]){

                setTimeout(function(){
                    hide(nr, visible_nr);
                }, 550);
            }
            else{

                setTimeout(function(){
                    restore2Cards(nr, visible_nr);
                }, 550);
            }

            turnCounter++;
            $(".score").html("Twoj licznik rund:" + turnCounter);
            oneVisible = false;
            
        }
    }

    
}

function hide(nr1,nr2){
    $("#c" +nr1).css("opacity", "0")
    $("#c" +nr2).css("opacity", "0")
    lock = false;

    pairsLeft--;

    if(pairsLeft == 0){
        $('.board').html("<h1>WP YOU WIN !</h1>")
    }
 
}

function restore2Cards(nr1,nr2){
    $("#c" + nr1).css("background-image", 'url(premier_league.jpg)');
    $("#c" + nr1).addClass("card");
    $("#c" + nr1).removeClass("cardA");
    
    $("#c" + nr2).css("background-image", 'url(premier_league.jpg)');
    $("#c" + nr2).addClass("card");
    $("#c" + nr2).removeClass("cardA");
    lock = false;
}