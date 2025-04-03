function gerarDiaDaSemana() {
    const dataAtual = new Date();
    const data = dataAtual.toLocaleDateString('pt-BR');

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaSemana = diasDaSemana[dataAtual.getDay()];

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();

    return `${diaSemana} (${data}) ás ${horas}:${minutos}`;
}

export default gerarDiaDaSemana;