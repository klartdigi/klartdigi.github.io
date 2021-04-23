

import { ProgressButton, ProgressEventArgs } from '@syncfusion/ej2-splitbuttons';

let progressBtn: ProgressButton = new ProgressButton({
    content: 'Progress', enableProgress: true, duration: 15000,
    begin: (args: ProgressEventArgs) => {
        progressBtn.content = 'Progress ' + args.percent + '%';
        progressBtn.dataBind();
    },
    progress: (args: ProgressEventArgs) => {
        progressBtn.content = 'Progress ' + args.percent + '%';
        progressBtn.dataBind();
        if (args.percent === 40) {
            args.percent = 90
        }
    },
    end: (args: ProgressEventArgs) => {
        progressBtn.content = 'Progress ' + args.percent + '%';
        progressBtn.dataBind();
    },
    cssClass: 'e-hide-spinner'
});

progressBtn.appendTo('#progressbtn');


