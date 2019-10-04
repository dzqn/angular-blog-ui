import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8080/category/get');
  }
}
