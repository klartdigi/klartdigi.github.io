


//Button is active in toggled state.
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let togglebtn: Button = new Button({cssClass: `e-flat`, iconCss: 'e-btn-sb-icon e-play-icon', isToggle: true, content:'Play'}, '#toggelbtn');

//Click Event.
document.getElementById('toggelbtn').onclick = (): void => {
    if (document.getElementById('toggelbtn').classList.contains('e-active')) {
        togglebtn.content = 'Pause';
        togglebtn.iconCss = 'e-btn-sb-icon e-pause-icon';
    } else {
        togglebtn.content = 'Play';
        togglebtn.iconCss = 'e-btn-sb-icon e-play-icon';
    }
};


