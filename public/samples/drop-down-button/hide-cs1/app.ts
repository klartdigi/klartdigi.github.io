

import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items.
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

// To initialize the DropDownButton component without down arrow.
let drpDownBtn: DropDownButton = new DropDownButton({ items: items, cssClass: 'e-caret-hide' });
// Render initialized DropDownButton.
drpDownBtn.appendTo('#hide');



