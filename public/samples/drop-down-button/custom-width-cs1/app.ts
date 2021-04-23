

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Find'
    },
    {
        text: 'Replace'
    },
    {
        text: 'Go To'
    },
    {
        text: 'Go To Special'
    }];

// To initialize DropDownButton with `e-custom` class.
let drpDownBtn: DropDownButton = new DropDownButton({
    iconCss: 'e-icons e-search',
    cssClass: 'e-custom',
    items: items,
    iconPosition: 'Top'
    }, '#iconbutton'
);


