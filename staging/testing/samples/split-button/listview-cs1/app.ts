


import { SplitButton } from '@syncfusion/ej2-splitbuttons';
import { ListView } from '@syncfusion/ej2-lists';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let listItems: { [key: string]: Object }[] = [
    {
        'text': 'Cut',
        'category': 'Basic'
    },
    {
        'text': 'Copy',
        'category': 'Basic'
    },
    {
        'text': 'Paste',
        'category': 'Basic'
    },
    {
        'text': 'Paste as Formula',
        'category': 'Advanced'
    },
    {
        'text': 'Paste as Hyperlink',
        'category': 'Advanced'
    },
];

let listView: ListView = new ListView({
    dataSource: listItems,
    sortOrder: 'Descending',
    fields: { groupBy: 'category' }
}, '#listview');

let splitBtn: SplitButton =  new SplitButton({ content: 'ClipBoard', target: listView.element }, '#element');



