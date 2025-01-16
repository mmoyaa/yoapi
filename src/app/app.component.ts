import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yoapi';
http = inject(HttpClient)
products: Products[]=[];


ngOnInit(){
this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
.subscribe((data)=> {
this.products= data;
console.log(data);

})

}

}
