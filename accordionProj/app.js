

// Definin global variables

const accordionItemHeaders=document.querySelectorAll(".accordion-item-header");






accordionItemHeaders.forEach(acc=>{
    acc.addEventListener("click",e=>{

        const curActive=document.querySelector(".accordion-item-header.active");

        if(curActive && curActive!==acc){
            curActive.classList.toggle("active");
            curActive.nextElementSibling.style.maxHeight=0;
        }



        acc.classList.toggle("active")

        const accItemBody=acc.nextElementSibling;

        if(acc.classList.contains("active")){
            accItemBody.style.maxHeight=accItemBody.scrollHeight+"px";
        }
        else{
            accItemBody.style.maxHeight=0;
        }
    })
})
