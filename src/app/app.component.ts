import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {CurrencyService} from './services/currency.service';
import {ICurrency} from './interfaces/currency.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date = new Date();
  currencies: ICurrency[];

  constructor(private datePipe: DatePipe, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    const stringData = this.datePipe.transform(this.date, 'yyyyMMdd');
    this.currencyService.getByDate(stringData).subscribe(value => this.currencies = value);
  }

  dec(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() - 1));
    this.ngOnInit();
  }
}
