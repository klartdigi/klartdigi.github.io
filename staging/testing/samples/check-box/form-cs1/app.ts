

import { CheckBox, Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Name and Value attribute in form submit.
let checkbox: CheckBox = new CheckBox({ name: 'Sport',  value: 'Cricket', label: 'Cricket', checked: true });
checkbox.appendTo('#checkbox1');

checkbox = new CheckBox({ name: 'Sport',  value: 'Hockey', label: 'Hockey', checked: true });
checkbox.appendTo('#checkbox2');

checkbox = new CheckBox({ name: 'Sport',  value: 'Tennis', label: 'Tennis', disabled: true });
checkbox.appendTo('#checkbox3');

checkbox = new CheckBox({ name: 'Sport',  value: 'Basketball', label: 'Basketball' });
checkbox.appendTo('#checkbox4');

let button: Button = new Button({ isPrimary: true });
button.appendTo('#btnElement');



