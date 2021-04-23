

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//To change the Button type.
let button: Button = new Button({ cssClass: 'e-flat', content: 'Button' });

button.appendTo('#element');


