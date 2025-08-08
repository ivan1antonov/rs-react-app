export interface resultsType {
  name: string;
  text: string;
  url: string;
}

export interface responseType {
  id: number;
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  image: string;
}

export interface ContentBoxProps {
  data: resultsType[];
}

export interface ContentProps extends ContentBoxProps {
  isError: () => void;
  shouldThrow?: boolean;
}

export interface AppState {
  data: resultsType[];
  inputValue: string;
  shouldThrow: boolean;
  isLoading: boolean;
}

export interface Response {
  name: string;
  height: string;
  mass: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
}

export interface InputData {
  results: Response[];
}

export interface Person {
  image: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  gender: string;
  url: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export type Item = {
  name: string;
  height: string;
  mass: string;
  image: string;
};
