console.log("welcome to tic tac toe");
let turn ="X";
let isgameover=false;
const changeTurn =()=>{
   // return turn ==="X" ? "0": "X";
    if(turn==="X")
    {
        return "0";
    }
    else
    {
        return "X";
    }
}
//function to check to win
const checkWin =()=>{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins =[ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
  wins.forEach(e =>{
       if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== ""))
       {
            document.querySelector('.info').innerText = "congratulation "+boxtext[e[0]].innerText +" won the game\n";
            isgameover= true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px";
       }
  })
}
// game logic
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
           boxtext.innerText =turn;
           turn=changeTurn();
           checkWin();
           if(!isgameover)
           {document.getElementsByClassName("turn")[0].innerText ="turn for yours" +turn ;}
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
     element.innerText= ""
    });
    turn="X";
    isgameover =false;
    document.getElementsByClassName("info")[0].innerText ="Turn for " +turn ;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px";
})

