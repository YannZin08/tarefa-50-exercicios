function converterParaMaiusculo(){
    let texto = "abacate";
    let textoMaiusculo = texto.toUpperCase();

    alert(`texto original: ${texto}\nTexto maisuculo: ${textomaiusculo}`);
}
function converterParaMinusculo(){
    let texto = "abacate";
    let textoMinusculo = texto.toLowerCase();

    alert(`Texto original: ${texto}\nTexto minusculo: ${textoMinusculo}`);
}
function removeEspacosFinal() {
    let texto = "Um fase bem legal "
    let textoSemEspacosFinal = texto.trimEnd();

    alert(`Texto original: `${texto}`
        Texto sem espaçoes no final: ' ${textoSemEspacosFinal}'`);
}

function removerEspacosComecoFinal() {
    let texto = " Uma frase bem legal "
    //let texto sem EspacosComecoFinal = texto.trimStar().trimEnd();
    let textoSemEspacosComecoFinal = texto.trim();

    alert(`Texto original: '${texto}'
texto sem espaços no começo e no final: '${textoSemEspacosComecoFinal}'` );
}

function substituir(){
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

function substring(){
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
    alert (`Horario Usa: ${horarioAmericano}
    horario Brasil: ${horarioBrasil}`);
}
function exemploLenght() {
    let texto = "Vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;

    alert(`Texto ${texto}`)
 }
function comecaCom() { }
function terminaCom() { }
function contem() { }
function indiceDoCaracter() { }
function quebrarString() { }
function padStar() { }
function padEnd() { }
