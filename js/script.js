//questao 1

const minhaIdade = 28;
document.write("<p>" + `Minha idade é ${minhaIdade} anos`);

//questão 2

let x = 20;
let y = 50;
let resultado;

resultado = x + y;
document.write("<p>" + `O resultado da soma de x e y é ${resultado}`);


//questão 3

let totalCompra = 149.90;
let totalParcelas = 2;
let valorParcela = totalCompra / totalParcelas;

document.write("<p>" + `O valor total da compra foi R$ ${totalCompra}`);
document.write("<p>" + `Forma de pagamento: ${totalParcelas} de R$ ${valorParcela}`)

//questão 4

let minutos = 120;

let segudos = minutos * 60;

document.write("<p>" + `${minutos} minutos equivale à ${segudos} segundos`)

//questão 5

const nomeAluno = "Leonardo Krindges";

let nota1 = 8;
let nota2 = 6;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

document.write("<p>" + `O aluno ${nomeAluno} ficou com a média ${media}`);

//questão 6

let a = 10;
let b = 20;

let aux = a;
a = b;
b = aux;

document.write("<p>" + `Valor de 'a' ${a}, valor de 'b' ${b}`);


//questão 7

let nulo = 10;
let brancos = 20;
let validos = 70;
let totalVotos = nulo + brancos + validos;

let porcentNulos = (nulo / totalVotos) * 100;
let porcentBrancos = (brancos / totalVotos) * 100;
let porcentValidos = (validos / totalVotos) * 100;


document.write("<p>" + `${porcentValidos.toFixed(2)}% dos ${totalVotos} votos são validos: `);

document.write("<p>" + `${porcentBrancos.toFixed(2)}% dos ${totalVotos} votos são brancos: `);

document.write("<p>" + `${porcentNulos.toFixed(2)}% dos ${totalVotos} votos são nulos: `);

//questão 8

let valor1 = 10;
let valor2 = 15;

if (valor1 == valor2) {
    document.write("<p>" + "Números iguais");
}

if (valor1 > valor2) {
    document.write("<p>" + "Primeio é maior");
}

if (valor1 < valor2) {
    document.write("<p>" + "Segundo é maior");
}


//questão 9

let PrecoMenosDeUmaDuzia = 0.30;
let PrecoMaisDeUmaDuzia = 0.25;
let quantidade = 15;
let totalDaCompra;

if (quantidade >= 12) {
    totalCompra = quantidade * PrecoMaisDeUmaDuzia;
    document.write("<p>" + `Você comprou pelo menos uma duzia e vai pagar um total de ${totalCompra}`);

} else {
    totalCompra = quantidade * PrecoMenosDeUmaDuzia;
    document.write("<p>" + `Você comprou menos de uma duzia e vai pagar um total de ${totalCompra}`);

}

//questão 10

let idadeUsuario = 28;
let nomeUsuario = "Leonardo Krindges";

let anoNascimento = 2023 - idadeUsuario;

document.write("<p>" + `Nome: ${nomeUsuario}, Idade: ${idadeUsuario} anos, nasceu em ${anoNascimento}`);

//questão 11

let numeroInteiroPositivo = 7;

if (numeroInteiroPositivo % 2 == 0) {
    document.write("<p>" + `Número par`);
} else {
    document.write("<p>" + `Número ímpar`);
}

//questão 12

let anoAtual = 2023;
let anoNasc = 2005

let idadeEleitor = anoAtual - anoNasc;

if (idadeEleitor < 16) {
    document.write("<p>" + `Sua idade é ${idadeEleitor} anos, você não pode votar`);
} else {
    if (idadeEleitor >= 16 && idadeEleitor < 18) {
        document.write("<p>" + `Sua idade é ${idadeEleitor} anos, voto é opcional`);
    } else {
        if (idadeEleitor >= 18) {
            document.write("<p>" + `Sua idade é ${idadeEleitor} anos, voto é obrigatório`);
        }
    }
}


