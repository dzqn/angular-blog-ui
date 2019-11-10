import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category-service.service'
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  Category: Category = new Category();
  Name;
  IsActive;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  btnCategorySave_click(): void {
    this.Category.name = this.Name;
    //this.Category.isActive = this.IsActive;

    this.categoryService.saveCategory(this.Category);
  }

}
