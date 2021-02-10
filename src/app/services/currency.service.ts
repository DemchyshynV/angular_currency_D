import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ICurrency} from '../interfaces/currency.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';

  constructor(private httpClient: HttpClient) {
  }

  getByDate(date: string): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(`${this.URL}${date}&json`);
  }
}
