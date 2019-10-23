import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = {value: 'ParsiNail'};
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fa');
    translate.use('fa');
  }
  onChangeLanguage() {
    this.translate.currentLang === 'fa' ? this.translate.use('en') : this.translate.use('fa');
  }
}
