import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  //cara = true || coroa = false
  public computador_resultado: boolean = false;
  public resultado: boolean = false;
  public fim_do_jogo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public iniciar_cara_ou_coroa(jogador_escolha: boolean){
    this.fim_do_jogo = false;
    this.computador_resultado = Math.random() < 0.5;
    this.computador_resultado === jogador_escolha ? this.resultado = true : this.resultado = false;
    this.fim_do_jogo = true;
  }

}
