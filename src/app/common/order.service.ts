import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BehaviorSubject<GridDataResult>{
  public loading: boolean;
  private BASE_URL = "http://localhost:8082/getAllOrders";
  constructor(private http: HttpClient) {
    super(null);
   }
   public query(): void {
     this.loading = false;
     this.http.get(`${this.BASE_URL}`).pipe(
       map(response => response as GridDataResult),
       tap(() => this.loading = false)
     ).subscribe(x => super.next(x));
   }
}
