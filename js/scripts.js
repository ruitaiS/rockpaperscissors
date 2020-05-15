let myScore = 0;
let yourScore = 0;
let infoScreen = false;



function say(msg){
    document.getElementById("message").innerHTML = msg;
};

say("How about a game?");

function hey(){
    say("Hey! Stay on Your Side!");
    
    //timeout doesn't seem to work if you pass a variable to the inner function
    //setTimeout(reset, 3000);

};

function about(){
    if (!infoScreen){
    infoScreen = true;
    say("It's rock paper scissors! What more is there to say??\nIcons by Cristiano Zouacs from the Noun Project.\nColor scheme by Penelope Fung.");
    document.getElementById("aboutBtn").innerHTML = "Back";
    }else{
    infoScreen = false;
    document.getElementById("aboutBtn").innerHTML = "About";
    say("Let's Play!");
    
    };
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

    resetIcons();
    let ai = getRndInteger(1,3);


    if (user==ai){
        say(decodeMove(user, "your") +" and " + decodeMove(ai, "my") + "!\n It's a Tie!");
    }else if ((user-ai == -2) || (user-ai == 1)){
        say(decodeMove(user, "your") +" beats " + decodeMove(ai, "my") + "!\n You Win!");
        yourScore += 1;
    }else{
        say(decodeMove(ai, "my") + " beats " + decodeMove(user, "your") + "!\n You Lose!");
        myScore += 1;
    };

    document.getElementById("myscore").innerHTML = "Me: " + myScore;
    document.getElementById("yourscore").innerHTML = "You: " + yourScore;
};
