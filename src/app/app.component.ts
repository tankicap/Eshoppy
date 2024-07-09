import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import {  Products_bd } from './products';
import { ProductComponent } from "./product/product.component";
import { Product } from './product/product.model';
import { ContainerComponent } from "./container/container.component";
import * as AOS from 'aos';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, MainComponent, ProductComponent, ContainerComponent,RouterLink]
})
export class AppComponent implements OnInit{
  title = 'nov';
  products=Products_bd;

  ngOnInit() {
    AOS.init();
  }
  
}
