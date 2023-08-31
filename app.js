const readline = require('readline');

// Cria a interação readline para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Armazenar as propriedades digitadas
const propriedades = [];

// Função para imprimir propriedades ordenadas
function nomesPropriedades(propriedades) {
    const propriedadesOrdenadas = propriedades.slice().sort();
    propriedadesOrdenadas.forEach(propriedade => {
        console.log(propriedade);
    });
}
// Função para obter a Entrada do Usuário
function obterEntrada(propriedades) {
    rl.question('Digite uma propriedade ou "SAIR" para encerrar: ', resposta => {
        if (resposta.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            propriedades.push(resposta);
            obterEntrada(propriedades);
        }
    });
}
// Função para iniciar a Ferramenta

function iniciarFerramenta() {
    obterEntrada(propriedades);

    rl.on('close', () => {
        nomesPropriedades(propriedades);
    });
}

iniciarFerramenta();