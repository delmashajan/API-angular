import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { UsDataComponent } from './us-data/us-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes:Routes = [

  {

    path: "",

    component: UserDataComponent

  },

  {

    path: "passenger",

    component: ViewPassengerComponent

  },

  {

    path: "usPublic",

    component: UsDataComponent

  },

  {

    path:"userInfo",

    component:UserInfoComponent

  },

  {

    path:"productList",

    component:ProductListComponent

  },

  {

    path:"todo",

    component:ToDoComponent

  },
  {

    path:"quotes",

    component:ViewQuotesComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    UsDataComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    ToDoComponent,
    ViewQuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
