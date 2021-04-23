


import { rippleEffect, enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To enable ripple in ButtonGroup.
let button: HTMLElement = document.querySelector('.e-btn-group');
rippleEffect(button, { selector: '.e-btn' });



