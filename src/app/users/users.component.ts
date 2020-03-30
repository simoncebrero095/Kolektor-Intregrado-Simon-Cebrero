import { Component, OnInit } from "@angular/core";
import { AppServiceService } from "../service/app-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users;

  constructor(private servicio: AppServiceService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.servicio.getProducts().subscribe(
      respuesta => {
        this.users = respuesta;
        console.log(this.users);
      },
      error => console.log(error)
    );
  }
  See_more(i) {
    this.router.navigate(["/user/", i]);
  }
}
