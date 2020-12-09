import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SmartPlugFeatureState, State} from '../store/smart-plug.reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FetchSmartPlugs} from '../store/smart-plug.actions';

@Component({
  selector: 'app-smart-plug-list',
  templateUrl: './smart-plug-list.component.html',
  styleUrls: ['./smart-plug-list.component.css']
})
export class SmartPlugListComponent implements OnInit {
  smartPlugState: Observable<State>;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<SmartPlugFeatureState>) {
  }

  ngOnInit(): void {
    this.smartPlugState = this.store.select('smartPlugsState');
    this.store.dispatch(new FetchSmartPlugs());
  }

  onNewSmartPlug() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
