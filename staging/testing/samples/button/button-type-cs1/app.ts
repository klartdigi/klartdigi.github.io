

import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Flat Button.
let button: Button = new Button({ cssClass: `e-flat`}, '#flatbtn');

//Outline Button.
button = new Button({ cssClass: `e-outline`}, '#outlinebtn');

//Round Button - Icon can be loaded by setting "e-icons e-plus-icon" in "iconCss" property.
//Use "e-icons" class name to load Essential JS 2 built-in icons.
//Use "e-plus-icon" class name to load plus icon that you can refer in "styles.css".
button = new Button({ cssClass: `e-round`, iconCss: 'e-icons e-plus-icon', isPrimary:true}, '#roundbtn');


