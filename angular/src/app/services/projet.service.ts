import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Projet } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient, @Inject('API_URL') private urlApi: string) { }

  getAll(startIndex, pageSize, sortBy, sortDir, nom ) {

    return this.http.get(`${this.urlApi}/projets/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}`);
  }

  getOne = (id) => this.http.get<Projet>(`${this.urlApi}/projets/getOne/${id}`);

  get(){
    return this.http.get<Projet[]>(`${this.urlApi}/projets/get`);
  }
  post = (o: Projet) => this.http.post<Projet>(`${this.urlApi}/projets/post`, o);
  put = (id: number | string, o: Projet) => this.http.put<any>(`${this.urlApi}/projets/put/${id}`, o);
  delete = (id) => this.http.delete<any>(`${this.urlApi}/projets/delete/${id}`);

}
