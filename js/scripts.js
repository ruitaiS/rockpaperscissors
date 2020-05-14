function say(message){
    document.getElementById("message").innerHTML = message;
}

say("hi");

function hey(){
    say("Hey! Stay on Your Side!");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function press(user){

    let ai = getRndInteger(1,3);
    if user==ai{
        say("Tie!");

    }else if (user-ai == -2) || (user-ai == 1){
        say("Win!");
    }else{
        say("Lose!");
    }
}
