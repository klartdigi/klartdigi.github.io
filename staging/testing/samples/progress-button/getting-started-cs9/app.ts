

import { ProgressButton } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(false);

// Initialize the ProgressButton component.
let progressBtn: ProgressButton = new ProgressButton({content: 'Spin Left', enableProgress: true});

// Render initialized ProgressButton.
progressBtn.appendTo('#progressbtn');



