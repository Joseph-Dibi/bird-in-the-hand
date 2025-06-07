import { Component, OnInit } from '@angular/core';
import { AviaryPhoto } from '../models/models';
import { MatTableDataSource } from '@angular/material/table';
import { BirdManagementService } from '../bird-management.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailViewComponent } from '../detail-view/detail-view.component';

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
        this.dataSource = new MatTableDataSource(photos);
      });
  }

  openPhotoDetailDialog(aviaryPhoto: AviaryPhoto) {
    this.dialog.open(DetailViewComponent, {
      data: aviaryPhoto,
    });
  }

  voteForPhoto(aviaryPhoto: AviaryPhoto) {}
}
