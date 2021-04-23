

import { DropDownButton, ItemModel, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items.
let items: ItemModel[] = [
    {
        text: 'New tab'
    },
    {
        text: 'New window'
    },
    {
        text: 'New incognito window'
    },
    {
        separator: true
    },
    {
        text: 'Print'
    },
    {
        text: 'Cast'
    },
    {
        text: 'Find'
    }];

// Initialize DropDownButton options.
let options: DropDownButtonModel = {
  items: items,
  iconCss: 'e-icons e-menu',
  cssClass: 'e-caret-hide'
};

// To initialize the icon only DropDownButton.
let drpDownBtn: DropDownButton = new DropDownButton(options);
drpDownBtn.appendTo('#icononly');


