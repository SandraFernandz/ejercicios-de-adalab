const bodyEl = document.querySelector("body");


function changeColor (event){
    console.log(event.code);

    if(event.code === "KeyR"){
        bodyEl.classList.add("red")} else if(event.code ==="KeyM"){
            bodyEl.classList.add("purple")

        }
    }


document.addEventListener("keydown", changeColor);