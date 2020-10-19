import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Blog } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, @Inject('API_URL') private urlApi: string) { }

  getAll(startIndex, pageSize, sortBy, sortDir, titre ) {

    return this.http.get(`${this.urlApi}/blogs/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${titre}`);
  }

  getOne = (id) => this.http.get<Blog>(`${this.urlApi}/blogs/get/${id}`);
  post = (o: Blog) => this.http.post<Blog>(`${this.urlApi}/blogs/post`, o);
  put = (id: number | string, o: Blog) => this.http.put<any>(`${this.urlApi}/blogs/put/${id}`, o);
  delete = (id) => this.http.delete<any>(`${this.urlApi}/blogs/delete/${id}`);

}
