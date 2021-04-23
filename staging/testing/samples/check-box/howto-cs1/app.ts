

import { CheckBox, Button } from '@syncfusion/ej2-buttons';

// To customize CheckBox appearance
// Refer the 'e-primary' class details in 'style.css'.
let checkbox: CheckBox = new CheckBox({ label: 'Primary', cssClass: 'e-primary', checked: true });
checkbox.appendTo('#checkbox1');

// Refer the 'e-success' class details in 'style.css'.
checkbox = new CheckBox({ label: 'Success', cssClass: 'e-success', checked: true });
checkbox.appendTo('#checkbox2');

// Refer the 'e-info' class details in 'style.css'.
checkbox = new CheckBox({ label: 'Info', cssClass: 'e-info', checked: true });
checkbox.appendTo('#checkbox3');

// Refer the 'e-warning' class details in 'style.css'.
checkbox = new CheckBox({ label: 'Warning', cssClass: 'e-warning', checked: true });
checkbox.appendTo('#checkbox4');

// Refer the 'e-danger' class details in 'style.css'.
checkbox = new CheckBox({ label: 'Danger', cssClass: 'e-danger', checked: true });
checkbox.appendTo('#checkbox5');



