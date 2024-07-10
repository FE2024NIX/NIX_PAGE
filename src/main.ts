import { bootstrapApplication } from '@angular/platform-browser';
 import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { APP_INITIALIZER } from '@angular/core';

export function appInitializerFactory(): () => Promise<void> {
  return () => {
    return new Promise<void>(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    }).then(() => {
      const loader = document.querySelector('.loader-container') as HTMLElement;
      if (loader) {
        loader.style.display = 'none';
      }
       document.body.classList.remove('black-background');
    });
  };
}

bootstrapApplication(
  AppComponent,
  {
    ...appConfig,
    providers: [
      ...(appConfig.providers || []), // Preserva los proveedores ya definidos en appConfig
      provideRouter([]),
      {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        multi: true,
      },
    ],
  }
).catch(err => console.error(err));
