import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent, data: { state: 'connection' } },
  { path: 'about', component: AboutComponent, data: { state: 'connection' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
