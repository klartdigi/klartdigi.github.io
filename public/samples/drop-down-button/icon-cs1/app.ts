

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
// To initialize the DropDownButton with icon.
let drpDownBtn: DropDownButton = new DropDownButton({ iconCss: 'ddb-icons e-message', items: items }, '#iconbutton');
// To position the icon to the top of the text on a DropDownButton.
let dropDownBtnObj: DropDownButton = new DropDownButton({ iconCss: 'ddb-icons e-message', items: items, iconPosition: 'Top' }, '#iconpstn');


