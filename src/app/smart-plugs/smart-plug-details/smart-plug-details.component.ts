import {Component, Input, OnInit} from '@angular/core';
import {SmartPlug} from '../../shared/SmartPlug.model';
import {Observable} from 'rxjs';
import {SmartPlugFeatureState, State} from '../store/smart-plug.reducers';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ChangeName, ChangePowerState, UpdateSmartPlug} from '../store/smart-plug.actions';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-smart-plug-details',
  templateUrl: './smart-plug-details.component.html',
  styleUrls: ['./smart-plug-details.component.css']
})
export class SmartPlugDetailsComponent implements OnInit {
  smartPlugState: Observable<State>;
  @Input() smartPlug: SmartPlug;
  index: number;
  smartPlugForm: FormGroup;
  refreshed: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<SmartPlugFeatureState>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];

        this.smartPlugState = this.store.select('smartPlugsState');
        this.smartPlugState.pipe(take(1)).subscribe(
          value => {
            this.smartPlug = value.smartPlugs[this.index];
          });

      }
    )

    this.initForm();

  }

  onToggle(event: MatSlideToggleChange) {
    const powerState: boolean = event.checked;
    console.log(powerState);
    this.store.dispatch(new ChangePowerState({id: this.smartPlug.id, powerState: powerState}));
  }

  private initForm() {
    this.smartPlugForm = this.formBuilder.group({
      name: this.smartPlug.name,
      powerSwitch: this.smartPlug.turnedOn,
      // powerState: this.smartPlug.turnedOn
    });
    this.route.params.subscribe(value => {
      this.smartPlugForm.get('name').markAsUntouched();
      this.smartPlugForm.get('name').markAsPristine();

    });

  }

  onChangeName() {
    const smartPlugPayload = {
      ...this.smartPlug,
      name: this.smartPlugForm.get('name').value
    };
    this.store.dispatch(new UpdateSmartPlug({id: this.smartPlug.id, smartPlug: smartPlugPayload}));
  }

}
