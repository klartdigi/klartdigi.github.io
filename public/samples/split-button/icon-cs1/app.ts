

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

//To place the icon in SplitButton.
let splitBtn: SplitButton = new SplitButton({ iconCss: 'e-sb-icons e-paste', items: items }, '#iconbutton');
let splitBtnObj: SplitButton = new SplitButton({ iconCss: 'e-sb-icons e-paste', items: items, iconPosition: "Top" }, '#iconpstn');


