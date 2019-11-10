import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category-service.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    })
  }
}
