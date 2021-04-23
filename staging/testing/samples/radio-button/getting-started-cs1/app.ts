

import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize RadioButton component.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'default', enableRtl: true });

// Render initialized RadioButton.
radiobutton.appendTo('#element1');

radiobutton = new RadioButton({ label: 'Option 2', name: 'default', enableRtl: true, checked: true });
radiobutton.appendTo('#element2');


