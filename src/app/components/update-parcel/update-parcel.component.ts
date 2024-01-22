import { Component } from '@angular/core';
import { Parcel } from '../../services/models/parcel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcelService } from '../../services/parcel.service';

declare let bootstrap: any;


@Component({
  selector: 'app-update-parcel',
  templateUrl: './update-parcel.component.html',
  styleUrl: './update-parcel.component.css'
})
export class UpdateParcelComponent {


  parcel: Parcel | null = null;
  currentParcel: any;


  constructor(
    private route: ActivatedRoute,
    private parcelService: ParcelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const parcelId = params.get('id');
      if (parcelId) {
        this.parcelService.get(parcelId).subscribe(
          data => {
            this.parcel = data;
          },
          error => console.error(error)
        );
      }
    });
  }

  updateParcel(): void {
    if (confirm("Are you sure you want to update this parcel?")) {
      if (this.parcel && this.parcel.parcel_id) {
        this.parcelService.update(this.parcel.parcel_id, this.parcel).subscribe(
          response => {
            console.log("Parcel updated successfully");
            // Navigate back to the list of parcels

          this.router.navigate(['/index']);
            
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.error("Parcel data is incomplete");
      }
    }
  }
  



}
