console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn =new Audio("ting.mp3");
let gameover =new Audio("gameover.mp3");
let turn="X";
let isgameover=false;

// Function to change turn
const changeTurn =()=>{
    return turn ==="X"?"0":"X"
}

// Function to check winner
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let wins=[
    [0, 1, 2, -19, 5, 0],
    [3,4,5,-19,15,0],
    [6,7,8,-19,25,0],
    [0,3,6,-29,15,90],
    [1,4,7,-19,15,90],
    [2,5,8,-9,15,90],
    [0,4,8,-19,15,45],
    [2,4,6,-19,15,135],
]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="300px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
}
}
)
}
// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;}
        }
    })
})
// Add onclick listener to reset
Reset.addEventListener('click',()=>{
    let boxtext =document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for"+ turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px"
    
    document.querySelector(".line").style.width="0vw"
}
) 