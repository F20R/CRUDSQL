import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/api';
  constructor(private http:HttpClient) { }

  getUsuarios()
  {
    return this.http.get(this.url);
  }

  getUnUsuario(id:string){
    return this.http.get(this.url+'/'+id)
  }

  addUsuario(usuario:Usuario){
    return this.http.post(this.url, usuario);
  }
  deleteUsuario(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  editUsuario(id:string, usuario:Usuario){
    return this.http.put(this.url+'/'+id, usuario);
  }
}


export interface Usuario{
  id?:string;
  nombre?:string;
  imagen?:string;
}
