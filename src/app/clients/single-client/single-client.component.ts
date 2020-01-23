import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-single-client]',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.scss']
})
export class SingleClientComponent implements OnInit {

  @Input()
  client: Client;
  @Input()
  index: number;

  @Output()
  private itemRemoved: EventEmitter<Client> = new EventEmitter<Client>();

  constructor(public router: Router) { }

  ngOnInit() {
  }

  removePosition(): void {
    this.itemRemoved.next(this.client);
  }

  edit() {
    this.router.navigate([`/clients/edit`], { queryParams: this.client, skipLocationChange: true });
  }

}
