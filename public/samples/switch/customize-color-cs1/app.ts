

import { Switch } from '@syncfusion/ej2-buttons';

// Initialize Switch with bar-color cssClass.
let switchObj: Switch = new Switch({ cssClass: 'bar-color' });
switchObj.appendTo('#switch1');

// Initialize Switch with handle-color cssClass.
switchObj = new Switch({ cssClass: 'handle-color', checked: true });
switchObj.appendTo('#switch2');

// Initialize Switch with custom-iOS cssClass.
switchObj = new Switch({ cssClass: 'custom-iOS', checked: true });
switchObj.appendTo('#switch3');


