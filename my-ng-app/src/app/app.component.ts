import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string = '';
  num1: number = 0;
  num2: number = 0;
  op: string = '';
  constructor(){
  
  }

  buttonClick(event: any): void {
    
    this.result += event.target.defaultValue;
    
    if(this.op !=''){
      console.log
      var res = this.result.split(this.op);
      switch(this.op){
        case '+':
          this.result = this.addNumbers(...res).toString();
          break;
        case '-':
          this.result = this.subNumber(...res).toString();
          break;
        case 'X':
          this.result = this.multi(...res).toString();
          break;
        case '/':
          this.result= this.div(...res).toString(); 
          break;
        default:
          this.op = '';     

      }
    }
  }

  setOperator (event: any): void {
    this.result = this.result + event.target.defaultValue;
    this.op = event.target.defaultValue;
  }

  equalTo(): void {

    // if(this.result.length != 0 && this.result != ''){
      
    //   var res = this.result.split(this.op);
    //   if(res.length >= 2){
    //     this.result = this.addNumbers(...res).toString();
    //     // this.num1 = Number(res[0]);
    //     // this.num2 = Number(res[1]);
    //     // var sum = this.num1 + this.num2;
    //     // this.result = sum.toString();
    //   }
      
      
    // }
    
  }


  addNumbers(...nos: string []): number {
    let sum = 0;
    nos.forEach(n =>  sum += Number(n));
    return sum;
  }
  clear() {
     this.result = '';
  }  

  subNumber(...nos: string[]): number {
    console.log(nos[0], nos[1])
    let sum = 0;
    nos.forEach(n => sum -= Number(n));
    return sum;
  }

  multi(...nos: string[]): number {
    let sum = 0;
    nos.forEach(n => sum *= Number(n));
    return sum;
  }

  div (...nos: string[]): number {
    let sum = 0;
    nos.forEach(n => sum /= Number(n));
    return sum;
  }

  
}
