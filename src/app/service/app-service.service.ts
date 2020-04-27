import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
autorizar:boolean;

  URL = "http://127.0.0.1:8882/usuarios";

  constructor(private http:HttpClient) { }
  
  getProducts() {
    return this.http.get<any[]>(this.URL);
  }

}