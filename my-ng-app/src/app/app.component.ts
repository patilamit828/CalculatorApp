import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string = '';
  op: string = '';
  constructor(){
  
  }

  buttonClick(event: any): void {    
    this.result += event.target.defaultValue;
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

    if (this.op != '') {
      console.log
      var res = this.result.split(this.op);
      switch (this.op) {
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
          this.result = this.div(...res).toString();
          break;
        default:
          this.op = '';

      }
    }
    
  }


  addNumbers(...nos: string []): number {
    let sum = 0;
    nos.forEach(n =>  sum += Number(n));
    return sum;
  }
  clear() {
     this.result = '';
     this.op = '';
  }  

  subNumber(...nos: string[]): number {
    return Number(nos[0])- Number(nos[1]);
  }

  multi(...nos: string[]): number {
    return Number(nos[0]) * Number(nos[1]);
  }

  div (...nos: string[]): number {
    return Number(nos[0]) / Number(nos[1]);
  }

  
}
