import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./home/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () =>
      import('./home/nuevo-usuario/nuevo-usuario.module').then((m) => m.NuevoUsuarioPageModule),
  },
  {
    path: 'contacto-contador',
    loadChildren: () => import ('./inicio/contacto-contador/contacto-contador.module').then( m => m.ContactoContadorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
