function exercicio01() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome do aluno:");
        alert("Aluno cadastrado: " + nome);
        indice++;
    }

    alert("Cadastro finalizado");
}

function exercicio02() {
    let indice = 0;

    while (indice < 4) {
        let cor = prompt("Digite uma cor:");
        alert("Cor escolhida: " + cor);
        indice++;
    }

    alert("Obrigado por informar suas cores favoritas");
}

function exercicio03() {
    let indice = 0;

    while (indice < 3) {
        let cidade = prompt("Digite o nome da cidade:");
        alert("Destino " + (indice + 1) + ": " + cidade);
        indice++;
    }

    alert("Planejamento de viagem concluído");
}

function exercicio04() {
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numero = prompt("Digite um número inteiro");
        numero = parseInt(numero);
        soma = soma + numero;
        indice++;
    }

    alert("Soma total: " + soma);
}
function exercicio05() {
    let indice = 0;

    while (indice < 3) {
        let filme = prompt("Digite o nome do filme:");
        let ano = prompt("Digite o ano de lançamento:");
        alert("Filme: " + filme + " - Ano: " + ano);
        indice++;
    }

    alert("Lista de filmes cadastrada com sucesso");
}
function exercicio06() {
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número:"));
        soma += numero;
        indice++;
    }

    let media = soma / 5;
    alert("Soma: " + soma + "\nMédia: " + media);
}
function exercicio07() {
    let indice = 0;
    let total = 0;

    while (indice < 6) {
        let venda = parseFloat(prompt("Digite o valor da venda:"));
        total += venda;
        indice++;
    }

    let comissao = total * 0.05;
    alert("Total das vendas: " + total + "\nComissão (5%): " + comissao);
}
function exercicio08() {
    let indice = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número:"));

        if (numero % 2 === 0) {
            alert(numero + " é PAR");
        } else {
            alert(numero + " é ÍMPAR");
        }

        indice++;
    }
}
function exercicio09() {
    let numero = parseInt(prompt("Digite um número:"));
    let contador = 1;

    while (contador <= 10) {
        alert(numero + " x " + contador + " = " + (numero * contador));
        contador++;
    }
}
function exercicio10() {
    let indice = 0;
    let pares = 0;
    let impares = 0;

    while (indice < 10) {
        let numero = parseInt(prompt("Digite um número:"));

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        indice++;
    }

    alert("Pares: " + pares + "\nÍmpares: " + impares);
}
