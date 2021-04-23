


import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple} from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Button component.
let button: Button = new Button({cssClass: 'e-link'});

// Render initialized button.
button.appendTo('#element');

button.element.onclick = (): void => {
    window.open("https://www.google.com");
}



