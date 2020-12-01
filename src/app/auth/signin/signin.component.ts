import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/app.reducers';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {NgForm} from '@angular/forms';
import {TrySignin} from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  ngOnInit(): void {
  }


  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new TrySignin({username: email, password: password}));

  }
}
