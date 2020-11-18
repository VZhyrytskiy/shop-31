import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(key, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key): any {
    const value = JSON.parse(localStorage.getItem(key));
    return typeof value === 'string' ? value.replace(/^"(.+(?="$))"$/, '$1') : value;
  }

  removeItem(key): void {
    localStorage.removeItem(key);
  }
}
