import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Chiquito de la calzada";
  name2 = "chiQuiTo de lA CalZada";

  array = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salary = 1234.5;

  hero = {
  	name: "Logan",
  	key: "Wolverine",
  	age: 500,
  	address:{
  		street: "first",
  		number: 1
  	}
  };

  video: string = "pBkHHoOIIn8";
  enable: boolean = true;

  promiseValue = new Promise((resolve,reject)=>{
  	setTimeout(()=>resolve("My data!"),3500);
  })

  date = new Date();

}
