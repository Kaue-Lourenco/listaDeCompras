import { adicionarItem } from "./script/adicionarElemento.js";
const botaoAdicionarItem = document.getElementById('adicionar-item');

const inputItem = document.getElementById('input-item');
inputItem.value = 'Manu';
adicionarItem()

botaoAdicionarItem.addEventListener('click', (event) => {
    event.preventDefault()
    adicionarItem()
})

document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        event.preventDefault()
        adicionarItem()
    }
})


