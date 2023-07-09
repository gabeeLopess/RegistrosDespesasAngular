import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../models/despesa.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

   getAllDespesas(): Observable<Despesa[]>{
   return this.http.get<Despesa[]>(this.baseApiUrl + '/api/despesas')
   }

  addDespesa(addDespesaRequest: Despesa): Observable<Despesa>{
    addDespesaRequest.codDespesa = '00000000-0000-0000-0000-000000000000'; 
    return this.http.post<Despesa>(this.baseApiUrl + '/api/despesas', addDespesaRequest)
  }

  getDespesa(codDespesa: string): Observable<Despesa>{
    return this.http.get<Despesa>(this.baseApiUrl + '/api/despesas/' + codDespesa)
  }

  updateDespesa(codDespesa: string, updateDespesaRequest: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(this.baseApiUrl + '/api/despesas/' + codDespesa, updateDespesaRequest)
  }

  deleteDespesa(codDespesa: string): Observable<Despesa> {
    return this.http.delete<Despesa>(this.baseApiUrl + '/api/despesas/' + codDespesa)
  }
}
