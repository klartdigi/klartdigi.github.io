

import { SplitButton, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

let splitBtn: SplitButton = new SplitButton({
    content: 'Paste',
    items: items,
    beforeItemRender: (args: MenuEventArgs) => {
        if (args.item.text === 'Copy') {
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
}, '#element');



