

import { Switch } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//checked state.
let switchObj: Switch = new Switch({ checked: true });
switchObj.appendTo('#switch1');

//unchecked state.
switchObj = new Switch({ checked: false });
switchObj.appendTo('#switch2');



