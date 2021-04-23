

import { Switch, rippleMouseHandler } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Switch component.
let switchObj: Switch = new Switch({ checked: true });

// Render initialized Switch.
switchObj.appendTo('#switch1');

// Function to handle ripple effect for Switch with label.
document.querySelector('.lSize label').addEventListener('mouseup', rippleHandler);
document.querySelector('.lSize label').addEventListener('mousedown', rippleHandler);
function rippleHandler(e: MouseEvent): void  {
    let rippleSpan: Element = this.parentElement.nextElementSibling.querySelector('.e-ripple-container');
    if (rippleSpan) {
        rippleMouseHandler(e, rippleSpan);
    }
}


