const idade = 15;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; //AND
console.log('Pode viaja sozinho?', podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH; //OU, OR
console.log('Pode viajar sozinho?', podeViajarSozinho);
 
const precisaDeAcompanhante = !maiorIdade;
console.log('precisa de acompanhante?',precisaDeAcompanhante)