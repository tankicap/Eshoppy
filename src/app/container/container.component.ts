import { Component } from '@angular/core';
import { Products_bd } from './products';
import { ProductComponent } from "./product/product.component";
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from '../filterpipe.pipe';
import { Product } from './product/product.model';
@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [ProductComponent, FormsModule, FilterpipePipe]
})
export class ContainerComponent {
  products=Products_bd;
  filterText = '';

  selectedProduct?: Product
  openModal(product: any): void {
    this.selectedProduct = product;
    const modal = document.getElementById('productModal');
    if(modal){
    modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('productModal');
    if(modal){
    modal.style.display = 'none';
    }
  }

    get ImagePath(){
      return 'pictures/'+this.selectedProduct?.picture;
    }
    
}
