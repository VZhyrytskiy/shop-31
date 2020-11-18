import {InjectionToken} from '@angular/core';

export class GeneratorService {
  private ALLOWED_SYMBOLS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  generate(n: number): string {
    return Array(n)
      .join()
      .split(',')
      .map(() => this.ALLOWED_SYMBOLS.charAt(Math.floor(Math.random() * this.ALLOWED_SYMBOLS.length)))
      .join('');
  }
}

export const RandomString = new InjectionToken<string>('RandomString');

export function GeneratorFactory(n: number): (arg: GeneratorService) => string {
  return (generatorService: GeneratorService): string =>
    generatorService.generate(n);
}
