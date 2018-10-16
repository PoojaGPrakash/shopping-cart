import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

function log(message) {
  console.log(message);
}

var message = "Hello World";

log(message);

function doSomething() {
   for(let i=0;i<5;i ++) {
     console.log(i);
   }
}
doSomething();

  // Otherwise, log the boot error
}).catch(err => console.error(err));