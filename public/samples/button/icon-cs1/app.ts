

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//To position the icon to the left of the text on a Button.
let button: Button = new Button({iconCss: 'e-btn-sb-icon e-prev-icon'}, '#iconbutton');

//To position the icon to the right of the text on a Button.
button = new Button({iconCss: 'e-btn-sb-icon e-stop-icon', iconPosition: 'Right'}, '#iconposbtn');



