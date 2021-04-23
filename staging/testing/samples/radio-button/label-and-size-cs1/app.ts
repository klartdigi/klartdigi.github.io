

import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Label position - Left.
let radiobutton: RadioButton = new RadioButton({ label: 'Left Side Label', name: 'position', labelPosition: 'Before' });
radiobutton.appendTo('#radiobutton1');

//Label position - Right.
radiobutton = new RadioButton({ label: 'Right Side Label', name: 'position', checked: true });
radiobutton.appendTo('#radiobutton2');


