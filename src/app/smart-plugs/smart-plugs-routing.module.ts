import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmartPlugsComponent} from './smart-plugs.component';
import {SmartPlugStartComponent} from './smart-plug-start/smart-plug-start.component';
import {SmartPlugAddComponent} from './smart-plug-add/smart-plug-add.component';
import {SmartPlugDetailsComponent} from './smart-plug-details/smart-plug-details.component';
import {SmartPlugEditComponent} from './smart-plug-edit/smart-plug-edit.component';

const smartPlugsRoutes: Routes = [
  {
    path: '', component: SmartPlugsComponent,
    children: [
      {path: '', component: SmartPlugStartComponent},
      {path: 'new', component: SmartPlugAddComponent},
      {path: ':id', component: SmartPlugDetailsComponent},
      {path: ':id/edit', component: SmartPlugEditComponent},
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
