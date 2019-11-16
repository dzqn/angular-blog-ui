import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service.service';
import { Category } from 'src/app/models/category';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from '../../../services/post-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.css']
})
export class AdminPostAddComponent implements OnInit {

  //Fields
  allCategories: Observable<Category[]>;
  selectedCategory: Category = new Category();
  post: Post = new Post();
  title: string = "";
  body: string = "";
  isActive: boolean = false;

  constructor(private categoryService: CategoryService, private postService: PostService,private router: Router,) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.allCategories = this.categoryService.getAllCategories();
  }

  btnPostSave_click(id) {
    this.categoryService.getCategoryById(id).subscribe(response => {
      this.selectedCategory.id = response.id;
      this.selectedCategory.name = response.name;
    });
    this.post.category = this.selectedCategory;
    this.post.title = this.title;
    this.post.body = this.body;
    this.post.isActive = this.isActive;

    this.postService.savePost(this.post).subscribe(resp => {
      console.log(resp);
    });

    this.router.navigate(['/admin/category/listpost']);
  }
}
