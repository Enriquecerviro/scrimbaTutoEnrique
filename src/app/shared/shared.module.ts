import { NgModule } from '@angular/core' ;

import { CapitalizePipe } from './capitalize.pipe';
import { from } from 'rxjs';


@NgModule({
    declarations: [CapitalizePipe],
    exports: [CapitalizePipe]
})

export class SharedModule {}