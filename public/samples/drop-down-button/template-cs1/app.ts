

import { DropDownButton, ItemModel, DropDownButtonModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Cut'
    }];

let ddbOption: DropDownButtonModel = {
  iconCss: 'e-ddb-icons e-paste',
  cssClass: 'e-vertical',
  items: items,
  iconPosition: 'Top',
  // To handle li templating
  beforeItemRender: (args: MenuEventArgs) => {
    if (args.item.text === 'Edit') {
      args.element.innerHTML = '<span></span><div><b>Paste Text</b><div>Provides option to paste only the<br>selected text.</div></div>';
      args.element.style.height = '80px';
      let span: Element = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastetext e-align');
      let div: Element = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    } else {
      args.element.innerHTML = '<span></span><div><b>Paste Special</b><div>Provides options to paste formulas,<br> values, comments, validations etc...</div></div>';
      args.element.style.height = '80px';
      let span: Element = args.element.children[0];
      span.setAttribute('class','e-cm-icons e-pastespecial e-align');
      let div: Element = args.element.children[1];
      div.setAttribute('class', 'e-div-align');
    }
  }
}
//To initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(ddbOption, '#iconbutton');


