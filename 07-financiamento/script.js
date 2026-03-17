'use strict'

function simularFinanciamento() { 
    const valorTotal = Number(document.getElementById('valorTotal').value)
    const taxaJuros = Number(document.getElementById('taxaJuros').value) / 100
    const numeroParcelas = Number(document.getElementById('numeroParcelas').value)
    const valorParcela = Number(document.getElementById('valorParcela').value)
    const resultado = document.getElementById('resultado')

    let saldoDevedor = valorTotal

    resultado.replaceChildren()

    for (let i = 1; i <= numeroParcelas; i++) { 
        const jurosMes = saldoDevedor * taxaJuros
        const totalMes = valorParcela + jurosMes
        saldoDevedor = saldoDevedor + jurosMes - valorParcela

        const tr = document.createElement('tr')

        const tdMes = document.createElement('td')
        tdMes.textContent = i

        const tdJuros = document.createElement('td')
        tdJuros.textContent = jurosMes.toFixed(2)

        const tdParcela = document.createElement('td')
        tdParcela.textContent = valorParcela.toFixed(2)

        const tdTotal = document.createElement('td')
        tdTotal.textContent = totalMes.toFixed(2)

        const tdSaldo = document.createElement('td')
        tdSaldo.textContent = saldoDevedor.toFixed(2)

        tr.append(tdMes, tdJuros, tdParcela, tdTotal, tdSaldo)
        resultado.appendChild(tr)
    }
} 
 

