function cambia(x){
    x.style.backgroundColor="#fff";
    x.style.color="hsl(25, 97%, 53%)";

}
function orange(x){
    x.style.backgroundColor="hsl(25, 97%, 53%)";
    x.style.color="#fff";
}
function circle(x){
    x.style.backgroundColor="hsl(213, 19%, 18%)";
    x.style.color="hsl(217, 12%, 63%)";
}

function over(x){
    x.classList.add("over");
}

function out(x){
    x.classList.remove("over");
}

let btntxt="";

const buttons = document.getElementsByTagName("button");

function selected(x){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
      }
      
    x.classList.add("selected");

    btntxt = x.innerText;

    let numero = document.getElementById("number");

    numero.textContent = btntxt;
}

function vai(){
    let rating = document.getElementById("card1");
    let tnks = document.getElementById("card2");

    if( btntxt < 6 && btntxt > 0){
        rating.style.display = "none";
        tnks.style.display = "block";
    }else{
        alert("Select an option");
    }
}