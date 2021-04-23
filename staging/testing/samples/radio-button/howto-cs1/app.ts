

import { RadioButton } from '@syncfusion/ej2-buttons';

// To customize RadioButton appearance
// Refer the 'e-primary' class details in 'style.css'.
let radiobutton: RadioButton = new RadioButton({ label: 'Primary', name: 'custom', cssClass: 'e-primary' });
radiobutton.appendTo('#radiobutton1');

// Refer the 'e-success' class details in 'style.css'.
radiobutton = new RadioButton({ label: 'Success', name: 'custom', cssClass: 'e-success' });
radiobutton.appendTo('#radiobutton2');

// Refer the 'e-info' class details in 'style.css'.
radiobutton = new RadioButton({ label: 'Info', name: 'custom', cssClass: 'e-info', checked: true });
radiobutton.appendTo('#radiobutton3');

// Refer the 'e-warning' class details in 'style.css'.
radiobutton = new RadioButton({ label: 'Warning', name: 'custom', cssClass: 'e-warning' });
radiobutton.appendTo('#radiobutton4');

// Refer the 'e-danger' class details in 'style.css'.
radiobutton = new RadioButton({ label: 'Danger', name: 'custom', cssClass: 'e-danger' });
radiobutton.appendTo('#radiobutton5');


