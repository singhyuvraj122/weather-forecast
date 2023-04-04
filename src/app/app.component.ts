import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  data: WeatherData | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather("pune").subscribe(
      (response) => {
        this.data = response;

        console.log("Weather Data Response", response);
      },
      (error) => {
        console.log("Error : ", error.message);
      }
    )
  }
}
