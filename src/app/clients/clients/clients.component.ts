import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList;

  constructor(private localstorage: LocalstorageService) { }

  ngOnInit() {
    this.clientList = this.localstorage.getItems();
  }

  updateItems(items) {
    this.localstorage.setItems(items);
  }
}
