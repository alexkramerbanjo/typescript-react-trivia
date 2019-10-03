export interface GameProps {
  questions?: Array<Question>;
  err?: boolean;
  setInGame: (bool: boolean) => void;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface GameResponse {
  response_code: number;
  results: Array<Question>;
}

export interface ResultsProps {
  setInGame: (bool: boolean) => void;
  questions: Question[] | undefined;
  points: number[];
}
