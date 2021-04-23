

import { ProgressButton } from '@syncfusion/ej2-splitbuttons';

let uploadBtn: ProgressButton = new ProgressButton({
    content: 'Upload',
    cssClass: 'e-hide-spinner',
    enableProgress: true,
    duration: 4000,
    begin: () => {
        uploadBtn.content = 'Uploading...';
        uploadBtn.cssClass = 'e-hide-spinner e-info';
        uploadBtn.dataBind();
    },
    end: () => {
        uploadBtn.content = 'Success';
        uploadBtn.cssClass = 'e-hide-spinner e-success';
        uploadBtn.dataBind();
        setTimeout(() => {
            uploadBtn.content = 'Upload';
            uploadBtn.cssClass = 'e-hide-spinner';
            uploadBtn.dataBind();
        }, 500)
    }
}, '#progressbtn');



