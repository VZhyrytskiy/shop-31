import {Injectable} from '@angular/core';
import {ConfigOptions} from '../models/config-options.model';

@Injectable()
export class ConfigOptionsService {
  private configOptions: ConfigOptions = {};

  getConfigOptions(): ConfigOptions {
    return this.configOptions;
  }

  setConfigOptions({id, login, email}: ConfigOptions): void {
    if (id) {
      this.configOptions.id = id;
    }
    if (login) {
      this.configOptions.login = login;
    }
    if (email) {
      this.configOptions.email = email;
    }
  }
}
