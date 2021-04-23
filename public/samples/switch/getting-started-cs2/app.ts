

import { Switch } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Switch component with disabled support.
let switchObj: Switch = new Switch({ disabled: true });

// Render initialized Switch.
switchObj.appendTo('#element');


