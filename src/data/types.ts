// types.ts
export type DateType = {
  start: {};
  end: {};
};

export type AnswersType = {
  destination: string;
  date: DateType;
  goers: string;
  activities: string[];
  budget: number;
};

export type HandleAnswerType = (
  question: keyof AnswersType,
  answer: string | string[] | number | {}
) => void;

// types.ts
export type ErrorsType = {
  destination: string;
  date: string;
  goers: string;
  activities: string;
  budget: string;
};
