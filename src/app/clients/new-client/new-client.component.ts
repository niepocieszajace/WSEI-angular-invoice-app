import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Client } from '../models/client';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  clientForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private localstorage: LocalstorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
    });


    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      NIP: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
    });
  }

  get f() { return this.clientForm.controls; }

  private generateID(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  onSubmit() {
    const item: Client = {
      id: this.generateID(),
      name: this.clientForm.value.name,
      address: this.clientForm.value.address,
      NIP: this.clientForm.value.NIP
    };

    this.submitted = true;

    if (this.clientForm.status === 'VALID') {
      this.localstorage.addItem(item);
      this.router.navigate(['/clients']);
    }

  }

}
