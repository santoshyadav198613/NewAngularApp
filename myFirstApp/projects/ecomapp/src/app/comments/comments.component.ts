import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IComment } from './service/comments';

@Component({
  selector: 'ecom-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentsList: Array<IComment>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => this.commentsList = data['commentList']);
  }

}
