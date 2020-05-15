let myScore = 0;
let yourScore = 0;



function say(msg){
    document.getElementById("message").innerHTML = msg;
};

say("How about a game?");

function hey(){
    
    //timeout function doesn't seem to want to work
    window.setTimeout(say("hmm"), 3000);
    say("Hey! Stay on Your Side!");

};

function about(){
    say("It's rock paper scissors! What more is there to say??\n \nIcons by Cristiano Zouacs from the Noun Project.\n \nColor scheme by Penelope Fung.");
};

function resetIcons(){
//Reset the icons from being white

document.getElementById("myRock").src="./img/rock.png";
document.getElementById("myPaper").src="./img/paper.png";
document.getElementById("myScissors").src="./img/scissors.png";

document.getElementById("yourRock").src="./img/rock.png";
document.getElementById("yourPaper").src="./img/paper.png";
document.getElementById("yourScissors").src="./img/scissors.png";

}

function reset(){
    resetIcons();
    myScore = 0;
    yourScore = 0;
    say("Beep boop.");
    document.getElementById("myscore").innerHTML = "";
    document.getElementById("yourscore").innerHTML = "";
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function decodeMove(n, whose){
    
    resetIcons();
    if (n == 1){
        document.getElementById(whose+"Rock").src="./img/whiterock.png";
        return "Rock";
    }else if (n == 2){
        document.getElementById(whose+"Paper").src="./img/whitepaper.png";
        return "Paper";
    }else{
        document.getElementById(whose+"Scissors").src="./img/whitescissors.png";
        return "Scissors";
    };
};

function press(user){

    let ai = getRndInteger(1,3);


    if (user==ai){
        say(decodeMove(user, "your") +" and " + decodeMove(ai, "my") + "!\n It's a Tie!");
    }else if ((user-ai == -2) || (user-ai == 1)){
        say(decodeMove(user, "your") +" beats " + decodeMove(ai, "my") + "!\n You Win!");
        yourScore += 1;
    }else{
        say(decodeMove(ai, "your") + " beats " + decodeMove(user, "my") + "!\n You Lose!");
        myScore += 1;
    };

    document.getElementById("myscore").innerHTML = "Me: " + myScore;
    document.getElementById("yourscore").innerHTML = "You: " + yourScore;
};
