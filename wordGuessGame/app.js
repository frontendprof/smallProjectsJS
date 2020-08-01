

window.addEventListener("load",init);


function init(){
    let div = document.createElement("div")
    div.setAttribute('class', "msg")
    div.innerHTML="Please something over here"
    document.body.appendChild(div)

    let btn = document.createElement("button")
    btn.type="button"
    btn.innerHTML="Press Here bro"
    document.body.appendChild(btn)

    let div1=document.createElement("div")
    div1.classList.add("game")
    document.body.appendChild(div1)

    console.log("REady");
}