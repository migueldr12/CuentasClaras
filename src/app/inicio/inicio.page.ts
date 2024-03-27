import { Component, OnInit } from '@angular/core';

import { AlertController, ModalController } from '@ionic/angular';
import { ContactoModalPage } from '../inicio/contacto-modal/contacto-modal.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  goToContacto(){
    this.modalCtrl.create({
      component: ContactoModalPage
    }).then((modal) => {
      modal.present();
    })
  }

}
