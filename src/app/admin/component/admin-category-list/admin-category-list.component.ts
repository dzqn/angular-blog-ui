import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service.service';
import { Category } from 'src/app/models/category';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categories = this.categoryService.getAllCategories();
  }

  deleteCategory(id: number) {
    let res = this.categoryService.deleteCategory(id);
    res.subscribe(data => {
      console.log("Resp:" + data);
      this.getAllCategory();
    }, err => {
      console.log("Err:" + err);
    });
  }

  detailCategory(id: number) {
    console.log(id);
  }

  updateCategory(id: number) {
    console.log(id);
  }

}
