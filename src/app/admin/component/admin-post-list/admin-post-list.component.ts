import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.css']
})
export class AdminPostListComponent implements OnInit {

  //Fields
  allPosts: Observable<Post[]>

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.allPosts = this.postService.getAllPosts();
  }

  deletePost() {

  }

  updatePost() {

  }

}
