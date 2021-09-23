import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  fileName: string = '';
  uploadProgress: any;
  requiredFileType: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onFileSelected($event) {
    let file = $event.target.files[0];

    if (file) {
      this.fileName = file.name;
      let formData = new FormData();

      formData.append("thumbnail", file);

      let upload$ = this.http.post("/api/upload", formData);

      upload$.subscribe();
    }
  }

  cancelUpload() {
    console.log("Cancel upload!")
  }
}
