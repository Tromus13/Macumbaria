import { ListaFilhoComponent } from './component/filho/lista-filho/lista-filho.component';
import { HomeComponent } from './component/home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listarFilhos', component:ListaFilhoComponent},
  {path:'filho/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
