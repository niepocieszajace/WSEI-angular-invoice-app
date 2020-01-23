import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-date',
  templateUrl: './invoice-date.component.html',
  styleUrls: ['./invoice-date.component.scss']
})
export class InvoiceDateComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit() {
  }
}
