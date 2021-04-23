

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({ items: items, cssClass: 'e-round-corner' });

// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');


