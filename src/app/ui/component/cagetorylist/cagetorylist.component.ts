import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category-service.service';


@Component({
  selector: 'app-cagetorylist',
  templateUrl: './cagetorylist.component.html',
  styleUrls: ['./cagetorylist.component.css']
})
export class CagetorylistComponent implements OnInit {

  categories: any;

  constructor(private categoryService: CategoryService ) { 
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categories = this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    })
  }
  

}
