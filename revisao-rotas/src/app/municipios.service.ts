import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  getMunicipios(uf: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${uf}/municipios`);
  }
}
