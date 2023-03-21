// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

// c) Verifique se a nova string inclui verde, e se inclui laranja.

// EXTRA: tente fazer o trecho “mas não deixe o gato sair” ficar em letras maiúsculas, assim como o “BOAS VINDAS”
//===========================================================================

// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);
const string = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

console.log(string)

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;
const newString = string.replace("verde", "rosa").replace("azul", "laranja")

console.log(newString)

// c) Verifique se a nova string inclui verde, e se inclui laranja.
console.log("Possui a palavra verde?", newString.includes("verde"))
console.log("Possui a palavra laranja?", newString.includes("laranja"))

// EXTRA: tente fazer o trecho “mas não deixe o gato sair” ficar em letras maiúsculas, assim como o “BOAS VINDAS”

const newStringUpperCase = newString.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(newStringUpperCase)


