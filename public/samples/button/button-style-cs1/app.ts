

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Primary Button - Used to represent a primary action.
let button: Button = new Button({ cssClass: `e-primary`}, '#primarybtn');

//Success Button - Used to represent a positive action.
button = new Button({ cssClass: `e-success`}, '#successbtn');

//Info Button - Used to represent an informative action.
button = new Button({ cssClass: `e-info`}, '#infobtn');

//Warning Button - Used to represent an action with caution.
button = new Button({ cssClass: `e-warning`}, '#warningbtn');

//Danger Button - Used to represent a negative action.
button = new Button({ cssClass: `e-danger`}, '#dangerbtn');

//Link Button - Changes the appearance of the Button like a hyperlink.
button = new Button({ cssClass: `e-link`}, '#linkbtn');



