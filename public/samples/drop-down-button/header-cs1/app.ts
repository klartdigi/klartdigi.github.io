

import { DropDownButton, DropDownButtonModel, ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { ListView } from '@syncfusion/ej2-lists';

enableRipple(true);

// Initialize DropDownButton options.
let ddbOption: DropDownButtonModel = {
  target: '#listview',
  iconCss: 'e-icons e-down',
  cssClass: 'e-caret-hide'
};

// To initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton(ddbOption);
// Render initialized DropDownButton.
drpDownBtn.appendTo('#element');

// Initialize datsource for ListView component.
let dataSource: { [key: string]: Object }[] = [
    { class: 'data', text: 'Print', id: 'data1', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Save As', id: 'data2', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Update Folder', id: 'data3', category: 'Customize Quick Access Toolbar' },
    { class: 'data', text: 'Reply', id: 'data4', category: 'Customize Quick Access Toolbar' }
];

// Initialize ListView component
let listviewInstance: ListView = new ListView({
    dataSource: dataSource,
    // Map the appropriate columns to fields property
    fields: { text: 'text', groupBy: 'category' },
    // To show CheckBox.
    showCheckBox: true
});

//Render initialized ListView
listviewInstance.appendTo("#listview");


