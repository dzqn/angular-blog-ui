import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service.service'
import { Category } from 'src/app/models/category';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  Category: Category = new Category();
  Name;
  IsActive;

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  btnCategorySave_click(): void {
    this.Category.name = this.Name;
    //this.Category.isActive = this.IsActive;

    this.categoryService.saveCategory(this.Category).subscribe(data => {
      console.log("Resp:" + data);
    }, err => {
      console.log("Error:" + err);
    });
    this.router.navigate(['/admin/category/listcategory']);
  }

}
