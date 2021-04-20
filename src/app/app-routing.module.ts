import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent} from './first/first.component';
import {AppComponent} from './app.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent },
  {path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
