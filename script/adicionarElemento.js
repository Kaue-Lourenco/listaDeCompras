import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import mensagemListaVazia from "./mensagemListaVazia.js";

const inputItem = document.getElementById('input-item');

export function adicionarItem() {
    if (inputItem.value == '') {
        alert('escreva o item que você quer adicionar a lista')
        return
    }
    mensagemListaVazia("mercado_texto_lista_vazia")
    const lista = document.getElementById('lista-de-compras-mercado')
    const novaLi = document.createElement('li');
    const novaDiv = document.createElement('div');
    novaDiv.className = 'lista-item-container';
    const novoInput = document.createElement('input');
    novoInput.type = 'checkbox';
    const novoP = document.createElement('p');
    novoP.textContent = inputItem.value;
    const novoP2 = document.createElement('p')
    novoP2.className = 'texto-data'

    novoP2.textContent = gerarDiaDaSemana()

    novoInput.addEventListener('click', function() {
        if (novoInput.checked) {
            novoP.style.textDecoration = 'line-through'
        } else {
            novoP.style.textDecoration = 'none'
        }
    })

    lista.appendChild(novaLi);
    novaLi.appendChild(novaDiv);
    novaDiv.appendChild(novoInput);
    novaDiv.appendChild(novoP);
    novaLi.appendChild(novoP2);

    inputItem.value = ""
}