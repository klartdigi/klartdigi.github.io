


import { SplitButton, ItemModel } from '@syncfusion/ej2-splitbuttons';

let items: ItemModel[] = [
{
text: 'Paste'
},
{
text: 'Paste Text'
},
{
text: 'Paste Special'
}];

// To render SplitButton.
let btnObj: SplitButton = new SplitButton({items: items});
btnObj.appendTo('#splitbuttonelement');



