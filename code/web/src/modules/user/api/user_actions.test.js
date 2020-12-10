import  * as actions from './actions'
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';


import axios from 'axios';
import { query, mutation } from 'gql-query-builder';
import cookie from 'js-cookie';

describe('userActions', () => {

let fakeCredentials, mockInitialState, middlewares;
    
    beforeEach(() =>{
    
    middlewares = [thunk];

    fakeCredentials = {
        email: "fake@email.com", 
        password: "111111"
    }

    mockInitialState = {
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

  // it('should be able to login', async () => {
  //   // Setup

  //   const isLoading = true;

  //   const loginRequestAction = {
  //     type: actions.LOGIN_REQUEST,
  //     isLoading: true
  //   }

  //   const loginResponseAction = {
  //     type: actions.LOGIN_RESPONSE,
  //     error: '' 
  //   }

  //   // mock the axios.post method, so it will just resolve the Promise.
  //   // axios.post = jest.fn(url => {
  //   //   return Promise.resolve();
  //   // });
    
  //   // Execution
  //   const login = actions.login(fakeCredentials, isLoading );
  //   console.log(actions.login)


  //   // Expectation
  //   expect(login).toEqual(loginRequestAction);
  // });


});