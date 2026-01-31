// incrementar
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = (atual) + 1;
// i++; // i = (atual) + 1

// Decrementar
// i = i - 1;
// i -= 1;
// i--;

function exemploJogos() {
    let jogos = [];

    // for (let i = 0; i < 5; i = i + 1)
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("digite o nome do jogo");

        jogos.push(nomeJogo); 0
    }

    // Aprensentar os Jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = Jogos[i];
        textParaApresentar = textoParaApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoParaApresentar);

    function calculadora() {
        let numero = [];

        //solicitar os numeros
        for (let i = 0; i < 4; u += 1) {
            let numero = parseInt(prompt("Digite o numero"));

            // armazenar no vetor
            numeros.push(numero);
        }

        //somar os numeros
        let somaManual = numeros[0] + numeros[2] + numeros[3];
        alert("Soma manual: " + somaManual);

        let soma = 0
        for (let i = 0; i < 4; i += 1) {
            let numero = numeros[i];
            soma = soma + numero;
        }

        alert("Soma: " + soma);
    }
}

function calcularFolhasPagamentos() {
    let colaboradores = [];
    let horasTrabalhadas = [];
    let valoresPorHora = [];
    let descontos = [];
    let auxilios = [];

    let quantidadeColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let valorPagoPorJpra = parseFloat(prompt("Digite o valor pago por hora"));

        let temDescontos = confirm("Tem descontos?");
        let valorDescontos = 0;
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto"));
        }
        let temAuxilios = confirm("tem auxilios?");
        let valorAuxilios = 0;
        if (temAuxilios === true) {
            valorAuxilios = parseFloat(prompt("Digite o valor do auxilio"));
        }
        
        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoPorHora);
        descontos.push(valorDescontos);
        auxilios.push(valorAuxilios);
    }
}
