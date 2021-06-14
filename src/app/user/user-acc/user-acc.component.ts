import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {TryPasswordChange} from '../store/user.actions';
import {Observable} from 'rxjs';
import {UserEffects} from '../store/user.effects';
import {State} from '../store/user.reducers';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-user-acc',
  templateUrl: './user-acc.component.html',
  styleUrls: ['./user-acc.component.css'],
})
export class UserAccComponent implements OnInit {
  userState: Observable<State>;
  isError: boolean = false;

  constructor(private store: Store<AppState>,
              private userEffects: UserEffects) {
  }

  ngOnInit(): void {
    this.userState = this.store.select('userState');
  }

  onChangePassword(f: NgForm) {
    const currentPassword = f.value.currentPassword;
    const newPassword = f.value.newPassword;
    this.store.dispatch(new TryPasswordChange({currentPassword, newPassword}));
    // return this.store.select('auth').pipe(take(1), switchMap((authState: fromAuth.State) => {   // fromAuth state
    this.store.select('userState').pipe(take(1), map(userState => {
      console.log('User acc - message: ' + userState.responseMessage + 'flag: ' + userState.changeSuccess);
    }));

    // this.userState.subscribe(value => {
    //   if (value.changeSuccess) {
    //     this.data.name = value.responseMessage;
    //   }
    // });
    // this.userState.pipe(take(1)).subscribe(state => {
    //   if (state.changed) {
    //     this.toastr.success(state.responseMessage);
    //   } else {
    //     this.toastr.error(state.responseMessage);
    //   }
    // });

    // this.store.select('userState').subscribe((userState) => {
    //   this.passwordChangeMessage = userState.responseMessage;
    //   if (this.passwordChangeMessage != '') {
    //     this.toastr.success(this.passwordChangeMessage);
    //   }
    // }, error => {
    //   this.toastr.error(this.passwordChangeMessage);
    // });
    // this.userEffects.userPasswordChange$.pipe(filter(action => action.type === 'TRY_PASSWORD_CHANGE'))
    //   .subscribe(
    //     value => {
    //       console.log('HELLO');
    //       this.toastr.success((<{ payload: string; type: string }> value).payload);
    //     }
    //     , error => {
    //       this.isError = true;
    //       console.log(error);
    //       this.toastr.error(error.message);
    //     });
  }

}
