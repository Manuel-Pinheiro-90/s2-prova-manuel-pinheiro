import { Page404Component } from './pages/page404/page404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodofinComponent } from './pages/todofin/todofin.component';
import { TodouserComponent } from './pages/todouser/todouser.component';

const routes: Routes = [
{path: '',
  component: HomeComponent
},
{path:'todofin',
  component: TodofinComponent
},
{path:'todouser',
  component: TodouserComponent
},

{path:'**',
  component: Page404Component
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
