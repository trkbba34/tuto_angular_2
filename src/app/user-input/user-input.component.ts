import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  entredInitialInvestment = signal('0');
  entredAnnualInvestment = signal('0');
  entredExpectedReturn = signal('5');
  entredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.entredAnnualInvestment(),
      duration: +this.entredDuration(),
      expectedReturn: +this.entredExpectedReturn(),
      annualInvestment: +this.entredAnnualInvestment(),
    });

    this.entredInitialInvestment.set('0');
    this.entredAnnualInvestment.set('0');
    this.entredExpectedReturn.set('5');
    this.entredDuration.set('10');
  }
}
