import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCropperModule, ImageCropperComponent } from 'ngx-image-cropper';


export interface ImageData {
  ImageBase64: string;
}


@Component({
  selector: 'app-image-croper',
  templateUrl: './image-croper.component.html',
  styleUrls: ['./image-croper.component.css']
})
export class ImageCroperComponent  {

  constructor(
    public dialogRef: MatDialogRef<ImageCroperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageData) { }

    @ViewChild('cropper', {static: false}) croper:ImageCropperComponent;
    imageChangedEvent: any = '';
    croppedImage: any = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
    console.log('File Changed');
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
}
  imageLoaded() {
    // show cropper
    console.log('Image loaded');
  }
  loadImageFailed() {
    // show message
  }
  onTest() {
    console.log('Crop()');

  }
}
