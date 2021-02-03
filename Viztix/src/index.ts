import "../node_modules/es6-promise/dist/es6-promise";
import { Browser, isNullOrUndefined } from "@syncfusion/ej2-base";
import { Toolbar, ItemModel } from "@syncfusion/ej2-navigations";


let toolbarItemCollection: ItemModel[] = [
  {
    template: `   <a class="tab-link" href="./index.html#img-Banner" aria-controls="typescript" role="tab"
        data-toggle="tab">
        Home
    </a>`,
    align: "Center"
  },
  {
    template: `<a class="tab-link" href="./index.html#aboutUS" aria-controls="angular" role="tab"
        data-toggle="tab">
        Viztix System
    </a>`,
    align: "Center"
  },
  {
    template: `  <a class="tab-link" href="./index.html#fetures" aria-controls="react" role="tab"
        data-toggle="tab">
        Features
    </a>`,
    align: "Center"
  },
  {
    template: `<a class="tab-link" href="./index.html#Showcase" aria-controls="vue" role="tab" data-toggle="tab">
        Viztix
    </a>`,
    align: "Center"
  },
  {
    template: ` <a class="tab-link" href="./index.html#PRICING" aria-controls="aspnetcore" role="tab"
        data-toggle="tab">
        Price
    </a>`,
    align: "Center"
  },
  {
    template: `  <a class="tab-link" href="./index.html#About" aria-controls="javascript" role="tab"
        data-toggle="tab">
        About Us
    </a>`,
    align: "Center"
  },
  {
    template: `  <a class="tab-link" href="./index.html#contact" aria-controls="aspnetmvc" role="tab"
        data-toggle="tab">
        Contact Us
    </a>`,
    align: "Center"
  }
];

let toolbar = new Toolbar({
  height: "72px",
  items: toolbarItemCollection,
  clicked: function (e) {
    if (e.originalEvent.target && (e.originalEvent.target as HTMLElement).classList.contains('e-toolbar-item')) {
      (e.originalEvent.target as any).firstElementChild.click();
    }
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].cssClass = "";
    }
    e.item.cssClass = "active";
  }
});
toolbar.appendTo("#platform");

