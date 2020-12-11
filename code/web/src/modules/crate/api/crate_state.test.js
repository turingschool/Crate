import {
    CRATES_GET_LIST_REQUEST,
    CRATES_GET_LIST_RESPONSE,
    CRATES_GET_LIST_FAILURE,
    CRATES_GET_REQUEST,
    CRATES_GET_RESPONSE,
    CRATES_GET_FAILURE,
  } from './actions'
import  { crates, crate }  from './state'
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
            createdAt: 'mock date',
            updatedAt: 'mock date'
          }
        ]
    });
  
    it('should be able to make a request with CRATES_GET_LIST_REQUEST', () => {
      
      const action = { type: CRATES_GET_LIST_REQUEST,isLoading: true,}
      
      const result = reducer(fakeInitialState, action)

      const newState = {
        "error": null,
        "isLoading": true,
        "list":[]
      }

      expect(result).toEqual(newState)
    });

    it('should be able to get user\'s crates with CRATES_GET_LIST_RESPONSE', () => {

      const action = { type: CRATES_GET_LIST_RESPONSE, error: 'enjoy your crate',list: mockCrates }
  
      const result = reducer(fakeInitialState, action)

      const newState = {
        isLoading: false,
        error: 'enjoy your crate',
        list: mockCrates
      }

      expect(result).toEqual(newState)

    });

    it('should be able to display an error with CRATES_GET_LIST_FAILURE' , () => {
      
      const actions = {
        type: CRATES_GET_LIST_FAILURE,
        error: 'An error occurred, please try again'
      }
      const result  = reducer(fakeInitialState, actions)

      const newState = {
        isLoading: false,
        error: 'An error occurred, please try again',
        list: []
      }

      expect(result).toEqual(newState);
    });
});

describe('crateActions', () => {

    let fakeInitialState, fakeCrate, reducer;
  
      beforeEach(() =>{

        reducer = crate;

        fakeInitialState = {
            isLoading: false,
            error: null,
            item: {}
        };

        fakeCrate = {
            id: 0,
            name: 'a fake crate name',
            description: 'A fake subscription',
            createdAt: 'mock date',
            updatedAt: 'mock date'
          }
        
    });
  
    it('should be able to request with CRATES_GET_REQUEST', () => {
  
      const action = { 
        type: CRATES_GET_REQUEST,
        isLoading: true,
      }

      const result = reducer(fakeInitialState, action)

      const newState = {
        isLoading: true,
        error: null,
        item: {}
      }

      expect(result).toEqual(newState);

    });

    it('should be able to get a crate with CRATES_GET_RESPONSE', () => {

      const action = {
        type: CRATES_GET_RESPONSE,
        isLoading: false,
        error: 'no action error',
        item: fakeCrate
      }

      const result = reducer(fakeInitialState, action)

      const newState = {
        "error": "no action error",
        "isLoading": false,
        "item": {
          "createdAt": 'mock date',
          "description": "A fake subscription",
          "id": 0,
          "name": "a fake crate name",
          "updatedAt": 'mock date',
          }
        }

      expect(result).toEqual(newState);
    });

    it('should be able to show an error with CRATES_GET_FAILURE', () => {

      const action = {
        type: CRATES_GET_FAILURE,
        error: 'An error occurred please try again'
      } 

      const result = reducer(fakeInitialState, action)

      const newState = {
        "error": "An error occurred please try again",
        "isLoading": false,
        "item": {}
      }

      expect(result).toEqual(newState);
    });
});