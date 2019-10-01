import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../shared/interfaces";
import { DataService } from '../core/data.service';


@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html"
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[]; //TODO: AHORA PEOPLE TIENE QUE MATCH CON 'ICustomer', buena practica

  constructor(private dataService: DataService) { }

  ngOnInit() {// CUANDO SE INICIA EL COMPONENTE HAZME... : 
    this.title = "Customers";
    /**
     *UNA VEZ QUE SE INICIE EL COMPONENTE ENTONCES INICIA EL SERVICIO
     * QUE TENDRÁ QUE SUSCRIBIRSE Y RECIBIR UN `customers` QUE SERÁ EL RESULTADO
     * DE METERLO LOS 'people' dentro.     */
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);

  }
}
