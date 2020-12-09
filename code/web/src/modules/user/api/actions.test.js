import  * as actions from './actions'

import axios from 'axios';
import { query, mutation } from 'gql-query-builder';
import cookie from 'js-cookie';

describe('actions', () => {

  beforeEach(() =>{
    fakeCredentials = {
        email: "fake@email.com", 
        password: "111111"
    }

    mockState = {
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
        isSurveyCompleted: false
    }
  })

  it('should be able to login', () => {

    expect(true).toEqual(false);
  })

});