import { Component, OnInit } from "@angular/core";
import { AppServiceService } from "../service/app-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  users;
  user;
  index;

  constructor(
    private servicio: AppServiceService,
    private route: ActivatedRoute
  ) { this.getIndex()
    
  }

  ngOnInit() {
    setTimeout(() => this.getProducts(), 2000);
  }
  getProducts() {
    this.servicio.getProducts().subscribe(
      respuesta => {
        this.users = respuesta;
        this.user = this.users[this.index];
        console.log(this.users[this.index]);
      },
      error => console.log(error)
    );
  }
  getIndex() {
    this.route.paramMap.subscribe(
      res => (this.index = parseInt(res.get("id")))
    );
  }
}
