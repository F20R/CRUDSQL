import {Component, OnInit} from '@angular/core';
import {RestService} from "./rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Crud';
  public listadeVideos:any= []
  constructor(private RestService:RestService) {
  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get('http://127.0.0.1:8000/api/user').subscribe(respuesta =>{
      this.listadeVideos = respuesta;
    })
  }

}
