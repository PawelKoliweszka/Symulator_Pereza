import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GraComponent } from './gra/gra.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'gra', component: GraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
