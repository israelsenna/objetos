const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "J."]
};

const textoCNH = pessoa.temCNH ? "possui CNH" : "nao possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} e tem os seguintes apelidos:`);

for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}