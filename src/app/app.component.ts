import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { ProductComponent } from "./container/product/product.component";
import { ContainerComponent } from "./container/container.component";
import * as AOS from 'aos';
import { FooterComponent } from "./footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, MainComponent, ProductComponent, ContainerComponent, FooterComponent]
})
export class AppComponent implements OnInit{
  title = 'nov';

  ngOnInit() {
    AOS.init();
  }
  
}
