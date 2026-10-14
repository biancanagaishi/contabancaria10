import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "./interface/ContaCorrente.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {
    props: any;
  constructor(props: ContaCorrenteProps) {
    super(props);
  }

  public getLimite(): number {
    return this.props.limite;
  }

  // Polimorfismo: saque considerando o limite
  public sacar(valor: number): void {
    if (valor <= 0) {
      console.log("\n ERRO: O valor do saque deve ser maior que zero!");
      return;
    }

    const limiteDisponivel = this.getSaldo() + this.props.limite;
    if (valor > limiteDisponivel) {
      console.log("\n ERRO: Saldo e limite insuficientes!");
      return;
    }

    this.props.saldo -= valor;
  }
    getSaldo() {
        throw new Error("Method not implemented.");
    }

  public exibirExtrato(): void {
    console.log(`[CONTA CORRENTE] Titular: ${this.props.titular} | Saldo: R$ ${this.getSaldo().toFixed(2)} | Limite: R$ ${this.getLimite().toFixed(2)}`);
  }
}
