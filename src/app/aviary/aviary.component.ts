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
  displayedColumns: string[] = ['photo', 'information'];
  aviaryPhotoList: AviaryPhoto[] = [
    {
      id: 1,
      title: 'Blue-Black Grassquit',
      photo: 'assets/birds/blue-black-grassquit.jpg',
      votes: 120,
      uploadDate: '2025-05-01',
      author: 'John Bird',
      comments: [],
      public: true,
    },
    {
      id: 2,
      title: 'Village Weaver', 
      photo: 'assets/birds/village-weaver1.jpg',
      votes: 95,
      uploadDate: '2025-05-03',
      author: 'Jane Featherstone',
      comments: [],
      public: true,
    },
    {
      id: 3,
      title: 'Lilac-Breasted Roller',
      photo: 'assets/birds/lilac-breasted-roller.jpg',
      votes: 150,
      uploadDate: '2025-05-05',
      author: 'Alice Nestington',
      comments: [],
      public: true,
    },
    {
      id: 4,
      title: 'Better Village Weaver',
      photo: 'assets/birds/village-weaver2.jpg',
      votes: 200,
      uploadDate: '2025-05-07',
      author: 'Jane Featherstone',
      comments: [],
      public: true,
    },
    {
      id: 5,
      title: 'Golden Pheasant',
      photo: 'assets/birds/lesser-spotted-eagle.jpg',
      votes: 180,
      uploadDate: '2025-05-09',
      author: 'Michael Beakman',
      comments: [],
      public: true,
    },
    {
      id: 6,
      title: 'Toucan',
      photo: 'assets/birds/brown-hooded-kingfisher.jpg',
      votes: 170,
      uploadDate: '2025-05-11',
      author: 'Sarah Talon',
      comments: [],
      public: true,
    },
    {
      id: 7,
      title: 'Crested Barbet',
      photo: 'assets/birds/crested-barbet.jpg',
      votes: 190,
      uploadDate: '2025-05-13',
      author: 'Chris Flock',
      comments: [],
      public: true,
    },
    {
      id: 7,
      title: 'Crested Barbet',
      photo: 'assets/birds/big-bird.jpg',
      votes: 190,
      uploadDate: '2025-05-13',
      author: 'Sarah Talon',
      comments: [],
      public: true,
    },
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.aviaryPhotoList);
  }
}
