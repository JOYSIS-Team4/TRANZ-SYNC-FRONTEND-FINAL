import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Parcel } from './models/parcel.model';

const BASE_URL = 'http://127.0.0.1:3307/api/parcel'


@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  httpClient: any;
  updateParcel(currentParcel: Parcel | null) {
    throw new Error('Method not implemented.');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(BASE_URL);
  }

  get(parcel_id: any): Observable<Parcel> {
    return this.http.get<Parcel>(`${BASE_URL}/${parcel_id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  create(data: any): Observable<any> {
    return this.http.post<Parcel>(`${BASE_URL}`,JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(parcel_id: any, data: any): Observable<any> {
    return this.http.put(`${BASE_URL}/${parcel_id}`, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
      );
  }

  delete(parcel_id: any): Observable<any> {
    return this.http.delete<void>(`${BASE_URL}/${parcel_id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteAll(): Observable<any> {
    return this.http.delete(BASE_URL);
  }

  findByTrackingCode(tracking_code: any): Observable<Parcel[]> {
    return this.http.get<Parcel[]>(`${BASE_URL}?tracking_code=${tracking_code}`);
  }

  errorHandler(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
