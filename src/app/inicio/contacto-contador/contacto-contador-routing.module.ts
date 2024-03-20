import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoContadorPage } from './contacto-contador.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoContadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoContadorPageRoutingModule {}
