import { Component, OnInit } from '@angular/core';
import { AviaryPhoto, NestProfile } from '../models/models';

@Component({
  selector: 'app-nest',
  standalone: false,
  templateUrl: './nest.component.html',
  styleUrl: './nest.component.scss',
})
export class NestComponent implements OnInit {
  aviaryPhotoList: AviaryPhoto[] = [
    {
      id: 2,
      title: 'Village Weaver',
      photo: 'assets/birds/village-weaver1.jpg',
      votes: 95,
      uploadDate: '2025-05-03',
      author: 'Jane Featherstone',
      comments: [],
      public: false,
    },
    {
      id: 3,
      title: 'Lilac-Breasted Roller',
      photo: 'assets/birds/african-darter.jpg',
      votes: 150,
      uploadDate: '2025-05-05',
      author: 'Jane Featherstone',
      comments: [],
      public: false,
    },
    {
      id: 4,
      title: 'Better Village Weaver',
      photo: 'assets/birds/village-weaver2.jpg',
      votes: 200,
      uploadDate: '2025-05-07',
      author: 'Jane Featherstone',
      comments: [],
      public: false,
    },
    {
      id: 5,
      title: 'Wire Tailed Swallow',
      photo: 'assets/birds/wire-tailed-swallow.jpg',
      votes: 180,
      uploadDate: '2025-05-09',
      author: 'Jane Featherstone',
      comments: [],
      public: false,
    },
  ];

  profile: NestProfile = {
    id: 1,
    profileName: 'Jane Featherstone',
    profilePicture: 'assets/icons/jane-featherstone.jpg',
    description: 'A passionate bird photographer and conservationist.',
    location: 'Cape Town, South Africa',
    memberSince: '2023-01-15',
    uploadedPhotos: this.aviaryPhotoList,
  };
  currentIndex: number = 0;

  onSliderChange(event: any): void {
    this.currentIndex = event.value;
  }
  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
