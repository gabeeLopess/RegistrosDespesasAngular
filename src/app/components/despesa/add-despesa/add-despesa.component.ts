import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesa } from 'src/app/models/despesa.model';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-add-despesa',
  templateUrl: './add-despesa.component.html',
  styleUrls: ['./add-despesa.component.css']
})
export class AddDespesaComponent {

  addDespesaRequest: Despesa = {

    codDespesa: '',
    nomeDespesa: '',
    descricaoDespesa: '',
    data: new Date(),
    valor: 0,
    
  };



  constructor(private despesaService: DespesasService, private router:  Router) { }
 
  ngOnInit(): void {
  }

  addDespesa(): void {
    const nomeDespesa = this.addDespesaRequest.nomeDespesa.trim();
    const descricaoDespesa = this.addDespesaRequest.descricaoDespesa.trim();
    const valorDespesa = this.addDespesaRequest.valor;
  
    if (!nomeDespesa || !descricaoDespesa || !this.addDespesaRequest.data || !valorDespesa || valorDespesa <= 0 || isNaN(valorDespesa)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    this.despesaService.addDespesa(this.addDespesaRequest).subscribe(
      (despesa) => {
        this.addDespesaRequest = {  // Resetar o objeto addDespesaRequest
          codDespesa: '',
          nomeDespesa: '',
          descricaoDespesa: '',
          data: new Date(NaN),
          valor: 0,
        };
        alert('Despesa salva com sucesso!');
        this.router.navigate(['despesa']);
      }
      );
    }
  }
