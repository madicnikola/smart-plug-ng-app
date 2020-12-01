import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-smart-plugs',
  templateUrl: './smart-plugs.component.html',
  styleUrls: ['./smart-plugs.component.css']
})
export class SmartPlugsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
