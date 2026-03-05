function study1() {
    let smartphones = [];
    let lista = "";

    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome do smartphone:");
        smartphones.push(nome);
    }

    for (let i = 0; i < smartphones.length; i++) {
        lista += smartphones[i] + "\n";
    }

    alert("Smartphones digitados:\n" + lista);
}

function study2() {
  // 1. Criar as listas vazias para nomes e quantidades.
  let smartphones = [];
  let quantidadeEstoque = [];
  
  // 2. Criar uma string vazia para construir a mensagem do alert.
  let mensagemFinal = "";

  // 3. Laço 'for' para solicitar o nome e a quantidade 5 vezes.
  for (let i = 0; i < 5; i++) {
    // Solicita o nome do produto.
    let nome = prompt(`Digite o nome do ${i + 1}º smartphone:`);
    
    // Solicita a quantidade, já usando o nome do produto na pergunta.
    let quantidade = prompt(`Digite a quantidade em estoque de ${nome}:`);

    // Adiciona as informações coletadas às suas respectivas listas.
    smartphones.push(nome);
    // É uma boa prática converter a quantidade para número, mesmo que o alert mostre como texto.
    // Isso será útil nos próximos exercícios.
    quantidadeEstoque.push(parseInt(quantidade)); 
  }

  // 4. Segundo laço 'for' para montar a string de apresentação.
  for (let i = 0; i < smartphones.length; i++) {
    // Para cada produto, adicionamos uma linha formatada à nossa string.
    // O `\n` cria a quebra de linha.
    mensagemFinal += `Produto: ${smartphones[i]} | Estoque: ${quantidadeEstoque[i]}\n`;
  }

  // 5. Apresenta o resultado final em um único alert.
  alert("--- Estoque de Smartphones ---\n\n" + mensagemFinal);
}

// Para executar a função, chame-a:
exercicio02_com_alert();