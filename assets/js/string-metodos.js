function converterParaMaiusculo() {
    let texto = "abacate";
    let textoMaiusculo = texto.toUpperCase();

    alert(`texto original: ${texto}\nTexto maisuculo: ${textomaiusculo}`);
}
function converterParaMinusculo() {
    let texto = "abacate";
    let textoMinusculo = texto.toLowerCase();

    alert(`Texto original: ${texto}\nTexto minusculo: ${textoMinusculo}`);
}
function removeEspacosFinal() {
    let texto = "Um fase bem legal "
    let textoSemEspacosFinal = texto.trimEnd();

    alert(`Texto original: `${ texto }`
        Texto sem espaçoes no final: ' ${textoSemEspacosFinal}'`);
}

function removerEspacosComecoFinal() {
    let texto = " Uma frase bem legal "
    //let texto sem EspacosComecoFinal = texto.trimStar().trimEnd();
    let textoSemEspacosComecoFinal = texto.trim();

    alert(`Texto original: '${texto}'
texto sem espaços no começo e no final: '${textoSemEspacosComecoFinal}'`);
}

function substituir() {
    let texto = "Lorezzo faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo");

    alert(`Textp original: '${texto}'
    Texto substituido: '${novoTexto}'`);
}

function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";

    let valorStringNovo = valorString.replace("R$", "").replaceAll("." "").replace(",", ".");

    let valor = parseFloat(valorStringNovo);

    alert("Valor convertido: " + valor + "\nValor dobrado: " + valor * 2)
}

function substring() {
    // 31/01/2026
    // dia
    // mes
    // ano
    //        0123456789
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    // apresentar assim
    // Blumenau, <dia> de <Mes> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${mes} de ${ano}`);
}

function substringHorario() {
    //                      01234567
    // let horarioAmericano = "08:30 pm";
    let horarioAmericano = prompt("Digite o horario no formato Americano");

    let hora = parseInt(horarioAmericano.substring(0, 2)); // 08
    let minuto = parseInt(horarioAmericano.substring(3, 5)); // 30
    let periodo = horarioAmericano.substring(6, 8); // pm

    let horaBrasil = 0;

    if (periodo === "am") {

        horaBrasil = hora;
    } else {
        // Pos almoço
        horaBrasil = hora + 12;
    }

    let horarioBrasil = `${horaBrasil}:${minuto}`
    alert(`Horario Usa: ${horarioAmericano}
    horario Brasil: ${horarioBrasil}`);
}

function exemploLenght() {
    let texto = "Vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;

    alert(`Texto ${texto}
    Quantidade de caracteres: ${quantidadeCaracteres}`);
}

function comecaCom() {
    let nomeEmpresa = "Blusoft";

    let empresaBlumenau = false;
    if (nomeEmpresa.toLowerCase().startsWith("blu") === true) {
        empresaBlumenau = true;
    }

    alert(`Empresa de Blumenau: ${empresaBlumenau}
nome da empresa: ${nomeEmpresa}`);
}

function terminaCom() {
    let nomeCompleto = "Ana da Silva Souza";

    if (nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SOUZA")) {
        alert("Sobrenome comum")
    } else {
        alert("Nã é um sobrenome comum")
    }
 }

function contem() {
    let refeicao = "Pure de feijao com frango";

    if (refeicao.toLowerCase().includes("feijao") || refeicao.toLowerCase().includes("feijao")) {
        alert("Tipicamente do BRasil");
    } else {
        alert("Outra comida");
    }
 }

function indiceDoCaracter() { 
    let hora = "23:49";
    // Retomar o indice do caractere encontrado, caso nao encontrar retorna -1
    let indiceDoisPontos = hora.indexOf("49");
    alert(`Hora ${hora}
        Indice do ':' ${indiceDoisPontos}`);
}

function quebrarString() {
    let data = "31/01/2026";
    let partes = data.split("/"); // => ["31", "01", "2026"]
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes [2];
    // Apresentar assim
    // Blumenau, <dia> de <mes> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
 }

function quebraStringDataHora() {
    let dataHora = "31/01/2026 23:49:10";
    let parteDataHora = dataHora.split(" "); // => ["31/01/2026", "23:49:20"]
    let partesData = parteDataHora[0].split("/"); // "31/01/2026" => ["31", "01", "2026"]
    let partesHora = parteDataHora{1}.split(:); // "23:49:10" ==> ["23", "49", "10"]
    let dia = partesData[0]; // 31
    let mes = partesData[1]; // 01
    let ano = partesData[2]; // 2026

    let hora = partesHora[0]; // 23
    let minuto = partesHora[1]; // 49
    let segundo = partesHora[2]; // 10
    // Apresentar assim
    // Blumenau, <dia> de <mes> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}
        Hora: ${hora} Minuto: ${minuto} Segundo: ${segundo}`);
 }

function padStart() {
    // Apresntar sempre 15 caracteres
    let numerocartao = "5230 9713 6338 5801";
    let ultimoNumeros = numeroCartao.substring(15, 19);
    alert(ultimosNumeros.padStar(16, "*"));
 }
 function padEnd() {
    // CSV Separando por caracteres
    // Matheus;25;5930.24
    // CSV Separando por largura fixa
    // Nome 30 caracteres idade 3 salario 10
    // Matheus
    // Ama da Silva Souza
    let nome ="Matheus";
    let idade = 25
    let salario = 5930.24;

    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");
    alert(`Linha do CSV: ' ${linha}'`)
 }
