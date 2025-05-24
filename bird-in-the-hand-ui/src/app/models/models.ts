export interface NestProfile {
  id: number;
  profileName: string;
  profilePicture: string;
  description: string;
  location: string;
  memberSince: string;
  uploadedPhotos: AviaryPhoto[];
}

export interface AviaryPhoto {
  id: number;
  title: string;
  photo: string;
  votes: number;
  uploadDate: string;
  author: string;
  comments: Comment[];
  public: boolean;
}

export interface Comment {
  id: number;
  profileName: string;
  profilePicture: string;
  text: string;
}

export interface Registration {
  username: string;
  password: string;
  email: string;
}