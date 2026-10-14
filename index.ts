import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";

console.log("=== INICIALIZANDO SISTEMA BANCÁRIO ===");


const contaC = new ContaCorrente({
  numero: "12345-6",
  agencia: "0001",
  titular: "Carlos Silva",
  saldo: 500,
  limite: 300,
});

console.log("\n--- Estado Inicial da Conta Corrente ---");
contaC.exibirExtrato();

console.log("\n-> Tentando sacar R$ 200 (Dentro do saldo)...");
contaC.sacar(200);
contaC.exibirExtrato();

console.log("\n-> Tentando sacar R$ 450 (Usa o restante do saldo + parte do limite)...");
contaC.sacar(450);
contaC.exibirExtrato();

console.log("\n-> Tentando sacar R$ 200 (Deve dar ERRO: limite insuficiente)...");
contaC.sacar(200);



const contaP = new ContaPoupanca({
  numero: "98765-4",
  agencia: "0002",
  titular: "Ana Souza",
  saldo: 1000,
  taxaAniversario: 1.5,
});

console.log("\n--- Estado Inicial da Conta Poupança ---");
contaP.exibirExtrato();

console.log("\n-> Aplicando rendimento de juros (1.5%)...");
contaP.renderJuros();
contaP.exibirExtrato();

console.log("\n-> Depositando R$ 500 na Poupança...");
contaP.depositar(500);
contaP.exibirExtrato();
