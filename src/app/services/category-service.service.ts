import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    let result = this.http.get<any>(environment.baseUrl + 'category');
    return result;
  }

  saveCategory(category: Category): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let result = this.http.post<Category>(environment.baseUrl + 'category', JSON.stringify(category), { headers });
    return result;
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl + 'category/' + id, {})
  }

  getCategoryById(id:number):Observable<any>{
    return this.http.get(environment.baseUrl + 'category/' + id, {})
  }
}
