

import { DropDownButton, ItemModel, OpenCloseMenuEventArgs, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-splitbuttons';
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
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: 'e-caret-up',
  // To position dropDownButton popup.
  open: (args: OpenCloseMenuEventArgs) => {
    args.element.parentElement.style.top = drpDownBtn.element.getBoundingClientRect().top - args.element.parentElement.offsetHeight +'px';
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');


