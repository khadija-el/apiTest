import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceeComponent } from './servicee/servicee.component';
import { MatModule } from '../mat.material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AccueilComponent,
    HeaderComponent,
    AboutComponent,
    ServiceeComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    HttpClientModule,
    MatModule,
  ]
})
export class AccueilModule { }
