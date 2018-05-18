import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  locWeather: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ){}
  
  ngOnInit() {
    this.getCityWeather();
  }

  getCityWeather(){
    let cityObserable = this._httpService.getWeather("4887398");
    cityObserable.subscribe(urldata => {
      // console.log("Got data from Url", urldata);
      this.locWeather = { 
        humidity:urldata['main'].humidity,
        average: Math.floor((urldata['main'].temp - 273.15) * 9 / 5 + 32),
        high: Math.floor((urldata['main'].temp_max - 273.15) * 9 / 5 + 32),
        low: Math.floor((urldata['main'].temp_min - 273.15) * 9 / 5 + 32),
        status: urldata['weather'][0].description,
        name: urldata['name']
       }
       console.log("Got data from Url", this.locWeather);
    })
  }


}
