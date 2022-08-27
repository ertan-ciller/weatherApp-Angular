import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  
  getWeather(location:string){
    
  
  return this.http.get("http://api.weatherstack.com/current?access_key=38aa1db888cb3f43048609dee3ee2aea&query="+location)

  }
}
