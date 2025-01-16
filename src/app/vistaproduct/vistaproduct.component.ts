import { Component, Input } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-vistaproduct',
  templateUrl: './vistaproduct.component.html',
  styleUrls: ['./vistaproduct.component.css']
})
export class VistaproductComponent {
  @Input()products!:Products;

}
