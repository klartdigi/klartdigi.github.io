

import { Switch } from '@syncfusion/ej2-buttons';

//Set text in switch toggle states.
let switchObj: Switch = new Switch({ onLabel: 'ON', offLabel: 'OFF' });
switchObj.appendTo('#switch1');

switchObj.toggle();


