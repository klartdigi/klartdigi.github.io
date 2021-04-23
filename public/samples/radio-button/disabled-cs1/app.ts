

import { RadioButton, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize RadioButton component.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'default', checked: true, change: onChange });

// Render initialized RadioButton.
radiobutton.appendTo('#element1');

radiobutton = new RadioButton({ label: 'Option 2', name: 'default', disabled: true, change: onChange });
radiobutton.appendTo('#element2');

radiobutton = new RadioButton({ label: 'Option 3', name: 'default', change: onChange });
radiobutton.appendTo('#element3');

function onChange(args: ChangeEventArgs): void {
   document.getElementById('text').innerText = 'Selected : ' + this.label;
}



