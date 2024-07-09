import { Component } from '@angular/core';
import { Products_bd } from './products';
import { ProductComponent } from "./product/product.component";
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from '../filterpipe.pipe';
@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [ProductComponent,FormsModule,FilterpipePipe]
})
export class ContainerComponent {
  products=Products_bd;
  filterText = '';

}
