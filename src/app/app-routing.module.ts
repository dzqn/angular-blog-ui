import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './ui/page/home/home.component';
import {AboutComponent} from './ui/page/about/about.component';
import {MainlayoutComponent} from './ui/component/mainlayout/mainlayout.component';
import {AdminlayoutComponent} from './admin/component/adminlayout/adminlayout.component';
import {AdminhomeComponent} from './admin/page/adminhome/adminhome.component';
import {CategoryComponent} from './admin/page/category/category.component';



const routes: Routes = [
  {
    path: "", redirectTo: "/ui/home", pathMatch: "full"
  },
  {
    path: "ui", redirectTo: "ui/home", pathMatch: "full"
  },
  {
    path: "ui", component: MainlayoutComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent }
    ]
  },
  {
    path: "admin", redirectTo: "admin/home", pathMatch: "full"
  },
  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: "home", component: AdminhomeComponent },
      { path: "category", component: CategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
