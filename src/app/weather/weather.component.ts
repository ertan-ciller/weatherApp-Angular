import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherSearchForm!: FormGroup;
  weatherData:any;
  

  constructor(private weatherService:WeatherService, private formBuilder:FormBuilder) { }

  //baseUrl="http://api.weatherstack.com/current?access_key=e973a4b011189d6f9d68c72835f10aed&query=${formValues?.location}"
  
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({location:[""]})

    
  }

  getWeatherData(formValues:any){
    this.weatherService.getWeather(formValues.location).subscribe(data=>{
      this.weatherData=data;
      this.isCity();
    })
    
    

    //console.log(this.baseUrl);
    //console.log(formValues?.location); // input içine girilen değerimiz bu 
    

    //if(cityName==this.weatherService.getWeather(location))
 
  }
  isCity(){
    let cityName=this.weatherData?.success
    console.log(this.weatherData)
    console.log(cityName)
    if(cityName===false && cityName===false){
      alert("Geçersiz giriş")
    }

  }

  


}
