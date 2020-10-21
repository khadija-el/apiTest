import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: 'blog', component: BlogComponent, data: { state: 'blog' } },
      { path: 'projet', component: ProjetComponent, data: { state: 'projet' } },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
