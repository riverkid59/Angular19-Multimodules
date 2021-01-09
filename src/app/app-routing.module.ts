import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'authentification', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'management', loadChildren: () => import('../app/management/management.module').then(m => m.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }