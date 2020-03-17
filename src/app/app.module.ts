import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//imprt HTTP client module, so that we can send HTTP requests
import { HttpClientModule } from '@angular/common/http';
//import forms module
import { FormsModule } from '@angular/forms';
//import material components
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
