import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
