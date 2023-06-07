import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import Counter from './counter';
import { ChildModule } from './child-module/child-module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    ChildModule,
    QuillModule.forRoot({
      customModules: [
        {
          implementation: Counter,
          path: 'modules/counter',
        },
      ],
      customOptions: [
        {
          import: 'formats/font',
          whitelist: [
            'mirza',
            'roboto',
            'aref',
            'serif',
            'sansserif',
            'monospace',
          ],
        },
      ],
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
