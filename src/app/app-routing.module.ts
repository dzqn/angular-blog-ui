import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './ui/page/home/home.component';
import {AboutComponent} from './ui/page/about/about.component';
import {MainlayoutComponent} from './ui/component/mainlayout/mainlayout.component';
import {AdminlayoutComponent} from './admin/component/adminlayout/adminlayout.component';
import {AdminhomeComponent} from './admin/page/adminhome/adminhome.component';
import {CategoryComponent} from './admin/page/category/category.component';
import {PostComponent} from './admin/page/post/post.component';



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
    path: "admin", component: AdminlayoutComponent, children: [
      {
        path: "home", component: AdminhomeComponent,children:[{
          path:"post",component:PostComponent
        }]
      },
      {
        path: "category", component: CategoryComponent
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
