import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/clients/services/localstorage.service';
import { Client } from 'src/app/clients/models/client';

@Component({
  selector: 'app-client-selection',
  templateUrl: './client-selection.component.html',
  styleUrls: ['./client-selection.component.scss']
})
export class ClientSelectionComponent implements OnInit {

  clients: Client[];
  client: Client;

  constructor(private localstorage: LocalstorageService) { }

  ngOnInit() {
    this.clients = this.localstorage.getItems();
  }

}
