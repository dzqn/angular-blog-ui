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

  //Fiels
  category: Category = new Category();
  name: string = "";
  isActive:boolean = false;

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  btnCategorySave_click(): void {
    this.category.name = this.name;
    this.category.isActive = this.isActive;

    this.categoryService.saveCategory(this.category).subscribe(data => {
      console.log("Resp:" + data);
    }, err => {
      console.log("Error:" + err);
    });
    this.router.navigate(['/admin/category/listcategory']);
  }

}
