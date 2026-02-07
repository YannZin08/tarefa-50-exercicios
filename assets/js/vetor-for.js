// Incrementar 
// i = i + 1; // i = (atual) + 1;
// i += 1; // i = (atual) + 1;
// i++; // i = (atual) + 1

// Decrementar
// i = i - 1;
// i -= 1;
// i--;


function exemploJogos() {
    let jogos = [];

    // for(let i = 0; i < 5; i = i + 1){
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = prompt("Digite o nome do jogo");

        jogos.push(nomeJogo);
    }

    // Apresentar os jogos
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoParaApresentar = textoParaApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoParaApresentar);
}


function calculardora() {
    let numeros = [];

    // Solicitar os números
    for (let i = 0; i < 4; i += 1) {
        let numero = parseInt(prompt('Digite o número'));

        // Armazenar no vetor
        numeros.push(numero);
    }

    // Somar os números
    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual: " + somaManual);

    let soma = 0;
    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i];
        soma = soma + numero;
    }

    alert("Soma: " + soma);
}

function calcularFolhasPagamento() {
    let colaboradores = ["Lorenzo", "Augusto", "Judity", "Narutinho"];
    let horasTrabalhadas = [320, 80, 220, 50];
    let valoresPorHora = [65, 15, 15, 700];
    let descontos = [1000, 200, 250, 1000];
    let auxilios = [1300, 150, 8, 5000];

    // let colaboradores = [];
    // let horasTrabalhadas = [];
    // let valoresPorHora = [];
    // let descontos = [];
    // let auxilios = [];
    let salariosBrutos = [];
    let salarioLiquidos = [];

    let quantidadeColaboradores = parseInt(
        prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento"));

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("Digite o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
        let valorPagoPorHora = parseFloat(prompt("Digite o valor pago por hora"));

        let temDescontos = confirm("Tem descontos?");
        let valorDescontos = 0;
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto"));
        }

        let temAuxilios = confirm("Tem auxílios?");
        let valorAuxilios = 0;
        if (temAuxilios === true) {
            valorAuxilios = parseFloat(prompt("Digite o valor do auxílio"));
        }

        colaboradores.push(nomeColaborador);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        valoresPorHora.push(valorPagoPorHora);
        descontos.push(valorDescontos);
        auxilios.push(valorAuxilios);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoPorHora = valoresPorHora[i];

        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoPorHora;
        salariosBrutos.push(salarioBruto);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioLiquido = salariosBrutos[i] - descontos[i] + auxilios[i];
        salarioLiquidos.push(salarioLiquido);
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const nome = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const bruto = salariosBrutos[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const liquido = salarioLiquidos[i];

        alert(
            "🧾 Folha de Pagamento\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 Colaborador: " + nome + "\n" +
            "⏱️ Horas trabalhadas: " + horas + "\n" +
            "💰 Valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
            "🟢 Salário bruto: R$ " + bruto.toFixed(2) + "\n" +
            "🔻 Descontos: R$ " + desconto.toFixed(2) + "\n" +
            "🎁 Auxílios: R$ " + auxilio.toFixed(2) + "\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "✅ Salário líquido: R$ " + liquido.toFixed(2) + " 💵"
        );
    }
}

//        [0, 1, 2, 3]
// numeros = [1, 3, 4, 9]
// soma = 17
// i = 3
// numero = 9

function exemploCorTintas() {
    let tintas = [];

    // Solicitando o nome de 5 tinta
    for (let i = 0; i < 5; i = i + 1) {
        // Solicitando o nome da tinta
        let nomeTinta = prompt("Digite o nome da tinta");
        // Adicionando (Salvando) o nome da tinta no vetor
        tintas.push(nomeTinta);
    }

    let texto = "";
    for (let i = 0; i < 5; i = i + 1) {
        // texto = texto + tintas[i];
        texto += tintas[i] + "\n";
    }
    alert("Tintas:\n" + texto);
}
function alunos() {
    let alunos = [];

    for (let i = 0; i < 13; i = i + 1) {
        let nomeAluno = prompt("Digite o nome do aluno");
        // if(nomeAluno === "Lorenzo"){
        //      continue;
        // }

        alunos.push(nomeAluno);
    }

    alert("Qnd de Alunos: " + alunos.length);

    let resultado = "";

    for (let i = 0; i < 13; i = i + 1) {
        resultado += alunos[i] + "\n";
    }
    alert(resultado);

    //let menorNomeAluno = alunos[0];
    let menorNomeAluno = "apsldpaspdpwlapsdlwpalsdpwlapsldpwlaspdlwpdlasda";
    // percorrer a lista
    for (let i = 0; i < 13; i = i + 1) {
        // Pegar o nome do aluno
        let nomeAlunoPecorrido = alunos[i];
        // Verificar se o tamanho do nome do aluno é menor que o tamanho do menor nome de aluno
        if (nomeAlunoPercorrido.length < menorNomeAluno.length) {
            // Caso sim: atualizar o menorNomeAluno com o nome do aluno
            menorNomeAluno = nomeAlunoPercorrido;
        }
    }
    alert("Aluno com menor nome de aluno: " + menorNomeAluno);
}
// Ex 1: Criar uma função exercicio01, solicitando o nome dos smartphones
//    - Criar uma lista com o nome dos smartphones (vazia)
//    - Solicitar o nome de 5 smartphones (utilizar for) e armazenar em uma lista
//    - Apresentar o nome dos 5 smartphones

function exercicio01() {
    let smartphones = [];

    for (let i = 0; i < 5; i++) {
        let nomeSmartphones = prompt("Digite o nome do smartphone:");
        smartphones.push(nomeSmartphones);

    }
    let apresentarSmartphones = "";
    for (let i = 0; i < 5; i++) {
        apresentarSmartphones += smartphones[i] + "\n";
    }
    alert("Lista de smartphones:\n" + apresentarSmartphones)

}


//Ex 2: Conti. Ex 1: Adicionar uma lista de quantidadeEstoque (vazia)
//    - Modificar o for de solicitação do nome dos 5 smartphones para solicitar 
//    também a quantidade de estoque 
//    - Modificar a apresentação para apresentar a quantidade de estoque daquele produto
function exercicio02() {
    let smartphones = [];
    let quantidadeEstoque = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = prompt("Digite a quantidade que consta em estoque");

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarNomeQuantidadeSmartphones = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarNomeQuantidadeSmartphones += smartphones[i] + "- " + quantidadeEstoque[i] + "\n";
    }

    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarNomeQuantidadeSmartphones)

}

function exercicio03() {
    let smartphones = [];
    let quantidadeEstoque = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {

        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";
        }

        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + "\n";
    }

    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

}
//Ex 4: Conti. Ex 1: Apresentar a menor quantidade de estoque (quero saber somente a menor quantidade, 
//    não quero saber qual o produto que tem a menor quantidade de estoque)
function exercicio04() {
    let smartphones = [];
    let quantidadeEstoque = [];

    for (let i = 0; i < 5; i++) {
        let nomeSmartphones = prompt("Digite o nome do smartphone " + (i + 1));
        let quantidade = parseInt(prompt("Digite a quantidade em estoque"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidade);
    }

    let menorQuantidade = quantidadeEstoque[0];

    for (let i = 1; i < 5; i++) {
        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];
        }
    }
    alert("A menor quantidade encontrada no estoque foi: " + menorQuantidade);
}

//Ex 5: Conti. Ex 2: Apresentar o nome do produto que tem o maior estoque
function exercicio05() {
    let smartphones = [];
    let quantidadeEstoque = [];
    let menorQuantidade = 9999999;
    let maiorQuantidade = 0;
    let nomeMaiorQuantidade = "";


    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {

        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";

        }

        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];

        }

        if (quantidadeEstoque[i] > maiorQuantidade) {
            maiorQuantidade = quantidadeEstoque[i];
            nomeMaiorQuantidade = smartphones[i];
        }

        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + "\n";
    }


    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

    alert(`A menor quantidade em estoque é: ${menorQuantidade}
A maior quantidade em estoque é: ${maiorQuantidade} do produto ${nomeMaiorQuantidade}`)
}
//Ex 6: Adicionar uma lista de precosUnitarios
//    - Modificar o for de solicitação de nome e quantidade de estoque para solicitar também o preço unitário
//    - Modificar a apresentação para incluir o preço unitário */
function exercicio06() {
    let smartphones = [];
    let quantidadeEstoque = [];
    let preco = [];
    let menorQuantidade = 9999999;
    let maiorQuantidade = 0;
    let nomeMaiorQuantidade = "";


    for (let i = 0; i < 5; i += 1) {
        let nomeSmartphones = prompt("Digite o nome de 5 smartphones");
        let quantidadeEstoqueSmartphones = parseInt(prompt("Digite a quantidade que consta em estoque"));
        let smartphonesPreco = parseFloat(prompt("Digite o valor do smartphone"));

        smartphones.push(nomeSmartphones);
        quantidadeEstoque.push(quantidadeEstoqueSmartphones);
        preco.push(smartphonesPreco);
    }

    let apresentarSmartphones = "";
    let status = "";

    for (let i = 0; i < 5; i += 1) {

        if (quantidadeEstoque[i] <= 1) {
            status = "Urgente";

        } else if (quantidadeEstoque[i] <= 4 && quantidadeEstoque[i] >= 2) {
            status = "Preocupante";

        } else if (quantidadeEstoque[i] <= 7 && quantidadeEstoque[i] > 4) {
            status = "Estável";

        } else {
            status = "Elevado";

        }

        if (quantidadeEstoque[i] < menorQuantidade) {
            menorQuantidade = quantidadeEstoque[i];

        }

        if (quantidadeEstoque[i] > maiorQuantidade) {
            maiorQuantidade = quantidadeEstoque[i];
            nomeMaiorQuantidade = smartphones[i];
        }

        apresentarSmartphones += smartphones[i] + " - Quant: " + quantidadeEstoque[i] + " - Status: " + status + " - Preço: " + preco[i] + "\n";
    }


    alert("Os 5 Smartphones que foram digitados e a quantidade em estoque:\n" + apresentarSmartphones)

    alert(`A menor quantidade em estoque é: ${menorQuantidade}
A maior quantidade em estoque é: ${maiorQuantidade} do produto ${nomeMaiorQuantidade}`)
}

// Ex 2: Criar a função exercicio01() para cadastrar nomes de produtos
// Criar uma lista produtos (vazia)
// Solicitar 5 nomes de produtos (usar for) e armazenar na lista
// Apresentar a lista com os 5 produtos cadastrados (um por linha)
function exercicio07() {

    let produtos = [];
    let categoria = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeProdutos = prompt("Digite o nome de 5 produtos");

        produtos.push(nomeProdutos);

    }

    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto = produtos[i] + "\n";

    }
    alert("Produtos:\n ${apresentarProduto}");
}

// Ex 2: Criar a função exercicio01() para cadastrar nomes de produtos
// Criar uma lista produtos (vazia)
// Solicitar 5 nomes de produtos (usar for) e armazenar na lista
// Apresentar a lista com os 5 produtos cadastrados (um por linha)
function exercicio07() {

    let produtos = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeProdutos = prompt("Digite o nome de 5 produtos");

        produtos.push(nomeProdutos);

    }

    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto = produtos[i] + "\n";

    }
    alert("Produtos:\n ${apresentarProduto}");

}

// Ex 2.1: Continuar Ex 1 adicionando a lista de categorias
// Criar a lista categorias (vazia)
// Modificar o for para, além do nome do produto, solicitar também a categoria
// Apresentar:
// Produto: <nome> | Categoria: <categoria></categoria>
function exercicio08() {

    let produtos = [];
    let categoria = [];


    for (let i = 0; i < 5; i += 1) {
        let nomeProdutos = prompt("Digite o nome de 5 produtos");
        let nomeCategoria = prompt("Digite a categoria desse produto");


        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);

    }

    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " - Categoria: " + categoria[i] + "\n";
    }
    alert("Produtos:\n ${apresentarProduto}");
}

// Ex 2.2: Continuar Ex 2 adicionando a lista de precos
// Criar a lista precos (vazia)
// Modificar o for para solicitar também o preço (número decimal)
// Apresentar:
// Produto: <nome> | Categoria: <categoria> | Preço: R$ <preco>

function exercicio09() {

    let produtos = [];
    let categoria = [];
    let preco = [];

    for (let i = 0; i < 5; i += 1) {

        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));


        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);

    }

    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " - Categoria: " + categoria[i] + " - Preço: " + preco[i] + "\n";
    }
    alert("Produtos:\n ${apresentarProduto}");


}


// Ex 2.3: Continuar Ex 2.2 criando uma classificação por faixa de preço
// De acordo com o preço, mostrar uma classificação:
// Caro: preço >= 100
// Médio: preço >= 50 e < 100
// Barato: preço >= 20 e < 50
// Muito barato: preço < 20
// Apresentar cada produto com sua classificação:
// Produto: <nome> | Preço: R$ <preco> | Classificação: <classificacao>

function exercicio10() {

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for (let i = 0; i < 5; i += 1) {

        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    for (let i = 0; i < 5; i += 1) {

        if (preco[i] < 20) {
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50) {
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100) {
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");
        }
    }
    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert("Produtos: \n ${ apresentarProduto}");

}

// Ex 2.4: Continuar Ex 2.2 exibindo o maior preço (somente o valor)
// Mostrar apenas o valor do maior preço cadastrado
// (não precisa mostrar qual produto é)
function exercicio11() {

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for (let i = 0; i < 5; i += 1) {

        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let maiorValor = 0;

    for (let i = 0; i < 5; i += 1) {

        if (preco[i] < 20) {
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50) {
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100) {
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");
        }

        if (preco[i] > maiorValor) {
            maiorValor = preco[i];

        }
    }
    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert(apresentarProduto);
    alert(apresentarProduto);
    alert("O produto com maior preço é: ${maiorValor}");
}


// Ex 2.5: Continuar Ex 2.2 exibindo o nome do produto mais barato
// Encontrar o menor preço
// Apresentar o nome do produto que possui o menor preço
function exercicio12() {

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];

    for (let i = 0; i < 5; i += 1) {

        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));

        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let menorValor = 999999;
    let maiorValor = 0;
    let produtoMenorValor = "";

    for (let i = 0; i < 5; i += 1) {

        if (preco[i] < 20) {
            classificacaoPreco.push("Muito Barato");

        } else if (preco[i] < 50) {
            classificacaoPreco.push("Barato");

        } else if (preco[i] < 100) {
            classificacaoPreco.push("Médio");

        } else {
            classificacaoPreco.push("Caro");
        }

        if (preco[i] > maiorValor) {
            maiorValor = preco[i];

        }

        if (preco[i] < menorValor) {
            menorValor = preco[i];
            produtoMenorValor = produtos[i]
        }
    }
    let apresentarProduto = "";

    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " | Categoria: " + categoria[i] + " | Preço: " + preco[i] + " | Classificação: " + classificacaoPreco[i] + "\n";
    }
    alert(apresentarProduto);
    alert(`O produto com maior preço é: ${maiorValor}
O produto ${produtoMenorValor} tem o valor de ${menorValor} sendo o produto mais barato`);

}


// Ex 2.6: Continuar Ex 2.2 criando a lista de descontos
// Criar a lista descontos (vazia)
// Modificar o for para solicitar também o desconto (%)
// Calcular e apresentar o preço final:
// precoFinal = preco - (preco * desconto/100)
// Apresentar:
// Produto: <nome> | Preço: R$ <preco> | Desc: <desconto>% | Final: R$ <precoFinal></precoFinal>
function exercicio13() {

    let produtos = [];
    let categoria = [];
    let preco = [];
    let classificacaoPreco = [];
    let desconto = [];
    let precoFinal = [];

    for (let i = 0; i < 5; i += 1) {

        let nomeProdutos = prompt("Digite o nome do produto");
        let nomeCategoria = prompt("Digite a categoria desse produto");
        let precoProduto = parseFloat(prompt("Informe o preço do produto"));
        let confirmDesconto = confirm("Tem desconto?");
        let valorDesconto = 0;

        if (confirmDesconto == true) {
            valorDesconto = parseInt(prompt("Digite o valor do desconto"));
        }

        desconto.push(valorDesconto);
        produtos.push(nomeProdutos);
        categoria.push(nomeCategoria);
        preco.push(precoProduto);
    }

    let menorValor = 999999;
    let maiorValor = 0;
    let produtoMenorValor = "";

    for (let i = 0; i < 5; i += 1) {

        if (preco[i] < 20) {
            classificacaoPreco.push("Muito Barato");
        } else if (preco[i] < 50) {
            classificacaoPreco.push("Barato");
        } else if (preco[i] < 100) {
            classificacaoPreco.push("Médio");
        } else {
            classificacaoPreco.push("Caro");
        }

        if (preco[i] > maiorValor) {
            maiorValor = preco[i];
        }

        if (preco[i] < menorValor) {
            menorValor = preco[i];
            produtoMenorValor = produtos[i];
        }

        let valorFinal = preco[i] - (preco[i] * desconto[i] / 100);
        precoFinal.push(valorFinal);
    }
    let apresentarProduto = "";



    for (let i = 0; i < 5; i += 1) {
        apresentarProduto += "Produto: " + produtos[i] + " | Preço: " + preco[i] + " | Desconto: " + desconto[i] + " | Preço Final: " + precoFinal[i] + "\n";
    }
    alert(apresentarProduto);
}