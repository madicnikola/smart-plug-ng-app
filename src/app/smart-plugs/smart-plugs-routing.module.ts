import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmartPlugsComponent} from './smart-plugs.component';
import {SmartPlugStartComponent} from './smart-plug-start/smart-plug-start.component';
import {SmartPlugAddComponent} from './smart-plug-add/smart-plug-add.component';
import {SmartPlugDetailsComponent} from './smart-plug-details/smart-plug-details.component';
import {AuthGuard} from "../auth/auth-guard.service";

const smartPlugsRoutes: Routes = [
  {
    path: '', component: SmartPlugsComponent,
    children: [
      {path: '', component: SmartPlugStartComponent},
      {path: 'new', component: SmartPlugAddComponent, canActivate: [AuthGuard]},
      {path: ':id', component: SmartPlugDetailsComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(smartPlugsRoutes)
  ],
  exports: [RouterModule],
})
export class SmartPlugsRoutingModule {
}
