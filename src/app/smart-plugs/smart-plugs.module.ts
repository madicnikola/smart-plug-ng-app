import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SmartPlugsComponent} from './smart-plugs.component';
import {SmartPlugListComponent} from './smart-plug-list/smart-plug-list.component';
import {SmartPlugDetailsComponent} from './smart-plug-details/smart-plug-details.component';
import {SmartPlugEditComponent} from './smart-plug-edit/smart-plug-edit.component';
import {SmartPlugStartComponent} from './smart-plug-start/smart-plug-start.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SmartPlugsRoutingModule} from './smart-plugs-routing.module';
import {StoreModule} from '@ngrx/store';
import {smartPlugReducer} from './store/smart-plug.reducers';
import {EffectsModule} from '@ngrx/effects';
import {SmartPlugEffects} from './store/smart-plug.effects';
import {SmartPlugAddComponent} from './smart-plug-add/smart-plug-add.component';
import {SmartPlugItemComponent} from './smart-plug-list/smart-plug-item/smart-plug-item.component';


@NgModule({
  declarations: [
    SmartPlugsComponent,
    SmartPlugListComponent,
    SmartPlugItemComponent,
    SmartPlugAddComponent,
    SmartPlugDetailsComponent,
    SmartPlugEditComponent,
    SmartPlugStartComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    SmartPlugsRoutingModule,
    StoreModule.forFeature('smartPlugsState', smartPlugReducer),
    EffectsModule.forFeature([SmartPlugEffects]),
  ]
})
export class SmartPlugsModule {

}
