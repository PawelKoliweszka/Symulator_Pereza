import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GraComponent } from './gra/gra.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'gra', component: GraComponent},
  { path: 'rejestracja', component: RejestracjaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
