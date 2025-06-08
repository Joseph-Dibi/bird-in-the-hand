import { Component, OnInit } from '@angular/core';
import { AviaryPhoto } from '../models/models';
import { Vote } from '../models/models';
import { MatTableDataSource } from '@angular/material/table';
import { BirdManagementService } from '../bird-management.service';
import { MatDialog } from '@angular/material/dialog';
import { AviaryDetailViewComponent } from '../aviary-detail-view/aviary-detail-view.component';

@Component({
  selector: 'app-aviary',
  standalone: false,
  templateUrl: './aviary.component.html',
  styleUrl: './aviary.component.scss',
})
export class AviaryComponent implements OnInit {
  dataSource = new MatTableDataSource<AviaryPhoto>();
  displayedColumns: string[] = ['photo'];

  constructor(
    private birdManagementService: BirdManagementService,
    private dialog: MatDialog
  ) {}

  /*
  * The MatTableDataSource is a data source that can be used with Angular Material tables.
  * It provides features like sorting, pagination, and filtering out of the box. 
  * Currently sorting is only done on page load; photos with the most votes are displayed first.
  * Additional considerations for sorting, filtering, and pagination can be added later to faciliate larger datasets.
  */
  ngOnInit(): void {
    this.birdManagementService
      .getAviaryPhotos()
      .subscribe((photos: AviaryPhoto[]) => {
        const sortedPhotos = photos.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
        this.dataSource = new MatTableDataSource(sortedPhotos);
      });
  }

  /*
  * Clicking on a photo opens a detail dialog displaying the photo and associated comments.
  */
  openPhotoDetailDialog(aviaryPhoto: AviaryPhoto) {
    const dialogRef = this.dialog.open(AviaryDetailViewComponent, {
      width: '60vw',
      maxWidth: '60vw',
      height: '60vh',
      data: aviaryPhoto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  /*
  * Vote for your favorite photo, then vote again if you really like it!
  * Lack of unique restrictions on the username allows users to vote multiple times for the same photo.
  * This is 'intentional' to allow users to express their enthusiasm for a photo. -- AI Reasoning
  * On release, this would be restricted to one vote per photo but certainly makes populating test data easier.
  */
  voteForPhoto(aviaryPhoto: AviaryPhoto) {
    let vote = {
      username: sessionStorage.getItem('username') ?? '',
      aviaryPhoto: aviaryPhoto.photo,

    };
    console.log(aviaryPhoto)
        this.birdManagementService
      .voteForAviaryPhoto(vote)
      .subscribe((vote: Vote) => {
        aviaryPhoto.votes += 1;
      });
  }
}
