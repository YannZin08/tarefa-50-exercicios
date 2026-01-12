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
function exercicio11 () {
    let indice = 0;
    let soma = 0;

    while (indice < 4) {
        let nota= parseFloat(prompt("Digite a nota:"));
        soma += nota;
        indice++;
    }
    let media = soma / 4;
    if (media >=7) {
        alert("Média: " + media + "\nAprovado");
    } else {
        alert ("Media: " + media + "\nReprovado");
    }
}
function exercicio12() {
    let indice = 0;
    let total = 0;

    while (indice < 5) {
        let valor = parseFloat(prompt("Digite o valor do produto:"));
        total += valor;
        indice++;
    }

    let final = total;
    if (total > 200) {
        final = total * 0.9;
    }

    alert("Total sem desconto: " + total + "\nTotal com desconto: " + final);
}
function exercicio13() {
    let indice = 0;
    let soma = 0;

    while (indice < 6) {
        let idade = parseInt(prompt("Digite a idade: "));
        soma += idade;
        indice++;
    }
    let media = soma / 6;
    if (media >= 18) {
        alert("Media: " + media + "\nMaior de idade");
    } else {
        alert("Média: " + media + "\nMenor de idade");
    }
}
function exercicio14() {
    let indice = 0;
    let soma = 0;
    let maior = 0;
    let menor = Infinity;

    while (indice < 5) {
        let salario = parseFloat(prompt("Digite o salário:"));
        soma += salario;

        if (salario > maior) maior = salario;
        if (salario < menor) menor = salario;

        indice++;
    }

    let media = soma / 5;
    let mensagem = media > 3000 ? "Salarios acima da media" : "Salario dentro da media";
    alert("Maior: " + maior + "\nMenor: " + menor + "\nMedia: " + media + "\n" + mensagem);
}
function exercicio15() {
    let indice = 0;
    let total = 0;

    while (indice < 4) {
        let conta = parseFloat(prompt("Digite o valor da conta:"));
        total += conta;
        indice++;
    }

    let renda = parseFloat(prompt("Digite sua renda mensal:"));
    let percentual = (total / renda) * 100;

    let mensagem = percentual > 50 ? "Orçamento comprometido" : "Orçamento saudável";

    alert("Total das contas: " + total + "\nPercentual da renda: " + percentual.toFixed(2) + "%\n" + mensagem);
}