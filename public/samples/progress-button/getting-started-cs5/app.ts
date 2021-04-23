

import { ProgressButton } from '@syncfusion/ej2-splitbuttons';

let progressBtn: ProgressButton = new ProgressButton({
    content: 'Download', enableProgress: true, duration: 4000, iconCss: 'e-btn-sb-icon e-download',
    end: () => {
        progressBtn.content = 'Download';
        progressBtn.iconCss = 'e-btn-sb-icon e-download';
        progressBtn.dataBind();
    },
    cssClass: 'e-hide-spinner'
});
progressBtn.appendTo('#progressbtn');

progressBtn.element.addEventListener('click', clickHandler);

function clickHandler(): void {
    if (progressBtn.content === 'Download') {
        progressBtn.content = 'Pause';
        progressBtn.iconCss = 'e-btn-sb-icon e-pause';
        progressBtn.dataBind();
    }
    // clicking on ProgressButton will stop the progress when the text content is 'Pause'
    else if (progressBtn.content === 'Pause') {
        progressBtn.content = 'Resume';
        progressBtn.iconCss = 'e-btn-sb-icon e-play';
        progressBtn.dataBind();
        progressBtn.stop();
    }
    // clicking on ProgressButton will start the progress when the text content is 'Resume'
    else if (progressBtn.content === 'Resume') {
        progressBtn.content = 'Pause';
        progressBtn.iconCss = 'e-btn-sb-icon e-pause';
        progressBtn.dataBind();
        progressBtn.start();
    }
}


