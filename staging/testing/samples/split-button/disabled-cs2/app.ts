

import { SplitButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let items: ItemModel[] = [
    {
        text: 'Autosum'
    },
    {
        text: 'Average'
    },
    {
        text: 'Count numbers',
    },
    {
        text: 'Min'
    },
    {
        text: 'Max'
    }];

//To disable the SplitButton.
let splitBtn: SplitButton = new SplitButton({ iconCss: 'e-sb e-sigma', items: items, disabled: true }, '#iconbutton');


