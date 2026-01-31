// var => Variável global, ou seja, existe em todos os arquivos (inseguro)
// let => Variável que possui escopo, ou seja, existe dentro do if, while, function...
// const => Variavel que nao permite alteração, ou seja uma vez que foi definido o valor nao é possivel alterar. Tem a mesma caractereistica do let em relação ao escopo, existe dentro do if, while function, fora de existir (ela morre).

// criando vetor
let frutas = [];
// adicionado itens no vetor
frutas.push("maca");
frutas,push("pera");
frutas.push("Totamte");
frutas.push("Rucula");

// Alternado valor no vetor
frutas[2] = "Tomate";

// Remover 'Rucula' da lista de frutas, pq n é fruta
frutas.splice(3, 1); // 3 é a posição da Rucula

// Exibe no console a quantidade de elementos do vetor frutas
console.log ("Tamanho do vetor: " + frutas.length);

// Acessando uma posição especifica do vetor, ou seja,
// acessando o valor armazenado naquela posição
console.log("Fruta 1: " + frutas[0]);
console.log("Fruta 2: " + frutas[1]);
console.log("Fruta 3 " + frutas[2]);


// jogos
function exercicio01() {
    let jogos = [];

    jogos.push("Tibia");
    jogos.push("Battlefield 4");
    jogos.push("League of Legends");
    jogos.push("GTA 6");
    jogos.push("Metal of honor");
    
    console.log("Tamanho do vetor: " + jogos.length);

    jogos.splice(2, 1);

    jogos[3] = "Gta VI";

    console.log("jogo 1: " + jogos[0]);
    console.log("jogo 2: " + jogos[1]);
    console.log("jogo 3: " + jogos[2]);
    console.log("jogo 4: " + jogos[3]);
}

function exercicio02() {
    let pratos = [];

    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");

    console.log("Tamanho do vetor: " + pratos.length);

    pratos.splice(2, 1)
    pratos.push("Risoto");
    pratos.push("Sopa");
    console.log("Tamanho do vetor: " + pratos.length);

    pratos[1] = "panqueca de carne";
    console.log("Tamanho do vetor " + pratos.length);

    console.log("prato 1: " + pratos[0]);
    console.log("prato 2: " + pratos[1]);
    console.log("prato 3: " + pratos[2]);
    console.log("prato 4: " + pratos[3]);
    console.log("prato 5: " + pratos[4]);
}