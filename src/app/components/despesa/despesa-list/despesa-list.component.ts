import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa.model';
import { format } from 'date-fns';


@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.css']
})
export class DespesaListComponent implements OnInit {
  despesas: Despesa[] = [
    {
      codDespesa: 1,
      nomeDespesa: 'Conta de Energia',
      descricaoDespesa: 'Conta de Energia do mês de Julho',
      valor: 750,
      data: new Date('07/07/2023'),
      valorTotal: 750,
      dataFormatada: '' // Nova propriedade para armazenar a data formatada
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.formatarDatas();
  }

  formatarDatas(): void {
    this.despesas.forEach(despesa => {
      const dataFormatada = format(despesa.data, 'dd/MM/yyyy');
      despesa.dataFormatada = dataFormatada;
    });
  }
}