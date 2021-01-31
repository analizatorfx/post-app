import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const WEATHER_ENDPOINT = "/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(
    private  http: HttpClient
  ) { }


}
