import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LocationService } from './services/location.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather.io';

  coords: any = {};
  weatherData: any = {};

  constructor(private location: LocationService, private api: ApiService) {}

  ngOnInit() {
    this.location.getPosition().then((data) => {
      this.coords = data;

      this.api
        .getWeatherData(this.coords.lat, this.coords.lng)
        .subscribe((data) => {
          this.weatherData = data;
        });
    });
  }
}
