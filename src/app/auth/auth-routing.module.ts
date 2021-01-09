import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children:[
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }