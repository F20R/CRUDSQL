import {Component, OnInit} from '@angular/core';
import {Usuario, UsuarioService} from "../../Services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit{

  usuario: Usuario={
    id:'',
    nombre:'',
    imagen:''
  };

  constructor(private UsuarioService:UsuarioService, private router:Router, private activateRoute:ActivatedRoute) {
  }
  modificar(){

  }

  ngOnInit(): void {
    const id_entrada = <string>this.activateRoute.snapshot.params['id'];
    console.log('id_entrada:' + id_entrada );
  }


}
