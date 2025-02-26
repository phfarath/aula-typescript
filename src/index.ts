let mensagem: string = "Olá, TypeScript, que legal!";
console.log(mensagem);

// EXERCICIO 1
let valores: number[] = [60, 50, 10];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// EXERCICIO 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Pedro"));

// EXERCICIO 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) { }
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Peugeot", "208", 2024);
console.log(carro1.detalhes());