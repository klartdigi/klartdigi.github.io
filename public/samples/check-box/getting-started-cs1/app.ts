

import { CheckBox } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize CheckBox component.
let checkbox: CheckBox = new CheckBox({ label: 'Default', enableRtl: true });

// Render initialized CheckBox.
checkbox.appendTo('#element');


