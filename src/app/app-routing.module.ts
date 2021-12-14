import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CartNewComponent } from './components/cart-new/cart-new.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "profile/user/:id",
    component: ProfileComponent,
  },
  {
    path: "cart/:id",
    component: CartComponent,
    pathMatch: "full"
  },
  {
    path: "carts/new",
    component: CartNewComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "home", pathMatch: "full",
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./components/settings/settings.module").then((m) => m.SettingsModule)
  },
  {
    path: "**",
    redirectTo: "home", pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
