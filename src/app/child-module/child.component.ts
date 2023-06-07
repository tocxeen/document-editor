import { Component, Inject, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';

import { QUILL_CONFIG_TOKEN, QuillConfig } from 'ngx-quill'
import { WordDocumentService } from '../services/wordDocumentService.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  @Input() control: FormControl;
  selectedFile: any;
  fileContent: any;

  constructor(
    @Inject(QUILL_CONFIG_TOKEN) config: QuillConfig,
    private wordService: WordDocumentService,
    private http:HttpClient
  ) {
    // tslint:disable-next-line:no-console
    console.log('Child-Module - Global config', config);
  }

  change(event) {
    console.log(event);
  }

  fileSelected(event) {
    const file = event.target.files[0];
     const formData: FormData = new FormData();
     formData.append('file', file, file.name);
    this.http.post('http://localhost:3000/docs', formData).subscribe({
      next: (data: any) => {
        console.log(data);
        this.control.patchValue(data.url);
      },

      error: (err) => {
        console.error(err);
      },
    });
    
  
    
  }

  

  
  readFileContent(data) {
    const reader = new FileReader();

    reader.onload = () => {
      this.fileContent = reader.result as string;
      this.control.patchValue(this.fileContent);
    };

    reader.readAsText(this.selectedFile);
  }

  ngOnInit() {
    this.control = this.control ?? new FormControl();
  }
}
