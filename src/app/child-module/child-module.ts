import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'

import { QuillModule } from 'ngx-quill'
import { MatQuillModule } from '../mat-quill/mat-quill-module'
import { ChildComponent } from './child.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [ChildComponent],
  imports: [
    QuillModule,
    MatQuillModule,
    MatFormFieldModule,
    ReactiveFormsModule],
  providers: []
})
export class ChildModule { }
