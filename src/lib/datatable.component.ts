import { Component, Input } from '@angular/core';
import { Datatable }        from './datatable';

@Component({

    selector: 'datatable',
    template: `
        <p>
            datatable works!
        </p>
    `,
    styleUrls: [ 'datatable.component.scss' ]

})
export class DatatableComponent {

    @Input() public config: Datatable;

}
