import {Component, Input, OnInit} from '@angular/core';
import {SmartPlug} from '../../../shared/SmartPlug.model';

@Component({
  selector: 'app-smart-plug-item',
  templateUrl: './smart-plug-item.component.html',
  styleUrls: ['./smart-plug-item.component.css']
})
export class SmartPlugItemComponent implements OnInit {
  @Input() smartPlug: SmartPlug;
  @Input() index: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
