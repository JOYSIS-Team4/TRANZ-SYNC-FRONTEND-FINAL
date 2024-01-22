import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Parcel } from '../../services/models/parcel.model';
import { ActivatedRoute } from '@angular/router';
import { ParcelService } from '../../services/parcel.service';

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrl: './view-parcel.component.css'
})
export class ViewParcelComponent implements OnInit, AfterViewInit{

  currentParcel: Parcel |  undefined;

  constructor(private route: ActivatedRoute, private parcelService: ParcelService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const parcelId = params.get('id');
      if (parcelId) {
        this.getParcelDetails(parcelId);
      }
    });
  }

  getParcelDetails(parcelId: string): void {
    // Call your service method to retrieve parcel details
    // For example:
    this.parcelService.get(parcelId).subscribe(
      (data: Parcel) => {
        this.currentParcel = data;
      },
      error => console.error(error)
    );
  }

  


}
