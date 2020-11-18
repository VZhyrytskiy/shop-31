import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';

import {CategoryEnum} from '../../shared/models/app-enums.model';
import {ItemModel} from '../models/item.model';
import {
  APP_CONSTANTS,
  CONSTANTS,
  GeneratorFactory,
  GeneratorService,
  LocalStorageService,
  RandomString
} from '../../core/services';
import {ConfigOptionsService} from '../../core/services';

const NAME_PLACEHOLDER = '[Enter Name]';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  providers: [
    ConfigOptionsService,
    GeneratorService,
    LocalStorageService,
    {provide: CONSTANTS, useValue: APP_CONSTANTS},
    {provide: RandomString, useFactory: GeneratorFactory(5), deps: [GeneratorService], multi: true},
    {provide: RandomString, useFactory: GeneratorFactory(10), deps: [GeneratorService], multi: true}
  ]
})
export class FirstComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('userName') nameEl: ElementRef<HTMLSpanElement>;

  item: ItemModel = new ItemModel(
    'Isabella',
    'Bed in Roman style with high headboard',
    50,
    CategoryEnum.Beds,
    true
  );

  constructor(
    private localStorageService: LocalStorageService,
    public configOptionsService: ConfigOptionsService,
    @Inject(CONSTANTS) public appConstants: any,
    @Optional() @Inject(RandomString) public randomStrings: string[]
  ) {
  }

  ngOnInit(): void {
    const savedConfigOptions = this.localStorageService.getItem('configOptions');
    this.configOptionsService.setConfigOptions(savedConfigOptions);
  }

  ngAfterViewInit(): void {
    this.updateName();
  }

  ngOnDestroy(): void {
  }

  updateName(): void {
    const nameValue = this.configOptionsService.getConfigOptions().login;
    this.nameEl.nativeElement.innerText = nameValue ? nameValue : NAME_PLACEHOLDER;
  }

  setName(e): void {
    if (e.type === 'keypress') {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        this.nameEl.nativeElement.blur();
      }
    } else {
      if (!this.nameEl.nativeElement.innerText) {
        this.updateName();
      } else {
        this.configOptionsService.setConfigOptions({login: this.nameEl.nativeElement.innerText});
        this.localStorageService.setItem('configOptions', {
          id: '1',
          ...this.configOptionsService.getConfigOptions()
        });
      }
    }
  }

  displayConfigOptions(): string {
    return JSON.stringify(this.configOptionsService.getConfigOptions());
  }

  displayConstants(): string {
    return JSON.stringify(this.appConstants);
  }
}
