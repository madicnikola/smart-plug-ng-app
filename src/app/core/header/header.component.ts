import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {State} from '../../auth/store/auth.reducers';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {Logout} from '../../auth/store/auth.actions';
import {FetchSmartPlugs} from '../../smart-plugs/store/smart-plug.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authState: Observable<State>;

  constructor(private store: Store<AppState>) {
    this.authState = this.store.select('auth');
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  fetchSmartPlugs() {
    this.store.dispatch(new FetchSmartPlugs());
  }
}
