let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
let display = document.querySelector(".msg");
let uscore = document.querySelector("#user");
let cscore = document.querySelector("#comp");

const computerchoice = () =>{
    let probablechoice = ["paper","rock","scissors"];
    let varchoise = Math.floor(Math.random()*3);
    let cchoice = probablechoice[varchoise];
    return cchoice;
};

const decision =(userwin)=>{
    if(userwin){
        user++;
        uscore.innerText = `${user}`
        display.innerText = "you win!"
        display.style.backgroundColor = "green";
    }else{
        comp++;
        cscore.innerText = `${comp}`
        display.innerText = "you lose!"
        display.style.backgroundColor = "red";
    }
}


const playgame = (userchoise)=>{
    console.log("user choice =",userchoise);
    const compchoice = computerchoice();
    console.log("computer choice =",compchoice);

    if(userchoise === compchoice){
        display.innerText = "Draw! Try again";
        display.style.backgroundColor = "rgba(3, 3, 52, 0.793)";
    }
    else{
        let userwin = true;
        if(userchoise === "rock"){
            userwin = compchoice === "paper"? false:true;
         }else if(userchoise === "scissors"){
            userwin = compchoice === "rock"?false:true;

                 }else{
                    userwin = compchoice ==="scissors"?true:false ;
                 }
                 decision(userwin);
    }
    
    
};



choices.forEach((choice) => {
 choice.addEventListener("click",()=>{
const userchoise = choice.getAttribute("id");

    playgame(userchoise);
 
});
});