import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from './comments';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Array<IComment>>  {
  
  constructor(private commentService: CommentService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<IComment>> {
    return this.commentService.getComments();
  }
}
