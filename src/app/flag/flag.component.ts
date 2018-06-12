import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {CountdownModule} from 'ngx-countdown';
@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagComponent implements OnInit {
  randomNationName=[];
  randomNationISOCode;
  myGuess;
  canswer;
  number;
  mode=true;
  points=0;
  tasks=['','','',''];
  flagfinal;
  constructor(public cService:CountriesService) { }

  ngOnInit() {
   
  }
  next(){
    let arr=[];
    let i=0;
    let countries =this.cService.getCountries();
while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*249);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    this.randomNationName[i]=countries[randomnumber];
    i=i+1;
    
    this.mode=false;
}


/*let random=Math.floor(Math.random()*countries.length);
console.log(random);
this.randomNationName[3]=countries[random].name;
this.randomNationISOCode=countries[random]['alpha-2'];*/
this.canswer=Math.floor(Math.random()*4);
 this.flagfinal = this.randomNationName[this.canswer]['alpha-2']


  }

score(i){
  console.log(i,this.points);
  let countries =this.cService.getCountries();
  if(this.flagfinal == this.randomNationName[i]['alpha-2'])
  {
    this.points=this.points+10;
  }
  else{
    this.points=this.points-10;
  }
   
  this.next();
}
restart(){
  this.mode=true;
  this.points=0;
  this.randomNationName=[];
  this. flagfinal=0;

}
finish(){
  this.mode=true;
  this.randomNationName=[];
  this. flagfinal=0;
  alert("Timeout!!Your score is:"+ this.points);
  location.reload();
}
}
