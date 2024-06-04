// Variáveis
const multiplicationForm = document.querySelector("form")
const multiplicand = document.querySelector("#multiplicand")
const multiplier = document.querySelector("#multiplier")
const resultContainer = document.querySelector(".resultContainer")

//Funções
const resultTable = (multiplicandNumber, multiplierNumber)=>{
    resultContainer.innerHTML = ""
    const audio = new Audio("videoplayback.m4a")
    for(let i = 0; i<=multiplierNumber; i++){
        const result = multiplicandNumber * i
        const rowTemplate = `<div class="resultRows">
                            <div class="operation">${multiplicandNumber} X ${multiplierNumber}</div>
                            <div class="result">= ${result}</div>
                            </div>`
        const conversor = new DOMParser()
        const HTMLTemplate = conversor.parseFromString(rowTemplate, "text/html")
        const row = HTMLTemplate.querySelector(".resultRows")
        resultContainer.appendChild(row)
    }
    audio.play()
}


//Eventos
multiplicationForm.addEventListener("submit",(event)=>{

    event.preventDefault()
    const multiplicandNumber = +multiplicand.value
    const multiplierNumber = +multiplier.value

    if(!multiplicandNumber || !multiplierNumber){
        return
    }
    resultTable(multiplicandNumber, multiplierNumber)
}
)



// Animações e viadagens adicionais