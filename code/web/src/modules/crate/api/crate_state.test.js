import {
    CRATES_GET_LIST_REQUEST,
    CRATES_GET_LIST_RESPONSE,
    CRATES_GET_LIST_FAILURE,
    CRATES_GET_REQUEST,
    CRATES_GET_RESPONSE,
    CRATES_GET_FAILURE,
  } from './actions'
import  { crates }  from './state'
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';

describe('cratesActions', () => {

    let fakeInitialState, reducer, mockCrates
  
      beforeEach(() =>{

        reducer = crates;

        fakeInitialState = {
            isLoading: false,
            error: null,
            list: []
        };

        mockCrates = [
          {
            name: 'a fake Crate',
            description: 'A fake description',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]
    })
  
    it('should be able to make a request with CRATES_GET_LIST_REQUEST', () => {
  
      expect(reducer(fakeInitialState, {
        type: CRATES_GET_LIST_REQUEST,
        isLoading: true,
        error: null
      }
      )).toEqual({
        "error": null,
        "isLoading": true,
        "list":[]
      });
    })

    it('should be able to get user\'s crates with CRATES_GET_LIST_RESPONSE', () => {
  
      expect(reducer(fakeInitialState, {
        type: CRATES_GET_LIST_RESPONSE,
        isLoading: false,
        error: 'enjoy your crate',
        list: mockCrates 
      }
      )).toEqual({
        isLoading: false,
        error: 'enjoy your crate',
        list: mockCrates
      });
    })

    it('should be able to display an error with CRATES_GET_LIST_FAILURE' , () => {
  
      expect(reducer(fakeInitialState, {
        type: CRATES_GET_LIST_FAILURE,
        isLoading: false,
        error: 'An error occurred, please try again'
      }
      )).toEqual({
        isLoading: false,
        error: 'An error occurred, please try again',
        list: []
      });
    })
})

describe('crateActions', () => {

    let fakeInitialState, fakeCrate, reducer
  
      beforeEach(() =>{

        reducer = crates;

        fakeInitialState = {
            isLoading: false,
            error: null,
            item: {}
        };

        fakeCrate = {
            id: 0,
            name: 'a fake crate name',
            description: 'A fake subscription',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        
    })
  
    it('should be able to request with CRATES_GET_REQUEST', () => {
  
      expect(reducer(fakeInitialState, {
        type: CRATES_GET_REQUEST,
        isLoading: true,
        error: null
      }
      )).toEqual(fakeInitialState);
    })

    it.skip('should be able to get a response with CRATES_GET_RESPONSE', async() => {
    
      await waitFor(() => expect(reducer(fakeInitialState, {
        type: CRATES_GET_RESPONSE,
        isLoading: false,
        error: 'no errors',
        item: fakeCrate
      }
      ))).toEqual({});
    })
    //await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
   
})