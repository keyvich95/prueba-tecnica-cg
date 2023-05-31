import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://static.compragamer.com/test/';
  constructor(private http: HttpClient) { }
  getProductsData(): Observable<Object> {
    return this.http.get(this.url + 'productos.json');
  }
}
