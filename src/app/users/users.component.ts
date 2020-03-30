import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';
import { User } from '../models/interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users
    
      constructor( 
      private servicio: AppServiceService
    ) { }
  
    ngOnInit(){
      this.getProducts()
    }
    getProducts(){
      this.servicio.getProducts().subscribe(
        respuesta => {
        this.users = respuesta;
        console.log(this.users)
        },
        error =>console.log(error)
      );}
    }