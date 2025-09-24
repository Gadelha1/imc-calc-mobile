export function calculateIMC(peso, altura) {
  if (altura <= 0 || peso <= 0) {
    throw new Error("A altura e o peso devem ser maiores que zero.");
  }
  return peso / (altura * altura);
}