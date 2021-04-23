

import { CheckBox } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Small CheckBox.
let checkbox: CheckBox = new CheckBox({ label: 'Small', cssClass: 'e-small' });
checkbox.appendTo('#checkbox1');

//Default CheckBox.
checkbox = new CheckBox({ label: 'Default' });
checkbox.appendTo('#checkbox2');


