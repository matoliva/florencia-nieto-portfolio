export interface ImageGallery {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
}

export interface IProject {
  title: string;
  description: string;
  cover: string;
  imageGallery: ImageGallery[];
  headerImage: string;
  beforeGallery: ImageGallery[];
}
