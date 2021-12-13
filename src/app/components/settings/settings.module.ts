import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module'

import { EditComponent } from './edit/edit.component';
import { PreferencesComponent} from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditComponent,
    PreferencesComponent,
    ProfileComponent,
  ],
  imports: [
      RouterModule,
      CommonModule,
      SettingsRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class SettingsModule { }
