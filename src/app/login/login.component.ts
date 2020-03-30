import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AppServiceService } from '../service/app-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    
  @ViewChild('myUser', {static: true}) myUser: ElementRef;
  @ViewChild('myPass', {static: true}) myPass: ElementRef;
  constructor(private router: Router,private appservice:AppServiceService) {} 

  usuarioOriginal = "test";
  contrasenaOriginal = "123";
  ngOnInit(): void {}
    

   Validar() {

     let inputValue = this.myUser.nativeElement.value;
     let passValuer = this.myPass.nativeElement.value;
     
     if(inputValue == this.usuarioOriginal && passValuer == this.contrasenaOriginal)
     {
      this.appservice.autorizar = true
      this.router.navigate(['/users'])
     }
     else{
       alert(';)')
     }    

    }
    } 
