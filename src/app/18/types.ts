export type ImageType = {
  url: string;
  width: number;
  height: number;
};

export type Character = {
  name: string;
  description: string;
  coverImage: string;
  bgImage: string;
  image: ImageType;
  height: string;
  movies: string[];
  weapons: string[];
  species: string;
};
