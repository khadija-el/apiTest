import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../models/model';

const URL = 'http://localhost:5000/api/blogs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAll(startIndex, pageSize, sortBy, sortDir, titre ) {

    return this.http.get(`${URL}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${titre}`);
  }

  getOne = (id) => this.http.get<Blog>(`${URL}/get/${id}`);
  post = (o: Blog) => this.http.post<Blog>(`${URL}/post`, o);
  put = (id: number | string, o: Blog) => this.http.put<any>(`${URL}/put/${id}`, o);
  delete = (id) => this.http.delete<any>(`${URL}/delete/${id}`);

}
