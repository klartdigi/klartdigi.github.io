

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Button component.
let button: Button = new Button({ content: 'Button' });

// Render initialized button.
button.appendTo('#element');


