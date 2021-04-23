

import { ProgressButton } from '@syncfusion/ej2-splitbuttons';

let vertcialProgress: ProgressButton = new ProgressButton({ content: 'Vertical Progress', enableProgress: true, cssClass: 'e-hide-spinner e-vertical', duration: 4000 });

vertcialProgress.appendTo('#vertical');

let topProgress: ProgressButton = new ProgressButton({ content: 'Progress Top', enableProgress: true, cssClass: 'e-hide-spinner e-progress-top', duration: 4000 });

topProgress.appendTo('#top');

let reverseProgress: ProgressButton = new ProgressButton({ content: 'Reverse Progress', enableProgress: true, cssClass: 'e-hide-spinner e-reverse-progress', duration: 4000 });

reverseProgress.appendTo('#reverse');


