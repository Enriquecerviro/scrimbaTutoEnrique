import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';
import { from } from 'rxjs';

@NgModule({
    imports: [],
    providers: [DataService, SorterService]
})
export class CoreModule{}