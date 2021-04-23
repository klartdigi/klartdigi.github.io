


import { DropDownButton, ItemModel, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';

let items: ItemModel[] = [
{
text: 'Learn SQL'
},
{
text: 'Learn PHP'
},
{
text: 'Learn Bootstrap'
}];

let menuOptions: DropDownButtonModel = {
items: items
};

// To render DropDownButton.
let btnObj: DropDownButton = new DropDownButton(menuOptions);
btnObj.appendTo('#dropdownelement');



