import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactoContadorPageRoutingModule } from './contacto-contador-routing.module';

import { ContactoContadorPage } from './contacto-contador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoContadorPageRoutingModule
  ],
  declarations: [ContactoContadorPage]
})
export class ContactoContadorPageModule {}
