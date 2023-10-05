//questao 1

const minhaIdade = 28;
console.log(`Minha idade é ${minhaIdade} anos`);


//questão 2

let x = 20;
let y = 50;
let resultado;

resultado = x + y;
console.log(`O resultado da soma de x e y é ${resultado}`);


//questão 3

let totalCompra = 149.90;
let totalParcelas = 2;
let valorParcela = totalCompra / totalParcelas;

console.log(`O valor total da compra foi R$ ${totalCompra}`);
console.log(`Forma de pagamento: ${totalParcelas} de R$ ${valorParcela}`)

//questão 4

let minutos = 120;

let segudos = minutos * 60;

console.log(`${minutos} minutos equivale à ${segudos} segundos`)

//questão 5

const nomeAluno = "Leonardo Krindges";

let nota1 = 8;
let nota2 = 6;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

console.log(`O aluno ${nomeAluno} ficou com a média ${media}`);

//questão 6

let a = 10;
let b = 20;

let aux = a;
a = b;
b = aux;

console.log(`Valor de 'a' ${a}, valor de 'b' ${b}`);


//questão 7



//questão 8

let valor1 = 10;
let valor2 = 15;

if (valor1 == valor2) {
    console.log("Números iguais");
}

if(valor1 > valor2) {
    console.log("Primeio é maior");
}

if(valor1 < valor2) {
    console.log("Segundo é maior")
}


//questão 9

let PrecoMenosDeUmaDuzia = 0.30;
let PrecoMaisDeUmaDuzia = 0.25;
let quantidade = 15;
let totalDaCompra;

if(quantidade >= 12) {
    totalCompra = quantidade * PrecoMaisDeUmaDuzia;  
    console.log(`Você comprou pelo menos uma duzia e vai pagar um total de ${totalCompra}`);
  
}else {
     totalCompra = quantidade * PrecoMenosDeUmaDuzia;
     console.log(`Você comprou menos de uma duzia e vai pagar um total de ${totalCompra}`);

}

//questão 10

let idadeUsuario = 28;
let nomeUsuario = "Leonardo Krindges";

let anoNascimento = 2023 - idadeUsuario;

console.log(`Nome: ${nomeUsuario}, Idade: ${idadeUsuario} anos, nasceu em ${anoNascimento}`);

//questão 11

