

import { Switch } from '@syncfusion/ej2-buttons';

// Initialize Switch with square cssClass.
let switchObj: Switch = new Switch({ cssClass: 'square' });
switchObj.appendTo('#switch1');

// Initialize Switch with custom-switch cssClass.
switchObj = new Switch({ cssClass: 'custom-switch', checked: true });
switchObj.appendTo('#switch2');

// Initialize Switch with handle-text cssClass.
switchObj = new Switch({ cssClass: 'handle-text' });
switchObj.appendTo('#switch3');



