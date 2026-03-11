// Valores iniciais do dia
let valorPorHora = 50;
let horasTrabalhadas = 8; // Expediente padrão

console.log("--- Resumo do Expediente ---");
console.log(`Horas iniciais: ${horasTrabalhadas}h`);
 
horasTrabalhadas++;
console.log(`após hora extra (horasTrabalhadas++): ${horasTrabalhadas}h`);

horasTrabalhadas--;
console.log(`após saida antecipada: ${horasTrabalhadas}h`);
