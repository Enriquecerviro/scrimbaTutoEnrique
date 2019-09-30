import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DataService } from './dataservice';
import { SorterService } from './sortservice';
import { from } from 'rxjs';

@NgModule({
    imports: [],
    providers: [DataService, SorterService]
})
export class CoreModule{}