import { uiProcess} from './ui-process';
import { addMoreFilms, resetNumberShownFilms } from './ui-process';

let state: {
  numberShownFilms: number,
  error: null | {
    message: string,
    code: number,
  }
} = {
  numberShownFilms: 8,
  error: null,
};

describe('Reducer: uiProcess', () => {
  beforeAll(() => {
    state = {
      numberShownFilms: 8,
      error: null,
    };
  });

  it('without additional parametrs should return initial state', () => {
    expect(uiProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'})) /// void 0 === undefined
      .toEqual({...state});
  });

  it('should increment the number of films to be shown', () => {
    expect(uiProcess.reducer(state, addMoreFilms()))
      .toEqual({...state, numberShownFilms: 16});
  });

  it('should have reset the number of films to be shown', () => {
    expect(uiProcess.reducer(state, resetNumberShownFilms()))
      .toEqual({...state, numberShownFilms: 8});
  });

  // it('should increase number of mistakes with the wrong answer', () => {
  //   const state = {step: 0, mistakes: 0};
  //   const wrongArtistQuestionAnswer = 'unknown';
  //   const wrongGenreQuestionAnswer = mockFakeGenreQuestion
  //     .answers
  //     .map((answer) => answer.genre !== mockFakeGenreQuestion.genre);

  //   expect(uiProcess.reducer(state, checkUserAnswer({question: mockArtistQuestion, userAnswer: wrongArtistQuestionAnswer})))
  //     .toEqual({step: 0, mistakes: 1});

  //   expect(uiProcess.reducer(state, checkUserAnswer({question: mockFakeGenreQuestion, userAnswer: wrongGenreQuestionAnswer})))
  //     .toEqual({step: 0, mistakes: 1});
  // });

  // it('should not increase mistakes with the correct answer', () => {
  //   const state = {step: 0, mistakes: 0};
  //   const {artist: correctlyArtistQuestionAnswer} = mockArtistQuestion.song;
  //   const correctlyGenreQuestionAnswer = mockFakeGenreQuestion
  //     .answers.map((answer) => answer.genre === mockFakeGenreQuestion.genre);

  //   expect(uiProcess.reducer(state, checkUserAnswer({question: mockArtistQuestion, userAnswer: correctlyArtistQuestionAnswer})))
  //     .toEqual({step: 0, mistakes: 0});

  //   expect(uiProcess.reducer(state, checkUserAnswer({question: mockFakeGenreQuestion, userAnswer: correctlyGenreQuestionAnswer})))
  //     .toEqual({step:0, mistakes: 0});
  // });

});
