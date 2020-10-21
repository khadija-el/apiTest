import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateComponent } from './blog/update/update.component';
import { ProjetComponent } from './projet/projet.component';
import { UpdateProjetComponent } from './projet/update/update-projet/update-projet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../mat.material';


@NgModule({
  declarations: [
    AdminComponent,
    BlogComponent,
    UpdateComponent,
    ProjetComponent,
    UpdateProjetComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModule,
  ]
})
export class AdminModule { }
