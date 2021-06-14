import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {TryAddNewSmartPlug} from "../store/smart-plug.actions";
import {Observable} from "rxjs";
import {SmartPlugFeatureState} from "../store/smart-plug.reducers";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-smart-plug-add',
  templateUrl: './smart-plug-add.component.html',
  styleUrls: ['./smart-plug-add.component.css']
})
export class SmartPlugAddComponent implements OnInit {
  smartPlugForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<SmartPlugFeatureState>,
              public dialog: MatDialog) {
  }

  private initForm() {
    const plugID = '';
    this.errorMessage = '';
    this.smartPlugForm = new FormGroup({
      plugID: new FormControl(plugID, [Validators.required, Validators.pattern('[0-9]*')]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onAdd() {
    const plugId = this.smartPlugForm.get('plugID').value;
    console.log(plugId);
    this.store.dispatch(new TryAddNewSmartPlug(plugId));
     }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
