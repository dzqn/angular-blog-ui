import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../../service/category-service.service';
import {Category} from '../../../models/category';


@Component({
  selector: 'app-cagetorylist',
  templateUrl: './cagetorylist.component.html',
  styleUrls: ['./cagetorylist.component.css']
})
export class CagetorylistComponent implements OnInit {

  categories: any;

  constructor(private categoryServiceService: CategoryServiceService ) { 
  }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categories = this.categoryServiceService.getAllCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
    })
  }
  

}
