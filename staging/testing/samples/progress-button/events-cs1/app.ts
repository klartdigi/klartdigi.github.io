


import { Button } from '@syncfusion/ej2-buttons';
import { ProgressButton, ProgressEventArgs } from '@syncfusion/ej2-splitbuttons';

let progressBtn: ProgressButton = new ProgressButton({
    content: 'Progress',
    enableProgress: true,
    begin: (args: ProgressEventArgs) => {
        updateEventLog(args);
    },
    end: (args: ProgressEventArgs) => {
        updateEventLog(args);
    },
    progress: (args: ProgressEventArgs) => {
        updateEventLog(args);
    },
    fail: (args: Event) => {
        updateEventLog(args);
    }
    }, '#progressbtn');

let clear: Button = new Button({ cssClass: 'e-small'});
clear.appendTo('#clear');

clear.element.onclick = () => {
    let propertyElem: HTMLElement = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].innerHTML = '';
}

function updateEventLog(args: any): void {
    let propertyElem: HTMLElement = document.getElementById('propertyTable');
    propertyElem.getElementsByTagName('td')[0].insertAdjacentHTML('beforeend', args.name + ' Event triggered. <br />');
}


