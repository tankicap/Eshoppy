import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
