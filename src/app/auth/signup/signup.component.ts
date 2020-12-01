import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TrySignin, TrySignup} from '../store/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignup({username: email, password: password}));

  }
}
