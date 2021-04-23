

import { Switch, Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Name and Value attribute in form submit.
let switchObj: Switch = new Switch({ name: 'Tethering',  value: 'USB', checked: true });
switchObj.appendTo('#switch1');

switchObj = new Switch({ name: 'Hotspot',  value: 'Wi-Fi', checked: true });
switchObj.appendTo('#switch2');

switchObj = new Switch({ name: 'Tethering',  value: 'Bluetooth', disabled: true });
switchObj.appendTo('#switch3');

let button: Button = new Button({ isPrimary: true });
button.appendTo('#btnElement');



