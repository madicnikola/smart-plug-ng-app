import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SmartPlugFeatureState} from '../store/smart-plug.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-smart-plug-add',
  templateUrl: './smart-plug-add.component.html',
  styleUrls: ['./smart-plug-add.component.css']
})
export class SmartPlugAddComponent implements OnInit {
  smartPlugForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<SmartPlugFeatureState>) {
  }

  private initForm() {
    let plugID = '';
    this.smartPlugForm = new FormGroup({
      'plugID': new FormControl(plugID, Validators.required),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  addSocket() {

  }

  onAdd() {

  }
}
