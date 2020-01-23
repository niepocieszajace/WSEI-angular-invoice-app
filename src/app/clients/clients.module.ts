import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { SingleClientComponent } from './single-client/single-client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { EditClientComponent } from './edit-client/edit-client.component';

@NgModule({
  declarations: [ClientsComponent, ClientsListComponent, SingleClientComponent, NewClientComponent, EditClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ClientsModule { }
