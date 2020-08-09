

// Defining global variables

const txt=document.querySelector("textarea");
const output=document.querySelector(".output");


// txt.addEventListener("change",textCounter);
// txt.addEventListener("keyup",textCounter);
// txt.addEventListener("keydown",textCounter);


['change','keyup','keydown'].forEach(function(e){
    txt.addEventListener(e,textCounter);
})


const maxLength=10;
const warnLength=5;


function textCounter(e){
    console.log(e);
    let count=txt.value.length;
    console.log(count);

    if(count>maxLength){
        console.log(txt.value.substring(0,maxLength))
    }
}