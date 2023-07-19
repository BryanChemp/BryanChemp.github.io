let nameInput = document.getElementById("nome-input");
let nameValue = document.getElementById("nome-mini");
let nameValue2 = document.getElementById("nome");
let oldLengthInput = 0;
nameInput.addEventListener("input", function(){

    let palavra = nameInput.value;
    let newLengthInput = palavra.length;

    if (newLengthInput !== oldLengthInput) {
        
        nameValue.innerHTML = palavra;

        oldLengthInput = newLengthInput;
    }

    if (newLengthInput <= 17) {
        /*
        nameValue.style.marginBottom = "30px";
        nameValue.style.marginTop = "20px";

        nameValue2.style.marginBottom = "120px";
        nameValue2.style.marginTop = "80px";
        */
    }

    else {
       /* nameValue.style.marginBottom = "10px";
        nameValue.style.marginTop = "10px";

        nameValue2.style.marginBottom = "40px";
        nameValue2.style.marginTop = "40px";
        */
    }
})

let deInput = document.getElementById("de-input");
let deValue = document.getElementById("de-preco-mini");
let oldDeLengthInput = 0;
deInput.addEventListener("input", function(){

    let palavra = deInput.value;
    let newLengthInput = palavra.length;

    if (newLengthInput !== oldDeLengthInput) {
        
        deValue.innerHTML = palavra;

        oldDeLengthInput = newLengthInput;
    }  
})

let porInput = document.getElementById("por-input");
let porValue = document.getElementById("por-preco-mini");
let porValue2 = document.getElementById("por-preco");
let oldPorLengthInput = 0;
porInput.addEventListener("input", function(){


    let palavra = porInput.value;
    let newLengthInput = palavra.length;

    if (newLengthInput >= 6) {
        porValue.style.fontSize = '3.5em';

        porValue2.style.fontSize = '14em';
    }
    else if (newLengthInput < 4) {
        porValue.style.fontSize = '4em';

        porValue2.style.fontSize = '16em';
    }


    console.log(newLengthInput);

    if (newLengthInput !== oldPorLengthInput) {
            
            porValue.innerHTML = palavra;

            oldPorLengthInput = newLengthInput;
    }
})



function gerarPapeleta() {
    document.getElementById("nome").innerHTML = document.getElementById("nome-input").value;
    document.getElementById("de-preco").innerHTML = document.getElementById("de-input").value;
    document.getElementById("por-preco").innerHTML = document.getElementById("por-input").value;

    document.getElementById("nome-mini").innerHTML = document.getElementById("nome-input").value;
    document.getElementById("de-preco-mini").innerHTML = document.getElementById("de-input").value;
    document.getElementById("por-preco-mini").innerHTML = document.getElementById("por-input").value;
    window.print();

}
