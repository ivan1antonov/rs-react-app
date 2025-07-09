export interface resultsType {
  name: string;
  text: string;
}

export interface ContentBoxProps {
  data: resultsType[];
}

export interface AppState {
  data: resultsType[];
  inputValue: string;
}

export interface Responce {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
}

export interface InputData {
  results: Responce[];
}
