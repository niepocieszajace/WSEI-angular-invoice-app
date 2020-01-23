import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  @Input()
  clients;

  @Output()
  itemsChanged: EventEmitter<Client[]> = new EventEmitter<Client[]>();

  constructor() { }

  ngOnInit() {
  }

  removePosition(position: Client): void {
    this.clients = this.clients.filter(p => p !== position);
    this.itemsChanged.next(this.clients);
  }

}
