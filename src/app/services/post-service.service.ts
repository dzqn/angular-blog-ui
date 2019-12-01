import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    let result = this.http.get<any>(environment.baseUrl + 'post');
    return result;
  }

  savePost(post: Post): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    let result = this.http.post<Post>(environment.baseUrl + 'post', JSON.stringify(post), { headers});
    return result;
  }

  deletePost(id: number): Observable<any> {
    let result = this.http.delete(environment.baseUrl + 'post/' + id, {})
    console.log(result);
    return result;
  }

  getPostById(id:number):Observable<any>{
    return this.http.get(environment.baseUrl + 'post/' + id, {})
  }
}
