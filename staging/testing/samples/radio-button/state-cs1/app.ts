

import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//checked state.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'state', checked: true });
radiobutton.appendTo('#radiobutton1');

//unchecked state.
radiobutton = new RadioButton({ label: 'Option 2', name: 'state' });
radiobutton.appendTo('#radiobutton2');


