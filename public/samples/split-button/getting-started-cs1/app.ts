

import { SplitButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
 { text: 'Cut'},
 { text: 'Copy'},
 { text: 'Paste'}
 ];

// Initialize the SplitButton component.
let splitBtn: SplitButton = new SplitButton({ items: items });

// Render initialized SplitButton.
splitBtn.appendTo('#element');


