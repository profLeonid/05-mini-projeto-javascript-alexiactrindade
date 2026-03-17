'use strict'

function gerarTabuada() { 
    const x =  Number(document.getElementById('x').value)
    const resultado = document.getElementById('resultado')

    resultado.replaceChildren()

    for (let i = 1; i <= 10; i++) {
        const itemTabuada = document.createElement('tr')
        itemTabuada.textContent = `${x} x ${i} = ${x * i}`
        resultado.appendChild(itemTabuada)
    }
}