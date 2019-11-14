import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/page/home/home.component';
import { AboutComponent } from './ui/page/about/about.component';
import { MainlayoutComponent } from './ui/component/mainlayout/mainlayout.component';
import { AdminLayoutComponent } from './admin/component/adminlayout/adminlayout.component';
import { AdminHomeComponent } from './admin/page/adminhome/adminhome.component';
import { AdminCategoryComponent } from './admin/page/admincategory/admincategory.component';
import { AdminPostComponent } from './admin/page/adminpost/adminpost.component';
import { AdminCategoryAddComponent } from './admin/component/admin-category-add/admin-category-add.component';
import { AdminCategoryListComponent } from './admin/component/admin-category-list/admin-category-list.component';
import {AdminPostAddComponent} from './admin/component/admin-post-add/admin-post-add.component';
import {AdminPostListComponent} from './admin/component/admin-post-list/admin-post-list.component';




const routes: Routes = [
  {
    path: "", redirectTo: "/ui/home", pathMatch: "full"
  },
  {
    path: "ui", redirectTo: "/ui/home", pathMatch: "full"
  },
  {
    path: "ui", component: MainlayoutComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent }
    ]
  },
  {
    path: "admin", redirectTo: "/admin/home", pathMatch: "full"
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      {
        path: "home", component: AdminHomeComponent
      },
      {
        path: "category", component: AdminCategoryComponent, children: [
          {
            path: "addcategory", component: AdminCategoryAddComponent
          },
          {
            path: "listcategory", component: AdminCategoryListComponent
          }
        ]
      },
      {
        path: "post", component: AdminPostComponent,children:[
          {
            path:"addpost",component:AdminPostAddComponent
          },
          {
            path:"listpost",component:AdminPostListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
