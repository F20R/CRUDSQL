import {Component, OnInit} from '@angular/core';
import {UsuarioService, Usuario} from "../../Services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  ListarUsuario:Usuario[ ]= [ ];
  constructor(private UsuarioService: UsuarioService, private router:Router) {
  }
  ngOnInit(): void {
    this.listarUsuario();
  }


  listarUsuario(){
    this.UsuarioService.getUsuarios().subscribe(
      res=>{
        console.log(res)
        this.ListarUsuario=<any>res;
      },
      err => console.log(err)
    )
  }

  eliminar(id:string){
    this.UsuarioService.deleteUsuario(id).subscribe(
      res=>{
        console.log('usuario eliminado!');
        this.listarUsuario();
      },
      err=> console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/:id'+id]);
  }
}
