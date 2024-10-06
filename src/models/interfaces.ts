export interface ImageGallery {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IProject {
  title: string;
  description: string;
  cover: string;
  imageGallery: ImageGallery[];
  headerImage: string;
  beforeGallery: ImageGallery[];
}
