import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from "@angular/material/icon"
import { ChartsModule } from 'ng2-charts';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { LoginComponent } from './views/login/login.component';
import { PiechartComponent } from './components/piechart/piechart.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule,MatCardModule, MatOptionModule, MatSelectModule,MatFormFieldModule, MatInputModule} from '@angular/material';
import { DashboardpComponent } from './views/dashboardp/dashboardp.component';

import {DataService} from '../app/service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    LoginComponent,
    PiechartComponent,
    DashboardpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ChartsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule, 
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
