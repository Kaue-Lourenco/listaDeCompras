import { adicionarItem } from "./script/adicionarElemento.js";
const botaoAdicionarItem = document.getElementById('adicionar-item');



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