import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-sorte',
  templateUrl: './barra-sorte.component.html',
  styleUrls: ['./barra-sorte.component.scss']
})
export class BarraSorteComponent implements OnInit {

  @Input() jogadas: number = 0;
  @Input() ganhas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  conversao_porcentagem(): number{
    return parseFloat(((this.ganhas * 100) / this.jogadas).toFixed(2));
  }

}
