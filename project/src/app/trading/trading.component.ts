import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent {
  pair: string = 'EUR/USD';
  account: string = 'Account2';
  type: string = 'SpotOutright';
  liquidity: string = 'OffVenue';
  banks = [
    { name: 'BANK1', spot: '1.0677', oneM: '18.095', sellEur: '1.0695695', buyEur: '1.0696365' },
    { name: 'BANK2', spot: '1.0677', oneM: '18.095', sellEur: '1.0695653', buyEur: '1.0696407' },
    { name: 'BANK3', spot: '1.0677', oneM: '18.078', sellEur: '1.0695678', buyEur: '1.0696482' },
    { name: 'BANK4', spot: '1.0676', oneM: '18.095', sellEur: '1.0695627', buyEur: '1.0696433' },
    { name: 'BANK5', spot: '1.0677', oneM: '18.127', sellEur: '1.0695627', buyEur: '1.0696333' },
  ];
  currentSellRate: string = '';
  currentBuyRate: string = '';
  
  ngOnInit() {
    this.updateRates();
  }
  updateRates() {
    // Assuming you take the first bank's rates for simplicity
    if (this.banks.length > 0) {
      this.currentSellRate = this.banks[0].sellEur;
      this.currentBuyRate = this.banks[0].buyEur;
    }
  }
  sell() {
    console.log('Sell EUR clicked');
    // Implement sell logic here
  }

  buy() {
    console.log('Buy EUR clicked');
    // Implement buy logic here
  }
}