import {InjectionToken} from '@angular/core';

export const CONSTANTS = new InjectionToken<any>('constants');

export const APP_CONSTANTS = {
  App: 'Shop',
  Ver: '1.0',
  API_URL: 'http://sample-utrl'
};
