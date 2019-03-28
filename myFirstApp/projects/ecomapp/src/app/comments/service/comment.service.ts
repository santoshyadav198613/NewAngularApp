import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<Array<IComment>>('https://jsonplaceholder.typicode.com/comments');
  }
}
