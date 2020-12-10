import  * as actions from './actions'
import  userReducer from './state'
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';

describe('userActions', () => {

  let fakeState, reducer;

    beforeEach(() =>{
      reducer = userReducer
      fakeState = {
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
        isSurveyCompleted: false
      }
  })

  it('is test working', () => {
    expect(true).toEqual(true);
  })

  it('it should return the initial state', () =>{
    expect(reducer(undefined, {})).toEqual(fakeState)
  });

  
});