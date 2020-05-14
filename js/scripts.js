document.getElementById("message").innerHTML = "yo";



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
    say("It's rock paper scissors! What more is there to say??\nIcons by Cristiano Zouacs from the Noun Project.\nColor scheme by Penelope Fung.");

    //add code to reset the counter when the counter is added
};

function reset(){
    say("");
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
    }else{
        say(decodeMove(ai) + " beats " + decodeMove(user) + "!\n You Lose!");
    };
};
