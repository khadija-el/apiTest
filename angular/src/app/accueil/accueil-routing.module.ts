import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AccueilComponent } from './accueil.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceeComponent } from './servicee/servicee.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: AccueilComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { state: 'connection' } },
      { path: 'header', component: HeaderComponent, data: { state: 'connection' } },
      { path: 'about', component: AboutComponent, data: { state: 'connection' } },
      { path: 'services', component: ServiceeComponent, data: { state: 'connection' } },
      { path: 'contact', component: ContactComponent, data: { state: 'connection' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
