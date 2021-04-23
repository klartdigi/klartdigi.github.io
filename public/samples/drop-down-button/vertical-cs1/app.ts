

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    },
    {
        text: 'Mark as Read'
    },
    {
        text: 'Like Message'
    }];

// To initialize the vertical DropDownButton.
let drpDownBtn: DropDownButton = new DropDownButton({ iconCss: 'ddb-icons e-message', cssClass: 'e-vertical', items: items, iconPosition: 'Top' }, '#iconbutton');


