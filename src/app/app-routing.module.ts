import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/page/home/home.component';
import { AboutComponent } from './ui/page/about/about.component';
import { MainlayoutComponent } from './ui/component/mainlayout/mainlayout.component';
import { AdminLayoutComponent } from './admin/component/adminlayout/adminlayout.component';
import { AdminHomeComponent } from './admin/page/adminhome/adminhome.component';
import { AdminCategoryComponent } from './admin/page/admincategory/admincategory.component';
import { PostComponent } from './admin/page/post/post.component';
import { AdminCategoryAddComponent } from './admin/component/admin-category-add/admin-category-add.component';
import { AdminCategoryListComponent } from './admin/component/admin-category-list/admin-category-list.component';



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
        path: "home", component: AdminHomeComponent, children: [
          {
            path: "post", component: PostComponent
          }
        ]
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
        path: "post", component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
