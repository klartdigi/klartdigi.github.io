

import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Small RadioButton.
let radiobutton: RadioButton = new RadioButton({ label: 'Small', name: 'size', checked: true, cssClass: 'e-small' });
radiobutton.appendTo('#radiobutton1');

//Default RadioButton.
radiobutton = new RadioButton({ label: 'Default', name: 'size' });
radiobutton.appendTo('#radiobutton2');


