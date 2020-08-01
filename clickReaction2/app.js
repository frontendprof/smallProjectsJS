

// Defining global variables

const btn = document.querySelector("button");
const msg = document.querySelector(".message");
const gameA = document.querySelector(".gameArea");


let playArea={};




messager("Click start button");


// Setting event listener

btn.addEventListener("click", function(){
    btn.style.display="none";
    messager("Click circles as quickly as you see them");
    playArea.timer=setTimeout(myBox,rand(2000));
    
})



function myBox(){
    let el = document.createElement("div");
    el.classList.add("box");
    el.style.width=rand(90)+15+"px";
    el.style.height=rand(80)+15+"px";
    el.style.borderRadius=rand(100)+"%";
    el.style.top=rand(500)+"%";
    el.style.left=rand(90)+"%";
    el.style.backgroundColor=getColor();
    el.addEventListener("click",hit);
    el.start = new Date().getTime();
    gameA.appendChild(el);

}


function hit(e){
    let end =new Date().getTime();
    let start=e.target.start;
    let duration = ((end-start)/1000).toFixed(2);
    messager(`It took ${duration} seconds to click`);
    clearTimeout(playArea.timer);
    gameA.children[0].remove();
    playArea.timer=setTimeout(myBox,rand(2500));

}


function getColor(){
    function col(){
        let hex=rand(256).toString(16)
        return ("0"+String(hex)).substr(-2);
    }
    return "#"+col()+col()+col();
}


function rand(num){
    let tempVal=Math.floor(Math.random()*num);
    return tempVal;
}

function messager(mes){
    msg.innerHTML=mes;
}