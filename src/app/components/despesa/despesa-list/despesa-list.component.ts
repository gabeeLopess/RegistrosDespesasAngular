import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa.model';
import { format } from 'date-fns';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.css']
})
export class DespesaListComponent implements OnInit {
  totalDespesas: number = 0;
  despesas: Despesa[] = [];

  constructor(private despesaService: DespesasService) { }

  ngOnInit(): void {
    this.despesaService.getAllDespesas().subscribe({
      next: (despesas) => {
        this.despesas = despesas;

      },
      error: (response) => {
        console.log(response);
      }
    });

 
  }

  calcularTotalDespesas(): number {
    let total = 0;
    if (this.despesas) {
      for (let despesa of this.despesas) {
        total += despesa.valor;
      }
    }
    return total;
  }
}
