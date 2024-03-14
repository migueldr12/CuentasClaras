// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Puedes agregar lógica de autenticación aquí si es necesario
    console.log('Iniciar sesión con:', this.email, ' y ', this.password);
    
    // Redirigir a otra página después del inicio de sesión (puedes ajustar la ruta)
    this.router.navigate(['/home']);
  }
}
