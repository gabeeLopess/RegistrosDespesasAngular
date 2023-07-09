import { Component, OnInit, ElementRef, ViewChild,  AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Despesa } from 'src/app/models/despesa.model';
import { DespesasService } from 'src/app/services/despesas.service';

declare const bootstrap: any; 

@Component({
  selector: 'app-edit-despesa',
  templateUrl: './edit-despesa.component.html',
  styleUrls: ['./edit-despesa.component.css']
})
export class EditDespesaComponent implements OnInit {

  despesaDetalhes: Despesa = {
    codDespesa: '',
    nomeDespesa: '',
    descricaoDespesa: '',
    data: new Date(),
    valor: 0,
  };

  @ViewChild('confirmDeleteModal') confirmDeleteModal!: ElementRef;
  

  constructor(private route: ActivatedRoute, private despesaService: DespesasService, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const codDespesa = params.get('codDespesa');

        if (codDespesa) {
          this.despesaService.getDespesa(codDespesa).subscribe({
            next: (response) => {
              const formattedDate = new Date(response.data); // Converter a string de data em objeto Date
              this.despesaDetalhes = {
                ...response,
                data: formattedDate
              };
            }
          });
        }
      }
    });
  }
  
  updateDespesa(){
    if (
      !this.despesaDetalhes.nomeDespesa.trim() ||
      !this.despesaDetalhes.descricaoDespesa.trim() ||
      !this.despesaDetalhes.data ||
      this.despesaDetalhes.valor <= 0 ||
      isNaN(this.despesaDetalhes.valor)
    ) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

     this.despesaService.updateDespesa(this.despesaDetalhes.codDespesa,  this.despesaDetalhes)
      .subscribe({
        next: (response) =>{
          this.router.navigate(['despesa'])
        }
      })
      alert('Despesa atualizada com sucesso!');
      this.router.navigate(['despesa']);
      };
  
      
  deleteDespesa(codDespesa: string){
    this.despesaService.deleteDespesa(codDespesa)
    .subscribe({
      next: (response) => {
        this.router.navigate(['despesa'])
        
        
      }

      
    });
    
  }

  openDeleteConfirmationModal(): void {
    const modal = this.confirmDeleteModal.nativeElement;
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }
}

