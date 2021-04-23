

import { ProgressButton, ProgressEventArgs } from '@syncfusion/ej2-splitbuttons';

let progressBtn: ProgressButton = new ProgressButton({
    content: 'Progress Step', enableProgress: true,
    begin: (args: ProgressEventArgs) => {
        args.step = 20;
    }, cssClass: 'e-hide-spinner'
});

progressBtn.appendTo('#progressbtn');


