import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CustomerService {
    baseUrl = 'https://api.apispreadsheets.com/data/plxky7g0smahLPmW/'
    constructor(private http: HttpClient) { }

    postCustomerFeedback(data: any) {
        return lastValueFrom(this.http.post<any>(`${this.baseUrl}`, data));
    }

    getCustomerFeedback() {
        return lastValueFrom(this.http.get<any>(`${this.baseUrl}`));
    }
}
