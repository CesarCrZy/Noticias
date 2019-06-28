import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interface';
import { environment } from '../../environments/environment';

const apikey = environment.apikey;
const apiUrl = environment.apiUrl;

// se utiliza para enviar mediante los heders X-Api-Key esto viene en la documentacion
const headers = new HttpHeaders({
  'X-Api-key': apikey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  llamarAPI<T>(query: string) {
    query = apiUrl + query;

    return this.http.get<T>(query, {headers: headers});
  }


  getNoticias() {
    return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us`);
  }

  getNoticiasPorCategoria(categoria: string) {
      return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us&category=${categoria}&pageSize=5`);
      }

  getNoticiasPorCategoria1(categoria: string, numero: number) {
        return this.llamarAPI<RespuestaNoticias>(`/top-headlines?country=us&category=${categoria}&pageSize=${numero}`);
        }

}
