import { Component, OnInit}  from '@angular/core';
import { Payment } from './payment';
@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.component.html',
  styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isPressed: boolean = false;
  loanValue: number = 300;
  incomeValue: number = 245;
  deptorsValue: number = 245;
  loanAmount:number=1000;
  period: number = 12;
  annualRate: number = 0.16;
  ifalone: boolean = true;
  list: Payment[];
  constructor() { }
  ngOnInit() {
    console.log('onInit');
  }
  showValue(loanValue: number, loanPeriodYears:number) {
    this.period = loanPeriodYears*12;
    this.isPressed=true;
    this.loanAmount = this.loanValue;
    this.list = [];
    let r = this.annualRate / this.period;
    let monthlyPayment = 0;
    let monthlyInterest = 0;
    let leftValue = this.loanValue - this.loanValue * 0.15;
    monthlyPayment = this.calculateMonthlyPayment(leftValue, this.period);
    for (let i: number = 1; i <= this.period; i++)
    {
      monthlyInterest = this.calculateMonthlyInterest(leftValue);
      this.list.push(new Payment(i, leftValue, monthlyPayment + 0.70, monthlyInterest, 0.70));
      leftValue = leftValue - (monthlyPayment - monthlyInterest);
    }
    console.log(this.list);
    //return this.list;
  }
  changeMarriedStateToAlone()
  {
    this.ifalone = true;
  }
  changeMarriedStateToMarried()
  {
    this.ifalone = false;
  }
  calculateMonthlyPayment(lvalue: number, period: number)
  {
    return lvalue * (0.16/this.period) / (1 - Math.pow((1 + 0.16/this.period) , (this.period * -1)));
  }
  calculateMonthlyInterest(lvalue: number)
  {
    return lvalue * 0.16/this.period;
  }
}
