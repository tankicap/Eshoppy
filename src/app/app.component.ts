import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import {  Products_bd } from './products';
import { ProductComponent } from "./product/product.component";
import { Product } from './product/product.model';
import { ContainerComponent } from "./container/container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, MainComponent, ProductComponent, ContainerComponent]
})
export class AppComponent {
  title = 'nov';
  products=Products_bd;

  
  
}
