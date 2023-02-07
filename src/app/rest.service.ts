import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  public get (link:string){
    return this.http.get(link);
  }
}
