

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Edit',
        iconCss: 'ddb-icons e-edit'
    },
    {
        text: 'Delete',
        iconCss: 'ddb-icons e-delete'
    },
    {
        text: 'Mark As Read',
        iconCss: 'ddb-icons e-read'
    },
    {
        text: 'Like Message',
        iconCss: 'ddb-icons e-like'
    }];

//To initialize the DropDownButton.
let drpDownBtn: DropDownButton = new DropDownButton({ iconCss: 'ddb-icons e-message', items: items }, '#iconbutton');



