import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AppServiceService } from './service/app-service.service';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
