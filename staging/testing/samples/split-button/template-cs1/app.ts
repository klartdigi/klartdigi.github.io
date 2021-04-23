

import { SplitButton, ItemModel, SplitButtonModel,MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple, createElement } from '@syncfusion/ej2-base';

enableRipple(true);

let items: ItemModel[] =  [
    {
       text: 'Cut',
     },
     {
       text: 'Copy',
     },
     {
       text: 'Paste',
      }
   ];

let menuOptions: SplitButtonModel = {
        items: items,
        iconCss: 'e-sb-icons e-paste',
        beforeItemRender: (args: MenuEventArgs) => {
          let shortCutSpan: HTMLElement = createElement('span');
            let text: string = args.item.text;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class','shortcut');
            let clsName: string = (text === 'Copy') ? 'e-icons' : 'e-sb-icons';
            shortCutSpan.classList.add(clsName);
            (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
        }
    };

let splitBtn: SplitButton = new SplitButton(menuOptions, '#action');



