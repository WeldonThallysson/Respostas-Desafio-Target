

// 1° Cálculo da variável SOMA
let INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log(SOMA);

// 2° Sequência de Fibonacci

function pertenceFibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        [a, b] = [b, a + b];
    }
    return a === n;
}
 
const numero = parseInt(prompt("Informe um número:"));

if (pertenceFibonacci(numero)) {
    alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

// 3° Faturamento diário

const faturamentoDiario = {
    "SP": [500, 600, 700, 800, 0],
    "RJ": [300, 350, 400, 0, 0],
    "MG": [450, 500, 0, 700, 750],
    "ES": [100, 150, 200, 0, 0]
};

let valoresFaturamento = [];
for (let estado in faturamentoDiario) {
    valoresFaturamento = valoresFaturamento.concat(faturamentoDiario[estado].filter(valor => valor > 0));
}

const menorFaturamento = Math.min(...valoresFaturamento);
const maiorFaturamento = Math.max(...valoresFaturamento);
const mediaFaturamento = valoresFaturamento.reduce((acc, val) => acc + val, 0) / valoresFaturamento.length;

const diasSuperioresMedia = valoresFaturamento.filter(valor => valor > mediaFaturamento).length;

console.log(`Menor valor de faturamento: R$${menorFaturamento}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento superior à média: ${diasSuperioresMedia}`);

// 4° Percentual de representação por estado

const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

const percentuais = {};
for (let estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}

// 5° Inversão de uma string
function inverterString(s) {
    let resultado = '';
    for (let i = s.length - 1; i >= 0; i--) {
        resultado += s[i];
    }
    return resultado;
}

const texto = prompt("Digite uma string:");

console.log("String invertida:", inverterString(texto));