import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) { }

  public doRegistration(tourist : Tourist){
    return this.http.post("http://localhost:9191/tourist/addtourist",tourist,{responseType: 'text' as 'json'});
  }
  public getUsers(){
    return this.http.get("http://localhost:9191/tourist/gettourist")
  }
}
