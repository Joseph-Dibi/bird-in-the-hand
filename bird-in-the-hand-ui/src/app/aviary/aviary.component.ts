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

  ngOnInit(): void {
    /*
      The data source is set to the aviaryPhotoList array, which contains the list of photos.
      The MatTableDataSource is a data source that can be used with Angular Material tables.
      It provides features like sorting, pagination, and filtering out of the box. Once the processing layer is added,
      the data source will be set to the result of the API call to fetch the photos. There may be a later need to override
      the default features of the MatTableDataSource to add custom sorting or filtering logic.
    */
    this.birdManagementService
      .getAviaryPhotos()
      .subscribe((photos: AviaryPhoto[]) => {
        const sortedPhotos = photos.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
        this.dataSource = new MatTableDataSource(sortedPhotos);
      });
  }

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
