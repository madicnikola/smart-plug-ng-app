import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'smart-plugs', loadChildren: () => import('./smart-plugs/smart-plugs.module').then(m => m.SmartPlugsModule), canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {

}
