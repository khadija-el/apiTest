import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../models/model';

const URL = 'http://localhost:5000/api/projets';
@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getAll(startIndex, pageSize, sortBy, sortDir, nom ) {

    return this.http.get(`${URL}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${nom}`);
  }

  getOne = (id) => this.http.get<Projet>(`${URL}/get/${id}`);
  post = (o: Projet) => this.http.post<Projet>(`${URL}/post`, o);
  put = (id: number | string, o: Projet) => this.http.put<any>(`${URL}/put/${id}`, o);
  delete = (id) => this.http.delete<any>(`${URL}/delete/${id}`);

}
