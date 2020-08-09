

// Defining global variables

const txt=document.querySelector("textarea");
const output=document.querySelector(".output");


// txt.addEventListener("change",textCounter);
// txt.addEventListener("keyup",textCounter);
// txt.addEventListener("keydown",textCounter);


['change','keyup','keydown'].forEach(function(e){
    txt.addEventListener(e,textCounter);
})


const maxLength=20;
const warnLength=7;


function textCounter(e){
    let count=txt.value.length;

    if(count>maxLength){
        txt.value=txt.value.substring(0,maxLength);
    }

    if(count>warnLength){
        output.classList.add("red");        
    }
    else{
        output.classList.remove("red");
    }
    output.innerHTML=(maxLength-count)+" characters left";
}