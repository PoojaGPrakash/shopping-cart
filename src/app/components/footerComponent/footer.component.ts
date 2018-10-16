import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: '<h5> {{ copyrights }} </h5>',
})
export class FooterComponent {
  copyrights = "© 2018 Copyright";
}