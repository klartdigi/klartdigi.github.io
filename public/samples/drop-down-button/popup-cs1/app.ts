

import { DropDownButton, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize DropDownButton options.
let menuOptions: DropDownButtonModel = {
        target: '#target',
        iconCss: 'e-icons e-table',
        iconPosition: 'Top',
        cssClass: 'e-vertical'
    };

// To initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(menuOptions, '#action');



