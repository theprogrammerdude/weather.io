import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  baseUrlForecast: string = 'https://api.openweathermap.org/data/2.5/forecast';
  aqiUrl: string = 'http://api.openweathermap.org/data/2.5/air_pollution';

  API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, long: number) {
    var url = `${this.baseUrl}?units=metric&lat=${lat}&lon=${long}&appid=${this.API_KEY}`;

    return this.http.get(url);
  }

  getHourly(lat: number, long: number) {
    var url = `${this.baseUrlForecast}?units=metric&cnt=5&lat=${lat}&lon=${long}&appid=${this.API_KEY}`;

    return this.http.get(url);
  }
}
