import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserAccComponent} from './user-acc/user-acc.component';

const userRoutes: Routes = [
  {path: 'account', component: UserAccComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {

}
