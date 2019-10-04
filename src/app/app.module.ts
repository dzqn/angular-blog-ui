import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './ui/component/menu/menu.component';
import { PostListComponent } from './ui/component/post-list/post-list.component';
import { SearchComponent } from './ui/component/search/search.component';
import { HomeComponent } from './ui/page/home/home.component';
import { AboutComponent } from './ui/page/about/about.component';
import { CagetorylistComponent } from './ui/component/cagetorylist/cagetorylist.component';
import { MainlayoutComponent } from './ui/component/mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './admin/component/adminlayout/adminlayout.component';
import { AdminhomeComponent } from './admin/page/adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostListComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    CagetorylistComponent,
    MainlayoutComponent,
    AdminlayoutComponent,
    AdminhomeComponent
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
