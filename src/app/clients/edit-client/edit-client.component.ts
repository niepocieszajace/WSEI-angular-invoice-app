import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../models/client';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  private clientData: Client;

  submitted = false;

  clientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private localstorage: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.clientData = params as Client;
      } else {
        this.router.navigate(['/clients']);
      }
    });

    this.clientForm = this.formBuilder.group({
      name: [this.clientData.name, Validators.required],
      address: [this.clientData.address, Validators.required],
      NIP: [this.clientData.NIP, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    });
  }

  get f() { return this.clientForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.clientData = {
      ...this.clientData,
      NIP: this.clientForm.value.NIP,
      address: this.clientForm.value.address,
      name: this.clientForm.value.name
    };

    if (this.clientForm.status === 'VALID') {
      this.localstorage.editItem(this.clientData);
      this.router.navigate(['/clients']);
    }
  }
}
