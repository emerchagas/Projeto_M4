# Ferramenta de Ordenação de Propriedades CSS

Esta é uma ferramenta em Node.js que permite que você insira uma lista de propriedades CSS e as ordene alfabeticamente. Ela é executada via linha de comando e aceita entradas até que você digite "SAIR".

## Requisitos

Para executar essa ferramenta, você precisará ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/)

## Como Usar

1. Clone ou faça o download deste repositório para o seu computador.

Caso não souber clonar eis aqui um passo a passo:
[https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository]

2. Abra o terminal e navegue até o diretório onde você baixou/clonou o repositório.

3. No terminal, execute o seguinte comando para instalar as dependências necessárias: npm install readline


4. Execute a ferramenta com o seguinte comando: node app.js


5. A ferramenta começará a pedir que você insira propriedades CSS. Digite cada propriedade e pressione "Enter". Continue digitando propriedades até que você queira encerrar a entrada.

Exemplo de Propriedades CSS:

color, font-size, border

Exemplo de como aparecerá no terminal:
PS C:\Users\Desktop\Projeto_M4> node app.js

click Enter

Aparecerá:
Digite uma propriedade ou "SAIR" para encerrar: "aqui voce coloca a propriedade css"

6. Para encerrar a entrada, digite "SAIR" e pressione "Enter". A ferramenta exibirá então as propriedades que você inseriu, ordenadas alfabeticamente.

Exemplo de como aparecerá:
border
color
font-size

## Funcionamento do Código

- A ferramenta utiliza o módulo `readline` para interagir com a entrada do usuário.
- Ela armazena as propriedades digitadas em uma matriz.
- A ordenação das propriedades é feita através da função `sort()` do JavaScript.
- A ferramenta utiliza funções para modularizar o código e torná-lo mais compreensível.
- Ela faz uso de eventos para controlar o fluxo do programa, permitindo a coleta de propriedades e a exibição ordenada.

---


