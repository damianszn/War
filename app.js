//////////////////////////Prep//////////////////////////////
//Making of all the cards and splitting them into decks
var splittedHearts;var splittedDiamonds;var splittedClubs;var splittedSpades;
var allHearts = ["H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13","H14"];
allHearts.sort(function(){
    return 0.5 - Math.random()
});
splittedHearts = allHearts.splice(0, Math.floor(allHearts.length / 2));

var allDiamonds = ["D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14"];
allDiamonds.sort(function(){
    return 0.5 - Math.random()
});
splittedDiamonds = allDiamonds.splice(0, Math.floor(allDiamonds.length / 2));

var allClubs = ["C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14"];
allClubs.sort(function(){
    return 0.5 - Math.random()
});
splittedClubs = allClubs.splice(0, Math.floor(allClubs.length / 2));

var allSpades = ["S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13","S14"];
allSpades.sort(function(){
    return 0.5 - Math.random()
});
splittedSpades = allSpades.splice(0, Math.floor(allSpades.length / 2));

var one = splittedHearts.concat(splittedDiamonds);
var two = splittedClubs.concat(splittedSpades);

var three = allHearts.concat(allDiamonds);
var four = allClubs.concat(allSpades);

//Decks will be arrays with arrays
var leftDeck = one.concat(two);
leftDeck.sort(function(){
    return 0.5 - Math.random()
});
var rightDeck = three.concat(four);
rightDeck.sort(function(){
    return 0.5 - Math.random()
});

div = document.getElementById('left');
//div.innerHTML = leftDeck;
div2 = document.getElementById('right');
//div2.innerHTML = rightDeck;

/////////////////////////////Play///////////////////////////////////
//Rounds, score & stuff
var round = 0;var leftCard; var rightCard; var drawCounter =0;
roundDisplayer = document.getElementById('round');
roundDisplayer.innerHTML = "Round number : <br>"+round;
leftScore = 0;leftScoreDisplayer = document.getElementById('leftScoreDisplayer');
rightScore = 0;rightScoreDisplayer = document.getElementById('rightScoreDisplayer');
leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
announcer = document.getElementById('announcer');
announcer.innerHTML="";
button = document.getElementById('button');
footer = document.getElementById('footer');
var win;

div.innerHTML = "<img src='backcard.png' class='imgCard'>";
div2.innerHTML = "<img src='backcard.png' class='imgCard'>";

var nextRound = function() {
    round += 1;
    roundDisplayer.innerHTML = "Round number : "+round+". <br> Ends at 24.";
    announcer.innerHTML = "Drawing cards...";
    div.innerHTML = "<img src='backcard.png' class='imgCard'>";
    div2.innerHTML = "<img src='backcard.png' class='imgCard'>";
    footer.innerHTML = "Thank you for playing ! <br> I'm <a href='https://github.com/damianszn'>DamianSzn</a>, feel free to check my other projects.";
    setTimeout(function(){ 
        div.innerHTML = cardImgReturner(leftDeck[(round-1)]);
        div2.innerHTML = cardImgReturner(rightDeck[(round-1)]);
        leftCard = parseInt(leftDeck[(round-1)].substr(1,3));
        rightCard = parseInt(rightDeck[(round-1)].substr(1,3));
        if(round>23){
            if(leftScore>rightScore){
                win = "Left";
            }
            else if(leftScore<rightScore){
                win = "Right";
            }
            alert("No more cards ! "+win+" player win the game.")
        }
        else if(leftCard>rightCard){
            announcer.innerHTML="Left player wins the round.";
            leftScore += 1;
            leftScoreDisplayer.innerHTML = 'Left player score : '+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score : '+rightScore;
        }
        else if(leftCard<rightCard){
            rightScore += 1;
            announcer.innerHTML="Right player wins the round.";
            leftScoreDisplayer.innerHTML = 'Left player score : '+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score : '+rightScore;
        }
        else if(leftCard===rightCard){
            announcer.innerHTML="DRAW !";
            drawCounter =0;
            setTimeout(function(){ 
                draw();
            }, 1000); 
        }
    }, 1000); 
};

var cardImgReturner = function(cardId){
    var card = cardId;
    var family = (card.substr(0,1));
    var number = parseInt(cardId.substr(1,3));
    if(family=="H"){
        switch(number){
            case 2:
                return "<img src='PNG/2H.png' class='imgCard'>";
            case 3:
                return "<img src='PNG/3H.png' class='imgCard'>";
            case 4:
                return "<img src='PNG/4H.png' class='imgCard'>";
            case 5:
                return "<img src='PNG/5H.png' class='imgCard'>";
            case 6:
                return "<img src='PNG/6H.png' class='imgCard'>";
            case 7:
                return "<img src='PNG/7H.png' class='imgCard'>";
            case 8:
                return "<img src='PNG/8H.png' class='imgCard'>";
            case 9:
                return "<img src='PNG/9H.png' class='imgCard'>";
            case 10:
                return "<img src='PNG/10H.png' class='imgCard'>";
            case 11:
                return "<img src='PNG/JH.png' class='imgCard'>";
            case 12:
                return "<img src='PNG/QH.png' class='imgCard'>";
            case 13:
                return "<img src='PNG/KH.png' class='imgCard'>";
            case 14:
                return "<img src='PNG/AH.png' class='imgCard'>";
            default:
                return "Error.";
        }
    }
    else if(family=="D"){
        switch(number){
            case 2:
                return "<img src='PNG/2D.png' class='imgCard'>";
            case 3:
                return "<img src='PNG/3D.png' class='imgCard'>";
            case 4:
                return "<img src='PNG/4D.png' class='imgCard'>";
            case 5:
                return "<img src='PNG/5D.png' class='imgCard'>";
            case 6:
                return "<img src='PNG/6D.png' class='imgCard'>";
            case 7:
                return "<img src='PNG/7D.png' class='imgCard'>";
            case 8:
                return "<img src='PNG/8D.png' class='imgCard'>";
            case 9:
                return "<img src='PNG/9D.png' class='imgCard'>";
            case 10:
                return "<img src='PNG/10D.png' class='imgCard'>";
            case 11:
                return "<img src='PNG/JD.png' class='imgCard'>";
            case 12:
                return "<img src='PNG/QD.png' class='imgCard'>";
            case 13:
                return "<img src='PNG/KD.png' class='imgCard'>";
            case 14:
                return "<img src='PNG/AD.png' class='imgCard'>";
            default:
                return "Error.";
        }
    }
    else if(family=="C"){
        switch(number){
            case 2:
                return "<img src='PNG/2C.png' class='imgCard'>";
            case 3:
                return "<img src='PNG/3C.png' class='imgCard'>";
            case 4:
                return "<img src='PNG/4C.png' class='imgCard'>";
            case 5:
                return "<img src='PNG/5C.png' class='imgCard'>";
            case 6:
                return "<img src='PNG/6C.png' class='imgCard'>";
            case 7:
                return "<img src='PNG/7C.png' class='imgCard'>";
            case 8:
                return "<img src='PNG/8C.png' class='imgCard'>";
            case 9:
                return "<img src='PNG/9C.png' class='imgCard'>";
            case 10:
                return "<img src='PNG/10C.png' class='imgCard'>";
            case 11:
                return "<img src='PNG/JC.png' class='imgCard'>";
            case 12:
                return "<img src='PNG/QC.png' class='imgCard'>";
            case 13:
                return "<img src='PNG/KC.png' class='imgCard'>";
            case 14:
                return "<img src='PNG/AC.png' class='imgCard'>";
            default:
                return "Error.";
        }
    }
    else if(family=="S"){
        switch(number){
            case 2:
                return "<img src='PNG/2S.png' class='imgCard'>";
            case 3:
                return "<img src='PNG/3S.png' class='imgCard'>";
            case 4:
                return "<img src='PNG/4S.png' class='imgCard'>";
            case 5:
                return "<img src='PNG/5S.png' class='imgCard'>";
            case 6:
                return "<img src='PNG/6S.png' class='imgCard'>";
            case 7:
                return "<img src='PNG/7S.png' class='imgCard'>";
            case 8:
                return "<img src='PNG/8S.png' class='imgCard'>";
            case 9:
                return "<img src='PNG/9S.png' class='imgCard'>";
            case 10:
                return "<img src='PNG/10S.png' class='imgCard'>";
            case 11:
                return "<img src='PNG/JS.png' class='imgCard'>";
            case 12:
                return "<img src='PNG/QS.png' class='imgCard'>";
            case 13:
                return "<img src='PNG/KS.png' class='imgCard'>";
            case 14:
                return "<img src='PNG/AS.png' class='imgCard'>";
            default:
                return "Error.";
        }
    }
    else{
        return "Something wrong in image returner.";
    }
}



var draw = function(){
    drawCounter +=1;
    announcer.innerHTML = "One hidden card from the deck.";
    div.innerHTML = "<img src='backcard.png' class='imgCard'>";
    div2.innerHTML = "<img src='backcard.png' class='imgCard'>";
    setTimeout(function(){ 
        div.innerHTML = cardImgReturner(leftDeck[(round+drawCounter)]);
        div2.innerHTML = cardImgReturner(rightDeck[(round+drawCounter)]);
        leftCard = parseInt(leftDeck[(round+drawCounter)].substr(1,3));
        rightCard = parseInt(rightDeck[(round+drawCounter)].substr(1,3));
        if(round>23){
            if(leftScore>rightScore){
                win = "Left";
            }
            else if(leftScore<rightScore){
                win = "Right";
            }
            alert("No more cards ! "+win+" player win the game.")
        }
        else if(leftCard>rightCard){
            announcer.innerHTML="Left player wins the draw.";
            leftScore += (1+drawCounter);
            leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
        }
        else if(leftCard<rightCard){
            rightScore += (1+drawCounter);
            announcer.innerHTML="Right player wins the draw.";
            leftScoreDisplayer.innerHTML = 'Left player score :'+leftScore;
            rightScoreDisplayer.innerHTML ='Right player score :'+rightScore;
        }
        else if(leftCard===rightCard){
            announcer.innerHTML="DRAW !";
            setTimeout(function(){ 
                draw();
            }, 1000); 
        }
    }, 1000); 
}