import { Component, OnInit } from '@angular/core';
import { Parcel } from '../../models/parcel.model';
import { ParcelService } from '../../services/parcel.service';

@Component({
  selector: 'app-get-all-parcels',
  templateUrl: './get-all-parcels.component.html',
  styleUrls: ['./get-all-parcels.component.css']
})
export class GetAllParcelsComponent implements OnInit {

  parcels?: Parcel[];
  currentParcel: Parcel = {};
  currentIndex = -1;
  tracking_code = '';

  constructor(private parcelService: ParcelService) { }

  ngOnInit(): void {
    this.retrieveParcels();
  }

  retrieveParcels(): void {
    this.parcelService.getAll()
      .subscribe({
        next: (data) => {
          this.parcels = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveParcels();
    this.currentParcel = {};
    this.currentIndex = -1;
  }

  setActiveParcel(parcel: Parcel, index: number): void {
    this.currentParcel = parcel;
    this.currentIndex = index;
  }

  removeAllParcels(): void {
    this.parcelService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTrackingCode(): void {
    this.currentParcel = {};
    this.currentIndex = -1;

    this.parcelService.findByTrackingCode(this.tracking_code)
      .subscribe({
        next: (data) => {
          this.parcels = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}