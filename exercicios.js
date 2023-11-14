function saudacao() {

  var nome = "Ana Luana";

  var idade = 20;

  console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");

}

saudacao();


function operacoesAritmeticas() {

  var numero1 = parseFloat(prompt("Digite o primeiro número:"));

  var numero2 = parseFloat(prompt("Digite o segundo número:"));

  var soma = numero1 + numero2;

  var subtracao = numero1 - numero2;

  var multiplicacao = numero1 * numero2;

  var divisao = numero1 / numero2;

  console.log("Soma: " + soma);

  console.log("Subtração: " + subtracao);

  console.log("Multiplicação: " + multiplicacao);

  console.log("Divisão: " + divisao);

}

operacoesAritmeticas();

function verificarIdade() {

  var idade = parseInt(prompt("Qual é a sua idade?"));

  if (idade >= 18) {

    console.log("Você é maior de idade.");

  } else {

    console.log("Você é menor de idade.");

  }

}

verificarIdade();

function imprimirNumerosDeUmACem() {

  for (var i = 1; i <= 100; i++) {

    console.log(i);

  }

}

imprimirNumerosDeUmACem();

function somaNumeros(numero1, numero2) {

  return numero1 + numero2;

}

var resultado = somaNumeros(5, 3); // Chamando a função com os números 5 e 3

console.log("A soma é: " + resultado); // Isso imprimirá "A soma é: 8" no console


function imprimirFrutasFavoritas() {

  var frutasFavoritas = ["Maçã", "Banana", "Morango", "Uva", "Pêssego"];

  for (var i = 0; i < frutasFavoritas.length; i++) {

    console.log("Uma das minhas frutas favoritas é: " + frutasFavoritas[i]);

  }

}

imprimirFrutasFavoritas();

function imprimirLivro() {

  var livro = {

    titulo: "O Senhor dos Anéis",

    autor: "J.R.R. Tolkien",

    numPaginas: 1170

  };

  console.log("Título: " + livro.titulo);

  console.log("Autor: " + livro.autor);

  console.log("Número de Páginas: " + livro.numPaginas);

}

imprimirLivro();

<!DOCTYPE html>

<html>

  <head>

    <title>Botão de Alerta</title>

  </head>

  <body>

    <button id="meuBotao">Clique em Mim</button>

    <script>

      function exibirAlerta() {

        alert("Você clicou no botão!");

      }

       var botao = document.getElementById("meuBotao");

      botao.addEventListener("click", exibirAlerta);

    </script>

  </body>

</html>

function capitalizePrimeiraLetraCadaPalavra(frase) {

  var palavras = frase.split(" ");

  for (var i = 0; i < palavras.length; i++) {

    var palavra = palavras[i];

    palavras[i] = palavra.charAt(0).toUpperCase() + palavra.slice(1);

  }

  var fraseCapitalizada = palavras.join(" ");

  

  return fraseCapitalizada;

}

var fraseOriginal = "isso é um exemplo de capitalização de palavras";

var fraseCapitalizada = capitalizePrimeiraLetraCadaPalavra(fraseOriginal);

console.log(fraseCapitalizada)