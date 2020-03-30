import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
autorizar:boolean;

  URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
  
  getProducts() {
    return this.http.get(this.URL);
  }
}