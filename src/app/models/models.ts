export interface NestProfile {
  id: number;
  profileName: string;
  uploadedPhotos: AviaryPhoto[];
  profilePicture: string;
}

export interface AviaryPhoto {
  id: number;
  title: string;
  photo: string;
  votes: number;
  uploadDate: string;
  author: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  profileName: string;
  profilePicture: string;
  text: string;
}
