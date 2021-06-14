import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UserAccComponent} from './user-acc/user-acc.component';
import {UserRoutingModule} from './user-routing.module';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/user.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/user.effects';


@NgModule({
  declarations: [
    UserAccComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    FormsModule,
    StoreModule.forFeature('UserFeatureState', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserModule {
}
