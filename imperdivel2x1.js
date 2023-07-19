let nameInput2p1 = document.getElementById("nome-input");
let nameValue2p1 = document.getElementById("nome-mini-2x1");
let nameValue2p12 = document.getElementById("nome");
let oldLengthInput2p1 = 0;
nameInput2p1.addEventListener("input", function(){

    let palavra2p1 = nameInput2p1.value;
    let newLengthInput2p1 = palavra2p1.length;

    if (newLengthInput2p1 !== oldLengthInput2p1) {
        
        nameValue2p1.innerHTML = palavra2p1;

        oldLengthInput2p1 = newLengthInput2p1;
    }

    if (newLengthInput2p1 <= 24) {

        nameValue2p1.style.fontSize = "1.2em";
    }

    if (newLengthInput2p1 > 34) {

        nameValue2p1.style.fontSize = "0.8em";
    }

    else {
        nameValue2p1.style.fontSize = "1.1em";
        nameValue2p1.style.marginTop = "10px";
    }
})

let deInput2p1 = document.getElementById("de-input");
let deValue2p1 = document.getElementById("de-preco-mini-2x1");
let oldDeLengthInput2p1 = 0;
deInput2p1.addEventListener("input", function(){

    let palavra2p1 = deInput2p1.value;
    let newLengthInput2p1 = palavra2p1.length;

    if (newLengthInput2p1 !== oldDeLengthInput2p1) {
        
        deValue2p1.innerHTML = palavra2p1;

        oldDeLengthInput2p1 = newLengthInput2p1;
    }  
})

let porInput2p1 = document.getElementById("por-input");
let porValue2p1 = document.getElementById("por-preco-mini-2x1");
let porValue2p12 = document.getElementById("por-preco");
let oldPorLengthInput2p1 = 0;
porInput2p1.addEventListener("input", function(){


    let palavra2p1 = porInput2p1.value;
    let newLengthInput2p1 = palavra2p1.length;

    if (newLengthInput2p1 >= 6) {
        porValue2p1.style.fontSize = '2.5em';
        porValue2p1.style.marginTop = "10px";
        porValue2p12.style.fontSize = '14em';
    }
    else if (newLengthInput2p1 < 4) {
        porValue2p1.style.fontSize = '3.2em';
        porValue2p1.style.marginTop = "0px";
        porValue2p12.style.fontSize = '16em';
    }


    console.log(newLengthInput2p1);

    if (newLengthInput2p1 !== oldPorLengthInput2p1) {
            
            porValue2p1.innerHTML = palavra2p1;

            oldPorLengthInput2p1 = newLengthInput2p1;
    }
})








let nameInput2p1p2 = document.getElementById("nome-input");
let nameValue2p1p2 = document.getElementById("nome-mini-2x12");
let nameValue2p1p22 = document.getElementById("nome");
let oldLengthInput2p1p2 = 0;
nameInput2p1p2.addEventListener("input", function(){

    let palavra2p1p2 = nameInput2p1p2.value;
    let newLengthInput2p1p2 = palavra2p1p2.length;

    if (newLengthInput2p1p2 !== oldLengthInput2p1p2) {
        
        nameValue2p1p2.innerHTML = palavra2p1p2;

        oldLengthInput2p1p2 = newLengthInput2p1p2;
    }

    if (newLengthInput2p1p2 <= 24) {

        nameValue2p1p2.style.fontSize = "1.2em";
    }

    if (newLengthInput2p1p2 > 34) {

        nameValue2p1p2.style.fontSize = "0.8em";
    }

    else {
        nameValue2p1p2.style.fontSize = "1.1em";
        nameValue2p1p2.style.marginTop = "10px";
    }
})

let deInput2p1p2 = document.getElementById("de-input");
let deValue2p1p2 = document.getElementById("de-preco-mini-2x12");
let oldDeLengthInput2p1p2 = 0;
deInput2p1p2.addEventListener("input", function(){

    let palavra2p1p2 = deInput2p1p2.value;
    let newLengthInput2p1p2 = palavra2p1p2.length;

    if (newLengthInput2p1p2 !== oldDeLengthInput2p1p2) {
        
        deValue2p1p2.innerHTML = palavra2p1p2;

        oldDeLengthInput2p1p2 = newLengthInput2p1p2;
    }  
})

let porInput2p1p2 = document.getElementById("por-input");
let porValue2p1p2 = document.getElementById("por-preco-mini-2x12");
let porValue2p1p22 = document.getElementById("por-preco");
let oldPorLengthInput2p1p2 = 0;
porInput2p1p2.addEventListener("input", function(){


    let palavra2p1p2 = porInput2p1p2.value;
    let newLengthInput2p1p2 = palavra2p1p2.length;

    if (newLengthInput2p1p2 >= 6) {
        porValue2p1p2.style.fontSize = '2.5em';
        porValue2p1p2.style.marginTop = "10px";
        porValue2p1p22.style.fontSize = '14em';
    }
    else if (newLengthInput2p1p2 < 4) {
        porValue2p1p2.style.fontSize = '3.2em';
        porValue2p1p2.style.marginTop = "0px";
        porValue2p1p22.style.fontSize = '16em';
    }


    console.log(newLengthInput2p1p2);

    if (newLengthInput2p1p2 !== oldPorLengthInput2p1p2) {
            
            porValue2p1p2.innerHTML = palavra2p1p2;

            oldPorLengthInput2p1p2 = newLengthInput2p1p2;
    }
})








let nameInputg2p1 = document.getElementById("nome-input");
let nameValueg2p1 = document.getElementById("nome-2x1");
let nameValueg2p12 = document.getElementById("nome");
let oldLengthInputg2p1 = 0;
nameInputg2p1.addEventListener("input", function(){

    let palavrag2p1 = nameInputg2p1.value;
    let newLengthInputg2p1 = palavrag2p1.length;


    if (newLengthInputg2p1 <= 24) {

        nameValueg2p1.style.fontSize = "4.8em";
    }

    if (newLengthInputg2p1 > 34) {

        nameValueg2p1.style.fontSize = "3.8em";
    }

    else {
        nameValueg2p1.style.fontSize = "4.4em";
        nameValueg2p1.style.marginTop = "40px";
    }
})

let nameInputg2p1p2 = document.getElementById("nome-input");
let nameValueg2p1p2 = document.getElementById("nome-2x12");
let nameValueg2p12p2 = document.getElementById("nome");
let oldLengthInputg2p1p2 = 0;
nameInputg2p1p2.addEventListener("input", function(){

    let palavrag2p1p2 = nameInputg2p1p2.value;
    let newLengthInputg2p1p2 = palavrag2p1p2.length;


    if (newLengthInputg2p1p2 <= 24) {

        nameValueg2p1p2.style.fontSize = "4.8em";
    }

    if (newLengthInputg2p1p2 > 34) {

        nameValueg2p1p2.style.fontSize = "3.8em";
    }

    else {
        nameValueg2p1p2.style.fontSize = "4.4em";
        nameValueg2p1p2.style.marginTop = "40px";
    }
})

let porInputg2p1 = document.getElementById("por-input");
let porValueg2p1 = document.getElementById("por-preco-2x1");
let porValueg2p12 = document.getElementById("por-preco");
let oldPorLengthInputg2p1 = 0;
porInputg2p1.addEventListener("input", function(){


    let palavrag2p1 = porInputg2p1.value;
    let newLengthInputg2p1 = palavrag2p1.length;

    if (newLengthInputg2p1 >= 6) {
        porValueg2p1.style.fontSize = '10em';
        porValueg2p1.style.marginTop = "40px";
        porValueg2p12.style.fontSize = '14em';
    }
    else if (newLengthInputg2p1 < 4) {
        porValueg2p1.style.fontSize = '10em';
        porValueg2p1.style.marginTop = "40px";
        porValueg2p12.style.fontSize = '16em';
    }


    console.log(newLengthInputg2p1);

    if (newLengthInputg2p1 !== oldPorLengthInputg2p1) {
            
            porValueg2p1.innerHTML = palavrag2p1;

            oldPorLengthInputg2p1 = newLengthInputg2p1;
    }
})

let porInputg2p1p2 = document.getElementById("por-input");
let porValueg2p1p2 = document.getElementById("por-preco-2x12");
let porValueg2p12p2 = document.getElementById("por-preco");
let oldPorLengthInputg2p1p2 = 0;
porInputg2p1p2.addEventListener("input", function(){


    let palavrag2p1p2 = porInputg2p1p2.value;
    let newLengthInputg2p1p2 = palavrag2p1p2.length;

    if (newLengthInputg2p1p2 >= 6) {
        porValueg2p1p2.style.fontSize = '10em';
        porValueg2p1p2.style.marginTop = "40px";
        porValueg2p12p2.style.fontSize = '14em';
    }
    else if (newLengthInputg2p1p2 < 4) {
        porValueg2p1p2.style.fontSize = '10em';
        porValueg2p1p2.style.marginTop = "40px";
        porValueg2p12p2.style.fontSize = '16em';
    }


    console.log(newLengthInputg2p1p2);

    if (newLengthInputg2p1p2 !== oldPorLengthInputg2p1p2) {
            
            porValueg2p1p2.innerHTML = palavrag2p1p2;

            oldPorLengthInputg2p1p2 = newLengthInputg2p1p2;
    }
})

;

function gerarPapeleta() {
    document.getElementById("nome-2x1").innerHTML = document.getElementById("nome-input").value;
    document.getElementById("de-preco-2x1").innerHTML = document.getElementById("de-input").value;
    document.getElementById("por-preco-2x1").innerHTML = document.getElementById("por-input").value;

    document.getElementById("nome-2x12").innerHTML = document.getElementById("nome-input").value;
    document.getElementById("de-preco-2x12").innerHTML = document.getElementById("de-input").value;
    document.getElementById("por-preco-2x12").innerHTML = document.getElementById("por-input").value;

    let previewVisible2x1 = document.getElementById("previewg2x1");
    previewVisible2x1.style.display = "flex";
    
    window.print();


}