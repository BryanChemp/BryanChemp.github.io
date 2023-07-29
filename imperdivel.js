
let inputs = document.getElementsByClassName("input");

console.log("Teste");

for (let i = 0; i < inputs.length; i++) {
    let inputElement = inputs[i];
    inputElement.addEventListener("input", atualizar);
}


function atualizar() {
    let ppName1 = document.getElementsByClassName("papeleta-nome-1");
    let ppName2 = document.getElementsByClassName("papeleta-nome-2");
    let ppName3 = document.getElementsByClassName("papeleta-nome-3");
    let ppName4 = document.getElementsByClassName("papeleta-nome-4");
    let ppName5 = document.getElementsByClassName("papeleta-nome-5");
    let ppName6 = document.getElementsByClassName("papeleta-nome-6");


    let ppDe1 = document.getElementsByClassName("papeleta-de-preco-1");
    let ppDe2 = document.getElementsByClassName("papeleta-de-preco-2");
    let ppDe3 = document.getElementsByClassName("papeleta-de-preco-3");
    let ppDe4 = document.getElementsByClassName("papeleta-de-preco-4");
    let ppDe5 = document.getElementsByClassName("papeleta-de-preco-5");
    let ppDe6 = document.getElementsByClassName("papeleta-de-preco-6");



    let ppPor1 = document.getElementsByClassName("papeleta-por-preco-1");
    let ppPor2 = document.getElementsByClassName("papeleta-por-preco-2");
    let ppPor3 = document.getElementsByClassName("papeleta-por-preco-3");
    let ppPor4 = document.getElementsByClassName("papeleta-por-preco-4");
    let ppPor5 = document.getElementsByClassName("papeleta-por-preco-5");
    let ppPor6 = document.getElementsByClassName("papeleta-por-preco-6");

    console.log ("aaa");

    /* nomes */
    updateDeValue("name-input-1", "papeleta-nome-1");
    updateDeValue("name-input-2", "papeleta-nome-2");
    updateDeValue("name-input-3", "papeleta-nome-3");
    updateDeValue("name-input-4", "papeleta-nome-4");
    updateDeValue("name-input-5", "papeleta-nome-5");
    updateDeValue("name-input-6", "papeleta-nome-6");

    function updateDeValue(inputId, elementsClassName) {
        let porInput = document.getElementById(inputId);
        let porValue = porInput.value;
    
        let elements = document.getElementsByClassName(elementsClassName);
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = porValue;
        }
    }

    /* ------De---- */

    updateDeValue("de-input-1", "papeleta-de-preco-1");
    updateDeValue("de-input-2", "papeleta-de-preco-2");
    updateDeValue("de-input-3", "papeleta-de-preco-3");
    updateDeValue("de-input-4", "papeleta-de-preco-4");
    updateDeValue("de-input-5", "papeleta-de-preco-5");
    updateDeValue("de-input-6", "papeleta-de-preco-6");

    function updateDeValue(inputId, elementsClassName) {
        let porInput = document.getElementById(inputId);
        let porValue = porInput.value;
    
        let elements = document.getElementsByClassName(elementsClassName);
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = porValue;
        }
    }


    /* ----------Por--------- */

    updatePorValue("por-input-1", "papeleta-por-preco-1");
    updatePorValue("por-input-2", "papeleta-por-preco-2");
    updatePorValue("por-input-3", "papeleta-por-preco-3");
    updatePorValue("por-input-4", "papeleta-por-preco-4");
    updatePorValue("por-input-5", "papeleta-por-preco-5");
    updatePorValue("por-input-6", "papeleta-por-preco-6");

    function updatePorValue(inputId, elementsClassName) {
        let porInput = document.getElementById(inputId);
        let porValue = porInput.value;
    
        let elements = document.getElementsByClassName(elementsClassName);
    
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = porValue;
        }
    }
}




function alterarVariaveis(elemento) {
    if (elemento.value === "1x1") {
        let papeleta = document.getElementById("1p1");
        let papeleta2 = document.getElementById("2p1");
        let papeleta4 = document.getElementById("4p1");
        let papeleta6 = document.getElementById("6p1");

        let pap1 = document.getElementById("pap1");
        let pap2 = document.getElementById("pap2");
        let pap3 = document.getElementById("pap3");
        let pap4 = document.getElementById("pap4");
        let pap5 = document.getElementById("pap5");
        let pap6 = document.getElementById("pap6");

        pap1.style.display = "block";
        pap2.style.display = "none";
        pap3.style.display = "none";
        pap4.style.display = "none";
        pap5.style.display = "none";
        pap6.style.display = "none";

        papeleta.style.display = "flex";
        papeleta2.style.display = "none";
        papeleta4.style.display = "none";
        papeleta6.style.display = "none";
        

        document.documentElement.style.setProperty('--width-a4', '275px');
        document.documentElement.style.setProperty('--height-a4', '388.5px');
        document.documentElement.style.setProperty('--font-a4', '1rem');


    } else if (elemento.value === "2x1") {
        let papeleta = document.getElementById("1p1");
        let papeleta2 = document.getElementById("2p1");
        let papeleta4 = document.getElementById("4p1");
        let papeleta6 = document.getElementById("6p1");

        let pap1 = document.getElementById("pap1");
        let pap2 = document.getElementById("pap2");
        let pap3 = document.getElementById("pap3");
        let pap4 = document.getElementById("pap4");
        let pap5 = document.getElementById("pap5");
        let pap6 = document.getElementById("pap6");

        pap1.style.display = "block";
        pap2.style.display = "block";
        pap3.style.display = "none";
        pap4.style.display = "none";
        pap5.style.display = "none";
        pap6.style.display = "none";

        papeleta.style.display = "none";
        papeleta2.style.display = "flex";
        papeleta4.style.display = "none";
        papeleta6.style.display = "none";



        document.documentElement.style.setProperty('--width-a4', '194.25px');
        document.documentElement.style.setProperty('--height-a4', '275px');
        document.documentElement.style.setProperty('--font-a4', '0.75rem');


    } else if (elemento.value === "4x1") {
        let papeleta = document.getElementById("1p1");
        let papeleta2 = document.getElementById("2p1");
        let papeleta4 = document.getElementById("4p1");
        let papeleta6 = document.getElementById("6p1");

        let pap1 = document.getElementById("pap1");
        let pap2 = document.getElementById("pap2");
        let pap3 = document.getElementById("pap3");
        let pap4 = document.getElementById("pap4");
        let pap5 = document.getElementById("pap5");
        let pap6 = document.getElementById("pap6");

        pap1.style.display = "block";
        pap2.style.display = "block";
        pap3.style.display = "block";
        pap4.style.display = "block";
        pap5.style.display = "none";
        pap6.style.display = "none";

        papeleta.style.display = "none";
        papeleta2.style.display = "none";
        papeleta4.style.display = "flex";
        papeleta6.style.display = "none";


    
        document.documentElement.style.setProperty('--width-a4', '137.5px');
        document.documentElement.style.setProperty('--height-a4', '194.25px');
        document.documentElement.style.setProperty('--font-a4', '0.5rem');

    } else if (elemento.value === "6x1") {
        let papeleta = document.getElementById("1p1");
        let papeleta2 = document.getElementById("2p1");
        let papeleta4 = document.getElementById("4p1");
        let papeleta6 = document.getElementById("6p1");

        let pap1 = document.getElementById("pap1");
        let pap2 = document.getElementById("pap2");
        let pap3 = document.getElementById("pap3");
        let pap4 = document.getElementById("pap4");
        let pap5 = document.getElementById("pap5");
        let pap6 = document.getElementById("pap6");

        pap1.style.display = "block";
        pap2.style.display = "block";
        pap3.style.display = "block";
        pap4.style.display = "block";
        pap5.style.display = "block";
        pap6.style.display = "block";

        papeleta.style.display = "none";
        papeleta2.style.display = "none";
        papeleta4.style.display = "none";
        papeleta6.style.display = "flex";


    
        document.documentElement.style.setProperty('--width-a4', '129px');
        document.documentElement.style.setProperty('--height-a4', '137.5px');
        document.documentElement.style.setProperty('--font-a4', '0.36rem');
    }
  }


  const labels = document.getElementsByClassName("label");
  const contentBoxes = document.getElementsByClassName("contentBx");
  
  for (let i = 0; i < labels.length; i++) {
      labels[i].addEventListener("click", function () {
          const currentContentBox = this.parentElement;
          const isActive = currentContentBox.classList.contains("active");
  
          // Close all content boxes
          for (let j = 0; j < contentBoxes.length; j++) {
              contentBoxes[j].classList.remove("active");
          }
  
          // If the clicked content was not active, open it
          if (!isActive) {
              currentContentBox.classList.add("active");
          }
      });
  }