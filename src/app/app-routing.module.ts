import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModificarComponent} from "./Componentes/modificar/modificar.component";
import {AgregarComponent} from "./Componentes/agregar/agregar.component";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {AppComponent} from "./app.component";

const routes: Routes = [

  {path: '', component:AppComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'add', component:AgregarComponent},
  {path: 'edit/:id', component:ModificarComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
