

import { CheckBox, Button } from '@syncfusion/ej2-buttons';

// To customize CheckBox frame appearance
let checkbox: CheckBox = new CheckBox({ label: 'Buy Groceries', cssClass: 'e-checkicon' ,checked: true });
checkbox.appendTo('#checkbox1');

checkbox = new CheckBox({ label: 'Pay Rent', cssClass: 'e-checkicon' });
checkbox.appendTo('#checkbox2');

checkbox = new CheckBox({ label: 'Make Dinner', cssClass: 'e-checkicon' });
checkbox.appendTo('#checkbox3');

checkbox = new CheckBox({ label: 'Finish To-do List Article', cssClass: 'e-checkicon' });
checkbox.appendTo('#checkbox4');



