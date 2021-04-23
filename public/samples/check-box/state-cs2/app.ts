

import { CheckBox } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//checked state.
let checkbox: CheckBox = new CheckBox({ label: 'Checked State', checked: true });
checkbox.appendTo('#checkbox1');

//unchecked state.
checkbox = new CheckBox({ label: 'Unchecked State' });
checkbox.appendTo('#checkbox2');

//indeterminate state.
checkbox = new CheckBox({ label: 'Indeterminate State', indeterminate: true });
checkbox.appendTo('#checkbox3');



