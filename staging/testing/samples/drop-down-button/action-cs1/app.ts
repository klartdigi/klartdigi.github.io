

import { DropDownButton, ItemModel, DropDownButtonModel,MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
    {
        text: 'Flipkart',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=flipkart'
    },
    {
        text: 'Amazon',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=amazon'
    },
    {
        text: 'Snapdeal',
        iconCss: 'e-cart-icon e-link',
        url: 'https://www.google.co.in/search?q=snapdeal'
    }];
let menuOptions: DropDownButtonModel = {
        items: items,
        iconCss: 'e-cart-icon e-shopping',
        beforeItemRender: (args: MenuEventArgs) => {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    };

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(menuOptions, '#action');



