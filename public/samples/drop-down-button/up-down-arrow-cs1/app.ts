

import { DropDownButton, ItemModel, BeforeOpenCloseMenuEventArgs, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple, createElement } from '@syncfusion/ej2-base';

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

// Initialize DropDownButton options.
let options: DropDownButtonModel = {
  items: items,
 // Removing 'e-caret-up' class.
  beforeClose: (args: BeforeOpenCloseMenuEventArgs) => {
     drpDownBtn.cssClass = '';
  },
  // Adding 'e-caret-up' class.
  beforeOpen: (args: BeforeOpenCloseMenuEventArgs) => {
     drpDownBtn.cssClass = 'e-caret-up';
  }
};
// To initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(options);
// Render initialized DropDownButton.
drpDownBtn.appendTo('#arrow');


