
import React from 'react'
import { screen, render, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { store } from '../../setup/store'
import userEvent from '@testing-library/user-event';
//UI imports
import StyleSurvey from './StyleSurvey'
import Item from '../subscription/Item';
import styleSurveyData from './StyleSurveyData'

describe('StyleSurvey component', () => {

    let mockData, mockState;

    beforeEach(()=> {
        mockData = {
            athletic: 0,
            casual: 1,
            bussines: 2,
            accessories: 3,
            shoes: 4
        }

        mockState = {
			currentAnswer: null,
			userAnswers: {
				athletic: 0,
				'business attire': 0,
				'casual everyday': 0
			},
			currentIndex: 0,
            survey: 'athletic'
        }

        styleSurveyData.map(surveyData => {
            return surveyData.images.map(image => {
                return image.selected = false;
            })
        })
    })

    it('should render component without chrashin by displaying the appropiate banner', () =>{

        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey />
                </MemoryRouter>
            </Provider>
        )

        const banner = screen.getByRole('heading', { name: /let's find out your perfect style\./i })
        expect(banner).toBeInTheDocument()

    });

    it('should be able to navigate to the next category when clicking NEXT', () =>{

        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey />
                </MemoryRouter>
            </Provider>
        )

        const topsCategory = screen.getByRole('heading', { name: /tops/i })
        expect(topsCategory).toBeInTheDocument()
        
        const nextButton = screen.getByRole('button', { name: /next/i })
        expect(nextButton).toBeInTheDocument()
        userEvent.click(nextButton)
        
        const bottonsCategory= screen.getByRole('heading', { name: /Bottoms/i })
        expect(bottonsCategory).toBeInTheDocument()
    })

    it('should be able to render the tops category, then select one', () => {
        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey />
                </MemoryRouter>
            </Provider>
        )
        const topsCategory = screen.getByRole('heading', { name: /tops/i })
        expect(topsCategory).toBeInTheDocument()
        // render all category options
        const imageOne = screen.getByTestId('athletic-top-image')
        const imageTwo = screen.getByTestId('business-top-image')
        const imageThree = screen.getByTestId('casual-top-image')

        expect(imageOne).toBeInTheDocument()
        expect(imageTwo).toBeInTheDocument()
        expect(imageThree).toBeInTheDocument()

        const buttonOne = screen.getByTestId('athletic-top-button')
        const buttonTwo = screen.getByTestId('business-top-button')
        const buttonThree = screen.getByTestId('casual-top-button')

        expect(buttonOne).toBeInTheDocument()
        expect(buttonTwo).toBeInTheDocument()
        expect(buttonThree).toBeInTheDocument()

         expect(buttonOne).toHaveTextContent('Select this style')
         
         userEvent.click(buttonOne)
         
         expect(buttonOne).toHaveTextContent('Unselect this style')
    })

    it('should be able to select more than one option', () => {

        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey/>
                </MemoryRouter>
            </Provider>
        )


        const imageOne = screen.getByTestId('athletic-top-image')
        const imageTwo = screen.getByTestId('business-top-image')

        expect(imageOne).toBeInTheDocument()
        expect(imageTwo).toBeInTheDocument()

        const buttonOne = screen.getByTestId('athletic-top-button')
        const buttonTwo = screen.getByTestId('business-top-button')

        expect(buttonOne).toBeInTheDocument()
        expect(buttonTwo).toBeInTheDocument()
            
        expect(buttonOne).toHaveTextContent('Select this style')
        expect(buttonTwo).toHaveTextContent('Select this style')
         
         userEvent.click(buttonOne)
         userEvent.click(buttonTwo)

         expect(buttonOne).toHaveTextContent('Unselect this style')
         expect(buttonTwo).toHaveTextContent('Unselect this style')
    })

    it('should be able click on the submit button once it has reached the las question', () => {
        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey />
                </MemoryRouter>
            </Provider>
        )

        const topsCategory = screen.getByRole('heading', { name: /tops/i })
        expect(topsCategory).toBeInTheDocument()
        
        const nextButton = screen.getByRole('button', { name: /next/i })
        expect(nextButton).toBeInTheDocument()
        
        userEvent.click(nextButton)
        
        const bottomsCategory = screen.getByRole('heading', { name: /Bottoms/i })
        expect(bottomsCategory).toBeInTheDocument()
        
        const backButton = screen.getByRole('button', { name: /back/i })
        expect(backButton).toBeInTheDocument()
        
        userEvent.click(backButton)
        
        expect(topsCategory).toBeInTheDocument()
    })
    
    it('should be able to submit a all answers after completing the survey', () => {
        render(
            <Provider store={store} key="provider">
                <MemoryRouter>
                    <StyleSurvey />
                </MemoryRouter>
            </Provider>
        )
        
        const nextButton = screen.getByRole('button', { name: /next/i })
        expect(nextButton).toBeInTheDocument()
        
        userEvent.click(nextButton)
        userEvent.click(nextButton)
        userEvent.click(nextButton)
        
        const submitButton = screen.getByRole('button', { name: /submit/i })
        expect(submitButton).toBeInTheDocument()

    })
    
})