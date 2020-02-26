import { NgModule }           from '@angular/core';
import { MatTableModule }     from '@angular/material/table';
import { DatatableComponent } from './datatable.component';

@NgModule({

    declarations: [ DatatableComponent ],
    imports: [

        MatTableModule

    ],
    exports: [ DatatableComponent ]

})
export class DatatableModule {
}
