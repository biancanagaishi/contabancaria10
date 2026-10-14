import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "./interface/ContaPoupancaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {
    props: any;
  constructor(props: ContaPoupancaProps) {
    super(props);
  }

  public getTaxaAniversario(): number {
    return this.props.taxaAniversario;
  }

  public renderJuros(): void {
    const juros = this.getSaldo() * (this.getTaxaAniversario() / 100);
    this.depositar(juros);
  }
    depositar(juros: number) {
        throw new Error("Method not implemented.");
    }
    getSaldo() {
        throw new Error("Method not implemented.");
    }

  public exibirExtrato(): void {
    console.log(`[CONTA POUPANÇA] Titular: ${this.props.titular} | Saldo: R$ ${this.getSaldo().toFixed(2)} | Aniversário: Dia ${this.getTaxaAniversario()}`);
  }
}
