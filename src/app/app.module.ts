import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ViewParcelComponent } from './components/view-parcel/view-parcel.component';
import { GetAllParcelsComponent } from './components/get-all-parcels/get-all-parcels.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateParcelComponent } from './components/update-parcel/update-parcel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './page-sections/header/header.component';
import { FooterComponent } from './page-sections/footer/footer.component';
import { ContactUsComponent } from './page-sections/contact-us/contact-us.component';
import { AdminComponent } from './page-sections/admin/admin.component';
import { MainBodyComponent } from './page-sections/main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AddParcelComponent,
    ViewParcelComponent,
    GetAllParcelsComponent,
    UpdateParcelComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AdminComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
