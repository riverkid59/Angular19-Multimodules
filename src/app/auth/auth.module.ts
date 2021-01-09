import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [AuthComponent, ConnexionComponent, InscriptionComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }