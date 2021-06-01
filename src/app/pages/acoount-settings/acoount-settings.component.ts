import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-acoount-settings',
  templateUrl: './acoount-settings.component.html',
  styles: [],
})
export class AcoountSettingsComponent implements OnInit {

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
  }

}
