import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './ui/component/card/card.component';
import { PostListComponent } from './ui/component/post-list/post-list.component';
import { SearchComponent } from './ui/component/search/search.component';
import { HomeComponent } from './ui/page/home/home.component';
import { AboutComponent } from './ui/page/about/about.component';
import { CagetorylistComponent } from './ui/component/cagetorylist/cagetorylist.component';
import { MainlayoutComponent } from './ui/component/mainlayout/mainlayout.component';
import { AdminLayoutComponent } from './admin/component/adminlayout/adminlayout.component';
import { AdminHomeComponent } from './admin/page/adminhome/adminhome.component';
import { AdminCategoryComponent } from './admin/page/admincategory/admincategory.component';
import { PostComponent } from './admin/page/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PostListComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    CagetorylistComponent,
    MainlayoutComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminCategoryComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
