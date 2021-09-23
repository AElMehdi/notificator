import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  fileName: string = '';
  uploadProgress: any;
  requiredFileType: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onFileSelected($event: Event) {
    console.log("File selected!")
  }

  cancelUpload() {
    console.log("Cancel upload!")
  }
}
