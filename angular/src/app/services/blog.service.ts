import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:5000/api/blogs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${URL}/GetAll`);
  }
}
