import { Client } from './client';

export interface ILocalStorage {
  getItems(): Client[];

  setItems(items: Client[]);

  addItem(item: Client);
}
