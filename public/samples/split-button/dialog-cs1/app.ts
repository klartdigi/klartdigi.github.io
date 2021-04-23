


import { SplitButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let dialogObj: Dialog = new Dialog({
    width: '250px',
    header: 'Software Update',
    content: 'Are you sure want to update?',
    target: document.getElementById('container'),
    visible: false,
    buttons: [
        {
            click: () => {
                dialogObj.hide();
            },
            buttonModel: { content: 'OK', isPrimary: true }
        },
        {
            click: () =>{
                dialogObj.hide();
            },
            buttonModel: { content: 'Cancel', isPrimary: true }
        }
    ],
});
dialogObj.appendTo('#dialog');

let items: ItemModel[] = [
    {
        text: 'Help'
    },
    {
        text: 'About'
    },
    {
        text: 'Update...'
    }
    ];

let splitBtn: SplitButton = new SplitButton(
    {
        content: 'Help',
        items: items,
        select: (args: MenuEventArgs) => {
            if (args.item.text === 'Update...') {
                dialogObj.show();
            }
        }
    }, '#element');



