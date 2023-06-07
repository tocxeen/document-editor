import { Component } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  public Editor = ClassicEditor;

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (
      loader
    ) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }
  onChange(event: ChangeEvent): void {
    console.log(event.editor.data);
  }
}
class UploadAdapter {
  private loader;

  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          var myReader = new FileReader();
          myReader.onloadend = (e) => {
            resolve({ default: myReader.result });
          };

          myReader.readAsDataURL(file);
        })
    );
  }
 
}
// export class UploadAdapter {
//   private loader;
//   constructor(loader: any) {
//     this.loader = loader;
//     console.log(this.readThis(loader.file));
//   }

//   public upload(): Promise<any> {
//     //"data:image/png;base64,"+ btoa(binaryString)
//     return this.readThis(this.loader.file);
//   }

//   readThis(file: File): Promise<any> {
//     console.log(file);
//     let imagePromise: Promise<any> = new Promise((resolve, reject) => {
//       var myReader: FileReader = new FileReader();
//       myReader.onloadend = (e) => {
//         let image = myReader.result;
//         console.log(image);
//         return { default: 'data:image/png;base64,' + image };
//         // resolve();
//       };
//       myReader.readAsDataURL(file);
//     });
//     return imagePromise;
//   }
// }
