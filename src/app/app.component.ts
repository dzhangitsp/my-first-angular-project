import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import {products} from './products';
import {CategoriesService} from './common/northwind.service';
import {State} from '@progress/kendo-data-query';
import { OrderService } from './common/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  public columns: any[] = [
    {field: 'orderId'},
    {field: 'processed'},
    {field: 'createDate'},
    {field: 'updateDate'}
];
  public bindingType = 'array';
  public view: Observable<GridDataResult>;
  public orderView: Observable<GridDataResult>;
  public gridData: any = products;
  public gridDataResult: GridDataResult = {
    data: products,
    total: products.length
  }
  constructor(private service: CategoriesService, private orderService: OrderService) {
    this.view = service;
    this.orderView = orderService;
  }
  ngOnInit() {

  }
  ngOnDestroy() {
  }
  changeBindingType(e) {
    switch (this.bindingType) {
      case'array' : {
        this.columns = [
          {field: 'orderId'},
          {field: 'processed'},
          {field: 'createDate'},
          {field: 'updateDate'}
        ];
        this.gridData = products;
        break;
      }
      case 'gridDataResult': {
        this.columns = [
          {field: 'orderId'},
          {field: 'processed'},
          {field: 'createDate'},
          {field: 'updateDate'}
        ];
        this.gridData = this.gridDataResult;
        break;
      }
      case 'async' : {
        const state: State = {skip: 0, take: 100};
        this.columns = [
          {field: 'orderId'},
          {field: 'processed'},
          {field: 'createDate'},
          {field: 'updateDate'}
        ];
        this.orderService.query();
        this.orderView.subscribe(res => this.gridData = res);
        break;
      }
    }
  }
}
