import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Country} from '../model/country';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>(this.dataUrl);
  }
  getConfigResponse() {
    return this.http.get(this.dataUrl);
  }
}

