

import { Button, RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Name and Value attribute in form submit.
let radiobutton: RadioButton = new RadioButton({label: 'Credit/Debit Card', name: 'payment', value: 'credit/debit', checked: true});
radiobutton.appendTo('#radiobutton1');

radiobutton = new RadioButton({label: 'Net Banking', name: 'payment', value: 'netbanking'});
radiobutton.appendTo('#radiobutton2');

radiobutton = new RadioButton({label: 'Cash on Delivery', name: 'payment', value: 'cashondelivery'});
radiobutton.appendTo('#radiobutton3');

radiobutton = new RadioButton({label: 'Others', name: 'payment', value: 'others'});
radiobutton.appendTo('#radiobutton4');

let button: Button = new Button({ isPrimary: true });
button.appendTo('#btnElement');



