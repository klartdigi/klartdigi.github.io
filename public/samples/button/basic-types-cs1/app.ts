

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Submit.
let button: Button = new Button();
button.appendTo('#submitbtn');

//Reset.
button = new Button();
button.appendTo('#resetbtn');


