

import { DropDownButton, ItemModel, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Display Settings'
    },
    {
        text: 'System Settings'
    },
    {
        text: 'Additional Settings'
    }];

// Initialize DropDownButton options.
let options: DropDownButtonModel = {
  items: items,
  cssClass: 'e-caret-hide',
  iconCss: 'e-image'
};

// To initialize the DropDownButton with sprite image.
let drpDownBtn: DropDownButton = new DropDownButton(options);
drpDownBtn.appendTo('#icononly');


