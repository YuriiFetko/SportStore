// import {Directive, Input, SimpleChange, TemplateRef, ViewContainerRef, Attribute, OnChanges} from '@angular/core';
//
// @Directive({
//   selector: '[appCounterOf]'
// })
// export class CounterDirective implements OnChanges {
//
//   constructor(private container: ViewContainerRef,
//               private template: TemplateRef<any>) {
//   }
//
//   @Input('appCounterOf')
//   counter: number;

//   ngOnChanges(changes: SimpleChange) {
//     this.container.clear();
//     for (let i = 0; i < this.counter; i++) {
//       this.container.createEmbeddedView(this.template, new CounterDirective(i + 1));
//     }
//   }
// }

// class CounterDirectiveContext {
//   constructor(public $implicit: any) {
//   }
//}
