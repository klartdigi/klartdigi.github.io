


import { createButtonGroup } from '@syncfusion/ej2-splitbuttons';

// To create basic ButtonGroup.
createButtonGroup('#basic', {
    buttons: [
        { content: 'HTML' },
        { content: 'CSS' },
        { content: 'Javascript'}
    ]
});

// To create checkbox type ButtonGroup.
createButtonGroup('#checkbox', {
    buttons: [
        { content: 'Bold' },
        { content: 'Italic' },
        { content: 'Undeline'}
    ]
});

// To create radio type ButtonGroup.
createButtonGroup('#radio', {
    buttons: [
        { content: 'Left' },
        { content: 'Center' },
        { content: 'Right'}
    ]
});



