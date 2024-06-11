import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../Model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  public getBook(pageNumber:number): Observable<IData> {
    return this.http.get<IData>(`https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=${pageNumber}`);
}
}
