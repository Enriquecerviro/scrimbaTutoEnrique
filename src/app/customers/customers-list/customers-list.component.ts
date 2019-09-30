import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

import { ICustomer } from "../../shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: any[] = []; //ENCONTRAR LA MANERA PARA PASARLE LOS DATOS DEL COMPONENTE PADRE
  customersOrderTotal: number;
  currencyCode: string = "EUR";

  constructor() {}
  ngOnInit() {}

  private _customers: ICustomer[] = [];

  @Input()
  get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  /**
   *Este método busca letra por letra coincidencias para mostrarlas
   * @param data la que introducimos en la barra de búsqueda.
   */
  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  /**
   * CALCULA EL TOTAL DE ORDER DE CADA CUSTOMER
   * LO USAMOS EN c-list.c.html COMO FILA PARA
   * INDICAR EL TOTAL DE TODOS(?) LOS PEDIDOS
   */
  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  /**
   * Shorter Service to sort
   * @param prop viene de c-l.c.html -> "sort('orderTotal')"
   */
  sort(prop: string) {}
}
