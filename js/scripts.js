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

    //add code to reset the counter when the counter is added
};

function reset(){
    myScore = 0;
    yourScore = 0;
    say("Beep boop.");
    document.getElementById("myscore").innerHTML = "";
    document.getElementById("yourscore").innerHTML = "";
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function decodeMove(n){
    if (n == 1){
        return "Rock";
    }else if (n == 2){
        return "Paper";
    }else{
        return "Scissors";
    };
};

function press(user){

    let ai = getRndInteger(1,3);


    if (user==ai){
        say(decodeMove(user) +" and " + decodeMove(ai) + "!\n It's a Tie!");
    }else if ((user-ai == -2) || (user-ai == 1)){
        say(decodeMove(user) +" beats " + decodeMove(ai) + "!\n You Win!");
        yourScore += 1;
    }else{
        say(decodeMove(ai) + " beats " + decodeMove(user) + "!\n You Lose!");
        myScore += 1;
    };

    document.getElementById("myscore").innerHTML = "Me: " + myScore;
    document.getElementById("yourscore").innerHTML = "You: " + yourScore;
};
