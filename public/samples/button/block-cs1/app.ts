

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Block Button.
let button: Button = new Button({cssClass: `e-block`});
button.appendTo('#blockbtn');

//Primary Block Button.
button = new Button({ isPrimary: true, cssClass: `e-block` });
button.appendTo('#primarybtn');

//Success Block Button.
button = new Button({ cssClass: `e-block e-success` });
button.appendTo('#successbtn');


