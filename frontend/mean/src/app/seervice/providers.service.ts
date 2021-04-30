import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProviderClass } from '../models/providers.class';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  // end point
  apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  //get all records
  getProviders():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  //post
  addProvider(newProvider:ProviderClass):Observable<any>{
    return this.http.post(this.apiUrl,newProvider);
  }
}
