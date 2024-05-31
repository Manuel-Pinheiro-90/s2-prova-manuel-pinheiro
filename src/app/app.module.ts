import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleCompComponent } from './component/single-comp/single-comp.component';
import { HomeComponent } from './pages/home/home.component';
import { TodofinComponent } from './pages/todofin/todofin.component';
import { TodouserComponent } from './pages/todouser/todouser.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SingleCompComponent,
    HomeComponent,
    TodofinComponent,
    TodouserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
