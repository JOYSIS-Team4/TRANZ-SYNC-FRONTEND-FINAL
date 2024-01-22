import { Component, OnInit } from '@angular/core';
import { Parcel } from '../../services/models/parcel.model';
import { ParcelService } from '../../services/parcel.service';

@Component({
  selector: 'app-get-all-parcels',
  templateUrl: './get-all-parcels.component.html',
  styleUrls: ['./get-all-parcels.component.css']
})
export class GetAllParcelsComponent implements OnInit {

  selectedParcel: Parcel | null = null;
 

  printReceipt(_t37: Parcel) {
    throw new Error('Method not implemented.');
  }
  

  updateParcel(_t37: Parcel) {
    throw new Error('Method not implemented.');
  }
  
  viewParcel(parcel: Parcel): void {
    this.selectedParcel = parcel;
    // Optionally, if using a modal or similar, trigger it to open here
  }

  parcels: Parcel[] = [];
  currentParcel: Parcel = {};
  currentIndex = -1;
  tracking_code = '';
  filteredParcels: Parcel[] = [];
  searchTerm: string = '';

  constructor(private parcelService: ParcelService) { }

  delete(parcelId: string): void {
    if(confirm("Are you sure you want to delete this parcel?")) {
      this.parcelService.delete(parcelId).subscribe(
        response => {
          console.log("Parcel deleted successfully");
          // Optionally refresh the list or navigate away
          this.retrieveParcels(); // Assuming you have a method to refresh the parcels list
        },
        error => console.error(error)
      );
    }
  }
  loadParcels() {
    throw new Error('Method not implemented.');
  }

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

  searchParcels(): void {
    if (!this.searchTerm) {
      this.filteredParcels = this.parcels;
    } else {
      this.filteredParcels = this.parcels.filter(parcel =>
        parcel && parcel.tracking_code && parcel.tracking_code.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
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

  

}