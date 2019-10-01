import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';
import { from } from 'rxjs';

@NgModule({
    imports: [HttpClientModule],
    providers: [DataService, SorterService]
})
export class CoreModule{}