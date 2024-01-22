import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GetAllParcelsComponent } from './components/get-all-parcels/get-all-parcels.component';
import { ViewParcelComponent } from './components/view-parcel/view-parcel.component';
import { UpdateParcelComponent } from './components/update-parcel/update-parcel.component';
import { AdminComponent } from './page-sections/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent},
  { path: 'index', component: GetAllParcelsComponent},
  { path: 'add-parcel', component: AdminComponent },
  { path: 'view-parcel', component: ViewParcelComponent },
  { path: 'update-parcel', component: UpdateParcelComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
