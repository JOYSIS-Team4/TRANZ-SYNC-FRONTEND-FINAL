import { Component, Input, OnInit } from '@angular/core';
import { Parcel } from '../../models/parcel.model';

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrl: './view-parcel.component.css'
})
export class ViewParcelComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() viewMode= false;

  @Input() currentParcel: Parcel = {
    tracking_code: '',
    parcel_type: '',
    sender: '',
    sender_contact: '',
    sender_address: '',
    receiver: '',
    receiver_contact: '',
    receiver_address: '',
    status: ''
  }

}
