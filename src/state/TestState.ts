import { atom } from 'recoil';

type Answer = {
  [questionNumber: number]: string;
}
type TestType = {
  currentQuestion: number,
  answers: Answer,
  completed: boolean,
  correctAnswers: number,
}

export const testState = atom<TestType>({
  key: 'testState', // unique ID (with respect to other atoms/selectors)
  default: {
    currentQuestion: 1,
    answers: {},
    completed: false,
    correctAnswers: 0
  } as TestType, // default value (aka initial value)
});
