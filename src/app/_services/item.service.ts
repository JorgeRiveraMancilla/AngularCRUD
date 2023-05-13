import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment.development";
import { Item } from "../_models/item";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Message} from "../_models/message";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl: string = environment.apiUrl;
  items: Item[] = [];

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'form').pipe(
      map(items => {
        this.items = items;
        return items;
      })
    )
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this.baseUrl + 'form/' + id);
  }

  createItem(model: any): Observable<Item> {
    return this.http.post<Item>(this.baseUrl + 'form', model).pipe(
      map(element => {
        return element;
      })
    );
  }

  deleteItem(id: number): Observable<Message> {
    return this.http.delete<Message>(this.baseUrl + 'form/' + id).pipe(
      map(message => {
        return message;
      })
    );
  }

  updateItem(item: Item) {
    return this.http.put<Message>(this.baseUrl + 'form/' + item.id, item).pipe(
      map(message => {
        return message;
      })
    );
  }
}
