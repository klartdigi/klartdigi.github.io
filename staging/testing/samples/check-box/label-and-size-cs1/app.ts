

import { CheckBox } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Label position - Left.
let checkbox: CheckBox = new CheckBox({ label: 'Left Side Label', labelPosition: 'Before' });
checkbox.appendTo('#checkbox1');

//Label position - Right.
checkbox = new CheckBox({ label: 'Right Side Label', checked: true });
checkbox.appendTo('#checkbox2');


