import { Injectable } from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,Router} from "@angular/router";
import { Observable } from "rxjs";
import { AppServiceService } from "../service/app-service.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private appservice: AppServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.appservice.autorizar) {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
  }
}
