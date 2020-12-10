import  * as actions from './actions'
import  userReducer from './state'
import { isEmpty } from '../../../setup/helpers'
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';

describe('userActions', () => {

  let fakeState, reducer, fakeUser, fakeLoginState;

    beforeEach(() =>{

      fakeUser = {
        name: "The User",
        email: "user@crate.com",
        role: "USER"
      };

      reducer = userReducer;

      fakeState = {
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
        isSurveyCompleted: false
      };

      fakeLoginState = {
        error: null,
        isLoading: false,
        isAuthenticated: true,
        details: fakeUser,
        isSurveyCompleted: false
      };

  })

  // it('should work', () => {
  //   //test ASIGN_STYLE
    
  //   expect(reducer(fakeState, {

  //   }))
  //   .toEqual(true)

  //   expect(true).toEqual(true);
  // })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fakeState)
  });
  
  
  it('should be able to make a LOGIN_REQUEST', () => {
    expect(reducer(fakeState, {
      type: actions.LOGIN_REQUEST,
      isLoading: true
    }
    )).toEqual(
      {
        "details": null,
        "error": null,
        "isAuthenticated": false,
        "isLoading": true,
        "isSurveyCompleted": false
      }
      )
    })
    
    it.skip('should be able to SET_USER when logged in', () => {
      expect(reducer(fakeState, {
        type: actions.SET_USER,
        isAuthenticated: !isEmpty(fakeUser),
        details: fakeUser

      }
      )).toEqual({fakeLoginState})
    });

    it('should be able to make a LOGIN_RESPONSE', ()=> {
      expect(reducer(fakeState, {
        type: actions.LOGIN_RESPONSE,
        error: 'fake error',
        isLoading: false
      }
      )).toEqual(
        {
          "details": null,
          "error": "fake error",
          "isAuthenticated": false,
          "isLoading": false,
          "isSurveyCompleted": false,
        }
      )
    })

    it('should be able to LOG_OUT', ()=> {
      expect(reducer(fakeState, {
        type: actions.LOGOUT,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }
      )).toEqual(
        {
          "details": null,
          "error": null,
          "isAuthenticated": false,
          "isLoading": false,
          "isSurveyCompleted": false,
        }
      )
    })
    


});