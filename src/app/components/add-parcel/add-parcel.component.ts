import { Component } from '@angular/core';
import { Parcel } from '../../services/models/parcel.model';
import { ParcelService } from '../../services/parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {

  parcel: Parcel = {
    tracking_code: '',
    parcel_type: '',
    sender: '',
    sender_contact: '',
    sender_address: '',
    receiver: '',
    receiver_contact: '',
    receiver_address: '',
    status: ''
  };
  submitted = false;

  constructor(private parcelService: ParcelService) { }

  saveParcel(): void {
    const data = {
      tracking_code: this.parcel.tracking_code,
      parcel_type: this.parcel.parcel_type,
      sender: this.parcel.sender,
      sender_contact: this.parcel.sender_contact,
      sender_address: this.parcel.sender_address,
      receiver: this.parcel.receiver,
      receiver_contact: this.parcel.receiver_contact,
      receiver_address: this.parcel.receiver_address,
      status: this.parcel.status
    };

    this.parcelService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newParcel(): void {
    this.submitted = false;
    this.parcel = {
      tracking_code: '',
      parcel_type: '',
      sender: '',
      sender_contact: '',
      sender_address: '',
      receiver: '',
      receiver_contact: '',
      receiver_address: '',
      status: ''
    };
  }

}