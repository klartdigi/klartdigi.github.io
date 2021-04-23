

import { ProgressButton } from '@syncfusion/ej2-splitbuttons';

let progressBtn: ProgressButton = new ProgressButton({ content: 'Slide Left', enableProgress: true, animationSettings: { effect: 'SlideLeft', duration: 500, easing: 'linear' }, spinSettings: { position: 'Center' } });

progressBtn.appendTo('#progressbtn');


