import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { PreferencesComponent} from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: "settings",
        children: [
            {
                path: "edit",
                component: EditComponent,
            },
            {
                path: "preferences",
                component: PreferencesComponent,
            },
            {
                path: "profile",
                component: ProfileComponent,
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
