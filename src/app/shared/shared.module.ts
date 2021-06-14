import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppDialogComponent} from './dialog/app-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    DropdownDirective,
    AppDialogComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    NgbModule,
  ]
})
export class SharedModule {

}
