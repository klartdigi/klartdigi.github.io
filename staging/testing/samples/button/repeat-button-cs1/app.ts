

import { Button } from '@syncfusion/ej2-buttons';
import { EventHandler, enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let timeout: any = null;
let button: Button = new Button({ cssClass: 'e-small' });
button.appendTo('#button');

let clear: Button = new Button({ cssClass: 'e-small'});
clear.appendTo('#clear');

clear.element.onclick = () => {
   document.getElementById('eventlog').innerHTML = '';
}

button.element.addEventListener("mousedown", mouseDownHandler);
button.element.addEventListener("touchstart", mouseDownHandler);
button.element.addEventListener("mouseup", mouseUpHandler);
button.element.addEventListener("touchend", mouseUpHandler);
button.element.addEventListener("click", clickEventHandler);

function mouseUpHandler(event: any): void {
    clearInterval(timeout);
}

function mouseDownHandler(event: any): void {
    event.preventDefault();
    timeout = setInterval(clickEventHandler, 200);
}
function clickEventHandler() {
    EventHandler.trigger(button.element, "click");
    appendSpanElement('Button click event triggered.<hr>');
}
function appendSpanElement(text: string): void {
    let span: HTMLElement = document.createElement('span');
    span.innerHTML = text;
    let log: HTMLElement = document.getElementById('eventlog');
    log.insertBefore(span, log.firstChild);
}


