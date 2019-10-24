import data from '../../assets/environment.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentSettings } from './environment-settings';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  private configurations: EnvironmentSettings;
  // URL of development API
  public API_BASEURL: string = data.Api_BaseUrl;
  public IDENTITY_BASEURL = data.Identity_BaseUrl;

  constructor(private http: HttpClient) {
  }

  public loadEnvConfig() {
    return this.http.get<EnvironmentSettings>('/assets/environment.json')
      .toPromise()
      .then(config => {
        this.configurations = config;
        this.API_BASEURL = config.Api_BaseUrl;
        this.IDENTITY_BASEURL = config.Identity_BaseUrl;
      });
  }

  public getConfig(): EnvironmentSettings {
    return this.configurations;
  }
}
