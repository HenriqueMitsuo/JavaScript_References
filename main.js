// DECLARAÇÂO DE VARIAVEIS
// CAMEL CASE
// var minhaVariavel;

// PARTIAL CASE;
// var MinhaVariavel;

// UNDERSCORE
// var Minha_Variavel;

// DATA TYPES:
// NUMBER
var number1 = 35;
var number2 = 40;
alert(number1 + number2); //<-- Soma

// STRING
var number1 = "35";
var number2 = "40";
alert(number1 + number2); //<-- Concatenado

// ARRAY
var colors = ["Vermelho", "Azul", "Verde"];
var colors2 = new Array("Amarelo", "Roxo", "Rosa");
var numeros = [1, 2, 3, 4, 5];

colors.push("Marrom"); // Push: insere um novo valor no array

alert(colors);
alert(numeros[0] + numeros[2]);
alert(numeros.length); // <-- Length: tamanho do array
alert(numeros.sort()); // <-- Sort: classifica o conteudo por tipo
alert(numeros.reverse()); // <-- Reverse: exibe a ordem reversa
// ANY
var variavelSemTipo;

// CONCATENAÇÂO
var concat = 50;
alert("Número: " + concat);

// LOOPS
// FOR LOOP
console.log("FOR LOOP:");

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// WHILE LOOP
console.log("WHILE LOOP:");

var n = 0;
while (n <= 10) {
  console.log("Número: " + n);
  n++;
}

// FOR EACH LOOP
var arrayNumeros = [10, 20, 30, 40, 50];

console.log("FOR EACH LOOP:");

arrayNumeros.forEach(function(arrayNumeros) {
  console.log(arrayNumeros);
});

// CONDICIONAIS
// REFERENCIAS https://www.w3schools.com/js/js_comparisons.asp
// IF
if (1 == 1) {
  console.log("True");
}

// SWITCH
var nome = "Joao";
//  nome = 'Maria';
switch (nome) {
  case "joao":
    console.log("Nome = joao");
    break;

  case "maria":
    console.log("Nome = maria");
    break;

  default:
    break;
}

// OBJECTS
console.log("OBJECTS");
// OBJECT LITERAL
var pessoa = {
  primeiroNome: "Jon", // <-- String
  ultimoNome: "Doe",
  idade: 25, // <-- Int
  filhos: ["Joao", "Maria"], // <-- Array
  endereco: {
    // <-- Objeto
    rua: "1 de julho",
    cidade: "São Paulo",
    estado: "São Paulo",
    numero: 123
  },
  NomeCompleto: function() {
    // <-- Função
    return this.primeiroNome + " " + this.ultimoNome;
  }
};
console.log(pessoa.NomeCompleto());

// OBJECT CONSTRUCTOR
var maca = new Object();
maca.cor = "vermelha";
maca.forma = "redonda";
maca.descricao = function() {
  return "Uma maça é " + this.cor + " e tem uma forma " + this.forma;
};

console.log(maca.descricao());

// CONSTRUCTOR PATTERN
function fruta(nome, cor, forma) {
  this.nome = nome;
  this.cor = cor;
  this.forma = forma;

  this.descricao = function() {
    return (
      "A fruta " +
      this.nome +
      " tem a cor " +
      this.cor +
      " e tem a forma " +
      this.forma
    );
  };
}

var melancia = new fruta("Melancia", "Verde", "Redonda");

console.log(melancia.descricao());

// ARRAY OBJECTS
var usuarios = [
  {
    nome: "John"
  },
  {
    nome: "Maria"
  },
  {
    nome: "Joao"
  }
];

console.log(usuarios[1].nome);
