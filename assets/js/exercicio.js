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
function exercicio16() {
    let indice = 0;
    let maior = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Digite a altura:"));
        if (altura > maior) maior = altura;
        indice++;
    }

    alert("Maior altura: " + maior);
}
function exercicio17() {
    let indice = 0;
    let menor = Infinity;

    while (indice < 4) {
        let peso = parseFloat(prompt("Digite o peso:"));
        if (peso < menor) menor = peso;
        indice++;
    }

    alert("Menor peso: " + menor);
}
function exercicio18() {
    let indice = 0;
    let maiorIdade = 0;
    let nomeMaisVelho = "";

    while (indice < 5) {
        let nome = prompt("Digite o nome:");
        let idade = parseInt(prompt("Digite a idade:"));

        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaisVelho = nome;
        }

        indice++;
    }

    alert("Pessoa mais velha: " + nomeMaisVelho + " - " + maiorIdade + " anos");
}
function exercicio19() {
    let indice = 0;
    let maior = 0;
    let menor = Infinity;

    while (indice < 6) {
        let preco = parseFloat(prompt("Digite o preço:"));

        if (preco > maior) maior = preco;
        if (preco < menor) menor = preco;

        indice++;
    }

    alert("Maior preço: " + maior + "\nMenor preço: " + menor);
}
function exercicio20() {
    let indice = 0;
    let maiorSalario = 0;
    let nomeMaior = "";

    while (indice < 4) {
        let nome = prompt("Digite o nome do colaborador:");
        let salario = parseFloat(prompt("Digite o salário:"));

        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaior = nome;
        }

        indice++;
    }

    alert("Maior salário: " + nomeMaior + " - R$ " + maiorSalario);
}
function exercicio21() {
    let indice = 0;
    let maior = -Infinity;
    let menor = Infinity;

    while (indice < 7) {
        let temp = parseFloat(prompt("Digite a temperatura do dia:"));

        if (temp > maior) maior = temp;
        if (temp < menor) menor = temp;

        indice++;
    }

    alert("Maior temperatura: " + maior + "\nMenor temperatura: " + menor);
}
function exercicio22() {
    let indice = 0;
    let menorPreco = Infinity;
    let nomeMenor = "";

    while (indice < 5) {
        let nome = prompt("Digite o nome do produto:");
        let preco = parseFloat(prompt("Digite o preço:"));

        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenor = nome;
        }

        indice++;
    }

    alert("Produto mais barato: " + nomeMenor + " - R$ " + menorPreco);
}
function exercicio23() {
    let indice = 0;
    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;
    let idosos = 0;

    while (indice < 8) {
        let idade = parseInt(prompt("Digite a idade:"));

        if (idade < 12) criancas++;
        else if (idade < 18) adolescentes++;
        else if (idade < 60) adultos++;
        else idosos++;

        indice++;
    }

    alert(
        "Crianças: " + criancas +
        "\nAdolescentes: " + adolescentes +
        "\nAdultos: " + adultos +
        "\nIdosos: " + idosos
    );
}
function exercicio24() {
    let indice = 0;
    let reprovados = 0;
    let recuperacao = 0;
    let aprovados = 0;

    while (indice < 10) {
        let nota = parseFloat(prompt("Digite a nota do aluno:"));

        if (nota < 5) reprovados++;
        else if (nota < 7) recuperacao++;
        else aprovados++;

        indice++;
    }

    alert(
        "Reprovados: " + reprovados +
        "\nRecuperação: " + recuperacao +
        "\nAprovados: " + aprovados
    );
}
function exercicio25() {
    let indice = 0;
    let ate2000 = 0;
    let entre2001e5000 = 0;
    let acima5000 = 0;

    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salário:"));

        if (salario <= 2000) ate2000++;
        else if (salario <= 5000) entre2001e5000++;
        else acima5000++;

        indice++;
    }

    alert(
        "Até 2000: " + ate2000 +
        "\nDe 2001 a 5000: " + entre2001e5000 +
        "\nAcima de 5000: " + acima5000
    );
}
function exercicio26() {
    let indice = 0;
    let frios = 0;
    let agradaveis = 0;
    let quentes = 0;

    while (indice < 6) {
        let temp = parseFloat(prompt("Digite a temperatura do dia:"));

        if (temp < 15) frios++;
        else if (temp <= 25) agradaveis++;
        else quentes++;

        indice++;
    }

    alert(
        "Dias frios: " + frios +
        "\nDias agradáveis: " + agradaveis +
        "\nDias quentes: " + quentes
    );
}
function exercicio27() {
    let indice = 0;
    let ruim = 0;
    let regular = 0;
    let bom = 0;

    while (indice < 10) {
        let avaliacao = parseInt(prompt("Avaliação (1 a 5):"));

        if (avaliacao <= 2) ruim++;
        else if (avaliacao === 3) regular++;
        else bom++;

        indice++;
    }

    alert(
        "Ruim: " + ruim +
        "\nRegular: " + regular +
        "\nBom: " + bom
    );
}
function exercicio28() {
    let indice = 0;
    let negativos = 0;
    let zeros = 0;
    let positivos = 0;

    while (indice < 8) {
        let numero = parseInt(prompt("Digite um número:"));

        if (numero < 0) negativos++;
        else if (numero === 0) zeros++;
        else positivos++;

        indice++;
    }

    alert(
        "Negativos: " + negativos +
        "\nZeros: " + zeros +
        "\nPositivos: " + positivos
    );
}
function exercicio29() {
    let indice = 0;
    let leves = 0;
    let medias = 0;
    let pesadas = 0;

    while (indice < 5) {
        let peso = parseFloat(prompt("Digite o peso da encomenda (kg):"));

        if (peso < 2) leves++;
        else if (peso <= 10) medias++;
        else pesadas++;

        indice++;
    }

    alert(
        "Leves: " + leves +
        "\nMédias: " + medias +
        "\nPesadas: " + pesadas
    );
}
function exercicio30() {
    let quantidade = parseInt(prompt("Quantas pelúcias deseja cadastrar?"));
    let indice = 0;
    let mickey = 0;
    let minnie = 0;
    let donald = 0;

    while (indice < quantidade) {
        let personagem = prompt("Digite o personagem (MICKEY / MINNIE / DONALD):").toUpperCase();

        if (personagem === "MICKEY") mickey++;
        else if (personagem === "MINNIE") minnie++;
        else if (personagem === "DONALD") donald++;

        indice++;
    }

    alert(
        "Mickey: " + mickey +
        "\nMinnie: " + minnie +
        "\nDonald: " + donald
    );
}
function exercicio31() {
    let qtd = parseInt(prompt("Quantidade de clientes:"));
    let indice = 0;
    let credito = 0, debito = 0, dinheiro = 0;

    while (indice < qtd) {
        let forma = prompt("Forma de pagamento (CRÉDITO/DÉBITO/DINHEIRO):").toUpperCase();

        if (forma === "CRÉDITO") credito++;
        else if (forma === "DÉBITO") debito++;
        else if (forma === "DINHEIRO") dinheiro++;

        indice++;
    }

    alert("Crédito: " + credito + "\nDébito: " + debito + "\nDinheiro: " + dinheiro);
}
function exercicio32() {
    let qtd = parseInt(prompt("Quantidade de ingressos:"));
    let indice = 0;
    let inteira = 0, meia = 0, cortesia = 0;

    while (indice < qtd) {
        let tipo = prompt("Tipo (INTEIRA/MEIA/CORTESIA):").toUpperCase();

        if (tipo === "INTEIRA") inteira++;
        else if (tipo === "MEIA") meia++;
        else if (tipo === "CORTESIA") cortesia++;

        indice++;
    }

    alert("Inteira: " + inteira + "\nMeia: " + meia + "\nCortesia: " + cortesia);
}
function exercicio33() {
    let qtd = parseInt(prompt("Quantidade de lanches:"));
    let indice = 0;
    let hamburguer = 0, pizza = 0, hotdog = 0;

    while (indice < qtd) {
        let tipo = prompt("Lanche (HAMBURGUER/PIZZA/HOTDOG):").toUpperCase();

        if (tipo === "HAMBURGUER") hamburguer++;
        else if (tipo === "PIZZA") pizza++;
        else if (tipo === "HOTDOG") hotdog++;

        indice++;
    }

    alert("Hambúrguer: " + hamburguer + "\nPizza: " + pizza + "\nHotdog: " + hotdog);
}
function exercicio34() {
    let qtd = parseInt(prompt("Quantidade de livros:"));
    let indice = 0;
    let ficcao = 0, estudo = 0, infantil = 0;

    while (indice < qtd) {
        let categoria = prompt("Categoria (FICÇÃO/ESTUDO/INFANTIL):").toUpperCase();

        if (categoria === "FICÇÃO") ficcao++;
        else if (categoria === "ESTUDO") estudo++;
        else if (categoria === "INFANTIL") infantil++;

        indice++;
    }

    alert("Ficção: " + ficcao + "\nEstudo: " + estudo + "\nInfantil: " + infantil);
}
function exercicio35() {
    let contador = 0;
    let nome = "";

    while (nome !== "SAIR") {
        nome = prompt("Digite o nome do personagem (ou sair):").toUpperCase();

        if (nome !== "SAIR") {
            alert("Personagem cadastrado: " + nome);
            contador++;
        }
    }

    alert("Total de personagens cadastrados: " + contador);
}
function exercicio36() {
    let total = 0;
    let rpg = 0;
    let jogo = "";

    while (jogo !== "SAIR") {
        jogo = prompt("Digite o nome do jogo (ou sair):").toUpperCase();

        if (jogo !== "SAIR") {
            let genero = prompt("Digite o gênero do jogo:").toUpperCase();
            total++;
            if (genero === "RPG") rpg++;
        }
    }

    alert("Total de jogos: " + total + "\nJogos RPG: " + rpg);
}
function exercicio37() {
    let baixo = 0, medio = 0, alto = 0;
    let nome = "";

    while (nome !== "SAIR") {
        nome = prompt("Digite o nome do herói (ou sair):").toUpperCase();

        if (nome !== "SAIR") {
            let poder = prompt("Nível de poder (BAIXO/MEDIO/ALTO):").toUpperCase();

            if (poder === "BAIXO") baixo++;
            else if (poder === "MEDIO") medio++;
            else if (poder === "ALTO") alto++;
        }
    }

    alert("Baixo: " + baixo + "\nMédio: " + medio + "\nAlto: " + alto);
}
function exercicio38() {
    let total = 0;
    let soma = 0;
    let serie = "";

    while (serie !== "SAIR") {
        serie = prompt("Digite o nome da série (ou sair):").toUpperCase();

        if (serie !== "SAIR") {
            let nota = parseFloat(prompt("Digite a nota (0 a 10):"));
            soma += nota;
            total++;
        }
    }

    let media = total > 0 ? soma / total : 0;
    alert("Séries cadastradas: " + total + "\nMédia das notas: " + media);
}
function exercicio39() {
    let total = 0;
    let jogou = 0;
    let item = "";

    while (item !== "SAIR") {
        item = prompt("Digite o console/jogo (ou sair):").toUpperCase();

        if (item !== "SAIR") {
            let resposta = prompt("Você já jogou? (SIM/NÃO):").toUpperCase();
            total++;
            if (resposta === "SIM") jogou++;
        }
    }

    alert("Itens cadastrados: " + total + "\nJá jogou: " + jogou);
}
function exercicio40() {
    let distancia = parseFloat(prompt("Distância percorrida (km):"));
    let consumo = parseFloat(prompt("Consumo (litros):"));
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1- Consumo médio\n2- Custo da viagem\n3- Alterar distância\n4- Alterar consumo\n10- Sair"
        ));

        if (opcao === 1) {
            alert("Consumo médio: " + (distancia / consumo) + " km/l");
        } else if (opcao === 2) {
            let preco = parseFloat(prompt("Preço do litro:"));
            alert("Custo da viagem: " + (preco * consumo));
        } else if (opcao === 3) {
            distancia = parseFloat(prompt("Nova distância:"));
        } else if (opcao === 4) {
            consumo = parseFloat(prompt("Novo consumo:"));
        }
    }
}
function exercicio41() {
    let saldo = parseFloat(prompt("Saldo inicial:"));
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt("1- Depositar\n2- Sacar\n3- Saldo\n10- Sair"));

        if (opcao === 1) {
            saldo += parseFloat(prompt("Valor do depósito:"));
        } else if (opcao === 2) {
            let saque = parseFloat(prompt("Valor do saque:"));
            if (saque <= saldo) saldo -= saque;
            else alert("Saldo insuficiente");
        } else if (opcao === 3) {
            alert("Saldo: " + saldo);
        }
    }

    alert("Saldo final: " + saldo);
}
function exercicio42() {
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt("1- C para F\n2- F para C\n10- Sair"));

        if (opcao === 1) {
            let c = parseFloat(prompt("Celsius:"));
            alert("Fahrenheit: " + (c * 9/5 + 32));
        } else if (opcao === 2) {
            let f = parseFloat(prompt("Fahrenheit:"));
            alert("Celsius: " + ((f - 32) * 5/9));
        }
    }
}
function exercicio43() {
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt("1- Calcular IMC\n2- Instruções\n10- Sair"));

        if (opcao === 1) {
            let peso = parseFloat(prompt("Peso:"));
            let altura = parseFloat(prompt("Altura:"));
            alert("IMC: " + (peso / (altura * altura)));
        } else if (opcao === 2) {
            alert("IMC = peso / (altura²)");
        }
    }
}
function exercicio44() {
    let estoque = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt("1- Adicionar\n2- Remover\n3- Consultar\n10- Sair"));

        if (opcao === 1) {
            estoque += parseInt(prompt("Quantidade:"));
        } else if (opcao === 2) {
            let qtd = parseInt(prompt("Quantidade:"));
            if (qtd <= estoque) estoque -= qtd;
            else alert("Estoque insuficiente");
        } else if (opcao === 3) {
            alert("Estoque atual: " + estoque);
        }
    }

    alert("Estoque final: " + estoque);
}
function exercicio45() {
    let total = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "1- Hambúrguer (15)\n2- Pizza (25)\n3- Refrigerante (8)\n4- Ver total\n10- Finalizar"
        ));

        if (opcao === 1) total += 15;
        else if (opcao === 2) total += 25;
        else if (opcao === 3) total += 8;
        else if (opcao === 4) alert("Total parcial: " + total);
    }

    alert("Total do pedido: R$ " + total);
}
