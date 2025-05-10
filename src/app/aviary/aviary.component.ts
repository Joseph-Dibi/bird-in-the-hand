import { Component, OnInit } from '@angular/core';
import { AviaryPhoto } from '../models/models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aviary',
  standalone: false,
  templateUrl: './aviary.component.html',
  styleUrl: './aviary.component.scss',
})
export class AviaryComponent implements OnInit {

  dataSource = new MatTableDataSource<AviaryPhoto>();
  displayedColumns: string[] = ['photo'];
  aviaryPhotoList: AviaryPhoto[] = [
    {
      id: 1,
      title: 'Bird in Flight',
      photo: 'assets/birds/blue-black-grassquit.jpg',
      votes: 120,
      uploadDate: '2025-05-01',
      author: 'John Doe',
      comments: [],
    },
    {
      id: 2,
      title: 'Perched Beauty',
      photo: 'assets/birds/village-weaver1.jpg',
      votes: 95,
      uploadDate: '2025-05-03',
      author: 'Jane Smith',
      comments: [],
    },
    {
      id: 3,
      title: 'Colorful Wings',
      photo: 'assets/birds/lilac-breasted-roller.jpg',
      votes: 150,
      uploadDate: '2025-05-05',
      author: 'Alice Johnson',
      comments: [],
    },
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.aviaryPhotoList);
  }
}
