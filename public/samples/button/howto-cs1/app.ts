

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//To customize Button appearance.
//Refer the "e-custom" class details in "styles.css".
let button: Button = new Button({cssClass: `e-custom`, content:'Custom'}, '#custombtn');


