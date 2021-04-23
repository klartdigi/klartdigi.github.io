

import { SplitButton, SplitButtonModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let menuOptions: SplitButtonModel = {
        target: '#dropdowntarget',
        iconCss: 'e-sb-icons e-color',
    };

let splitBtn: SplitButton = new SplitButton(menuOptions, '#action');



