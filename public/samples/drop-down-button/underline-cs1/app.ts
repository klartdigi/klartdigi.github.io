

import { DropDownButton, DropDownButtonModel, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
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

// Initialize DropDownButton options.
let ddbOption: DropDownButtonModel = {
  items: items,
  beforeItemRender: (args: MenuEventArgs) => {
    if (args.item.text === 'Copy') {
        //To underline a particular text.
        args.element.innerHTML = '<u>C</u>opy';
    }
}
}
// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(ddbOption);

// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');



