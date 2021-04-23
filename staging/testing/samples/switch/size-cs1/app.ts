

import { Switch } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Small Switch.
let switchObj: Switch = new Switch({ cssClass: 'e-small' });
switchObj.appendTo('#switch1');

//Default Switch.
switchObj = new Switch({});
switchObj.appendTo('#switch2');


