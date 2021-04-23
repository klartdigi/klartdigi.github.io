

import { SplitButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let items: ItemModel[] = [
    {
        text: 'Undo'
    },
    {
        text: 'Redo'
    },
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

//To position the icon to the top of the text on a SplitButton.
let splitBtn: SplitButton = new SplitButton({ iconCss: 'e-sb-icons e-paste', cssClass: 'e-vertical', items: items, iconPosition: 'Top' }, '#iconbutton');


