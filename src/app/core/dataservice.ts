import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of, from } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ICustomer, IOrder } from "../../app/shared/interfaces";
import { Icu } from "@angular/compiler/src/i18n/i18n_ast";

@Injectable()
export class DataService {
  /**
   * SI TRABAJAMOS CON FORMATO JSON DA IGUAL
   * DE DONDE VENGA, CON TAL DE SETTEAR BIEN
   * LA BASE URL SERÍA SUFICIENTE.
   */
  baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  /**
   * Mth. que devuelve los clientes, accede a 
   * la URL y al estar en JSON observable es 
   * buena manera de hacerlo.
   */
  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + "customers.json")
      .pipe(catchError(this.handleError));
  }

  /**
   * 
   */
  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + "customers.json").pipe(
      map(customers => {
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        return customer && customer.length ? customer[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + "orders.json").pipe(
      map(orders => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || "Node.js server error");
  }
}
