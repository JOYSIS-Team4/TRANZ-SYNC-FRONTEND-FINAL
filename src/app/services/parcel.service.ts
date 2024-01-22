import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parcel } from '../models/parcel.model';

const BASE_URL = 'http://localhost:3307/api/parcel'


@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(BASE_URL);
  }

  get(parcel_id: any): Observable<Parcel> {
    return this.http.get<Parcel>(`${BASE_URL}/${parcel_id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(BASE_URL, data);
  }

  update(parcel_id: any, data: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${parcel_id}`, data);
  }

  delete(parcel_id: any): Observable<any> {
    return this.http.delete(`${BASE_URL}/${parcel_id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(BASE_URL);
  }

  findByTrackingCode(tracking_code: any): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(`${BASE_URL}?tracking_code=${tracking_code}`);
  }


}
