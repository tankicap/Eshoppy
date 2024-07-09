import { Component } from '@angular/core';
import { Products_bd } from './products';
import { ProductComponent } from "./product/product.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [ProductComponent]
})
export class ContainerComponent {
  products=Products_bd;

}
