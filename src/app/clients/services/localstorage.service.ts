import { Injectable } from '@angular/core';
import { ILocalStorage } from '../models/localstorage';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements ILocalStorage {

  private KEY = 'clients';

  constructor() { }

  getItems(): Client[] {
    const list = !localStorage.getItem(this.KEY) ? [] : JSON.parse(localStorage.getItem(this.KEY));

    return Array.from(list);
  }

  setItems(items: Client[]) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
  }

  addItem(item: Client) {
    const arr = this.getItems();

    arr.push(item);
    this.setItems(arr);
  }

  editItem(item: Client) {
    const arr = this.getItems();

    const newArr = arr.map(x => x.id === item.id ? item : x);

    this.setItems(newArr);
  }
}
