import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UserAccComponent} from './user-acc/user-acc.component';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    UserAccComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
