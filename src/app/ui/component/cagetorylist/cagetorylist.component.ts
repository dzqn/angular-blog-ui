import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category-service.service';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-cagetorylist',
  templateUrl: './cagetorylist.component.html',
  styleUrls: ['./cagetorylist.component.css']
})
export class CagetorylistComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    })
  }


}
