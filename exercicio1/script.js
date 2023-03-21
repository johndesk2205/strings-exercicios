//Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, imprima no console a seguinte mensagem:
// Estas são as comidas favoritas de nomeDoUsuario:
// - Comida1
// - Comida2
// - Comida3
// Você deve usar apenas um console.log() para isso
//=======================================================================


const nome = prompt('Digite seu nome')
const comida1 = prompt('Digite a primeira comida favorita')
const comida2 = prompt('Digite a segunda comida favorita')
const comida3 = prompt('Digite a terceira comida favorita')

console.log(`Estas são as comidas favoritas de ${nome}:\n- ${comida1}\n- ${comida2}\n- ${comida3}`)

