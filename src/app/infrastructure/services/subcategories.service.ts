import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {
  url = 'https://static.compragamer.com/test/'
  constructor(private http: HttpClient) { }
  getSubcategoriesData(): Observable<Object> {
    return this.http.get(this.url + 'subcategorias.json')
  }
}
