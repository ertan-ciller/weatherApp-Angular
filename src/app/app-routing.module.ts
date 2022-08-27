import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [

  {path:'' , component:WeatherComponent, pathMatch:'full'}

];
=======

const routes: Routes = [];
>>>>>>> 87d735de43989df36bfcfc6cab46a460f85b8fea

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
