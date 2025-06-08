import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AviaryPhoto } from '../models/models';
import { Comment } from '../models/models';

@Component({
  selector: 'app-detail-view',
  standalone: false,
  templateUrl: './aviary-detail-view.component.html',
  styleUrl: './aviary-detail-view.component.scss',
})
export class AviaryDetailViewComponent implements OnInit {

  aviaryPhoto: AviaryPhoto;
  loaded: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AviaryDetailViewComponent>
  ) {
    this.aviaryPhoto = data;
  }

  ngOnInit(): void {
    console.log('Dialog data:', this.aviaryPhoto);
    this.setComments();
    this.loaded = true;
  }

  closeDialog() {
    this.dialogRef.close('Dialog closed');
  }
  
  /*
  * Comments were accidentally stored as strings in the mongoDB instead of separate objects.
  * As a result, comments need to be parsed into a Comment object to meet display expectations on the UI.
  */
  setComments() {
    let parsedComments: Comment[] = [];
    this.aviaryPhoto.comments.forEach(comment => {
      const parsedComment: Comment = JSON.parse(comment);
      parsedComments.push(parsedComment);
    });
    this.aviaryPhoto.parsedComments = parsedComments;
  }

  
}

