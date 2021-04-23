

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Small Button.
let button: Button = new Button({ cssClass: `e-small`}, '#smallbtn');

//Normal Button.
button = new Button();
button.appendTo('#normalbtn');


