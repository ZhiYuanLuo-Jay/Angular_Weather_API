import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}

  getWeather(id:string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=11af49af7399e970dbc2d366ee679a1b`);
  }
  
  // getCakes(){
  //   // our http response is an Observable, store it in a variable
  //   return this._http.get('/cakes');
  // }

}
