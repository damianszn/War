//////////////////////////Prep//////////////////////////////
//Making of all the cards and splitting them into decks
var allCards = [1,2,3,4,5,6,7,8,9,10];
allCards.sort(function(){
    return 0.5 - Math.random()
});

var leftDeck = allCards.splice(0, Math.floor(allCards.length / 2));
var rightDeck = allCards;


div = document.getElementById('left');
//div.innerHTML = leftDeck;
div2 = document.getElementById('right');
//div2.innerHTML = rightDeck;

/////////////////////////////Play///////////////////////////////////
//Rounds, score & stuff
var round = 0;
roundDisplayer = document.getElementById('round');
roundDisplayer.innerHTML = "Round number :"+round;
leftScore = 0;leftScoreDisplayer = document.getElementById('leftScoreDisplayer');
rightScore = 0;rightScoreDisplayer = document.getElementById('rightScoreDisplayer');
leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
announcer = document.getElementById('announcer');

var nextRound = function() {
    announcer.innerHTML="";
    round += 1;
    roundDisplayer.innerHTML = "Round number :"+round;
    div2.innerHTML ="";
    div.innerHTML = "Drawing cards...";
    setTimeout(function(){ 
        div.innerHTML = leftDeck[(round-1)];
        div2.innerHTML = rightDeck[(round-1)];
    }, 1000); 
    setTimeout(function(){  
        if(leftDeck[(round-1)]>rightDeck[(round-1)]){
            announcer.innerHTML="Left player wins the round.";
            leftScore += 1;
            leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
        }
        else if(leftDeck[(round-1)]<rightDeck[(round-1)]){
            rightScore += 1;
            announcer.innerHTML="Right player wins the round.";
            leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
        }
        else{
            alert("Draw !");
        }
    }, 1000); 
};


