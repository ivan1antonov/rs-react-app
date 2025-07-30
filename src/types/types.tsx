export interface resultsType {
  name: string;
  text: string;
  url: string;
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

export interface Responce {
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
  results: Responce[];
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}
