import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './ui/page/home/home.component';
import {AboutComponent} from './ui/page/about/about.component';
import {MainlayoutComponent} from './ui/component/mainlayout/mainlayout.component';
import {AdminlayoutComponent} from './admin/component/adminlayout/adminlayout.component';
import {AdminhomeComponent} from './admin/page/adminhome/adminhome.component';



const routes: Routes = [
  {
    path: "", redirectTo: "/ui", pathMatch: "full"
  },
  {
    path: "ui", component: MainlayoutComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent }
    ]
  },
  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: "home", component: AdminhomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
