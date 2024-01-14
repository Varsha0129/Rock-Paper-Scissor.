let userScore=0;
let systemScore=0;

let choices=document.querySelectorAll("#choice");

let scores = document.querySelectorAll(".score");
let usercount = document.querySelector(".userScore");
let systemcount  =document.querySelector(".systemScore");
let msg = document.querySelector(".start");

let systemOptions= ()=>{
    let options=["Rock","Paper","Scissor"];
   let index = Math.floor(Math.random() *3);
   let systemOption = options[index];
return systemOption;
}

function showwinner(userwin){
if(userwin){
    msg.innerText="congratulations you are the winner";
console.log("you win..!")
userScore++;
usercount.innerHTML=userScore;
msg.style.backgroundColor="green";
msg.style.color="white";

}
else{
    msg.innerText="you are the looser better luck next time..!";
    console.log("you lose..!")
    systemScore++;
    systemcount.innerHTML=systemScore;
    msg.style.backgroundColor="red";
    msg.style.color="black";

}

}

function drawGame()
{
console.log("Both selected the game so, game was drwan so .. Start again")
msg.innerText="Both selected the game so, game was drawn so .. Start again"
msg.style.backgroundColor="rgb(248, 212, 11)";
userScore=0;
usercount.innerHTML=userScore;
systemScore=0;
systemcount.innerHTML=systemScore;
}
let checkWinner = (userChoice, systemChoice) => {
    let userwin = true; // Move the declaration outside the else block

    if (userChoice === systemChoice) {
        drawGame();
    } else {
        if (userChoice === "Rock") {
            userwin = systemChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userwin = systemChoice === "Rock" ? true : false;
        } else {
            userwin = systemChoice === "Scissor" ? false : true;
        }
        showwinner(userwin);

    }
};

let playGame= (userChoice)=>{
    console.log( "your choice was = ",userChoice );

    let systemChoice = systemOptions();
    console.log( "system choice was =",systemChoice);

checkWinner(userChoice,systemChoice);
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("class");
playGame(userChoice);

    })
    console.log(choice);
})