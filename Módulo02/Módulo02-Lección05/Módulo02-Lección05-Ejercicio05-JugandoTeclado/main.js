const bodyEl = document.querySelector("body");


function chgColor(event){

    if(event.key === "m"){
        bodyEl.classList.add('purple')
    } else{
        //replace sirve en lugar de add y remove una classList. lo hace todo en una línea
        bodyEl.classList.replace('purple', 'red')
    }
}

document.addEventListener('keyup', chgColor);



// function changeColor (event){
//     console.log(event.code);
    
//las clases .red y .purple se crean como estilos en css pero no se le da la clase al elemento al que se van a aplicar. se les añade el estilo con js. pero no al html

//     if(event.code === "KeyR"){
//         bodyEl.classList.add("red")} 
        
//         else if(event.code ==="KeyM"){
//             bodyEl.classList.add("purple")

//         }
//     }


// document.addEventListener("keydown", changeColor);