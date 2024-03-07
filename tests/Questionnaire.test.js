import React from 'react'
import axios from 'axios'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Questionnaire from '../src/components/Questionnaire.jsx'
import { afterEach } from 'node:test'

afterEach(cleanup)

describe('Quesionnaire tests', () => {
    test('Questionnaire should render successfully', () => {
        render(<Questionnaire />, );
        const questionnaireDiv = document.querySelector('.sd-body');
        expect(questionnaireDiv).toBeTruthy();
    });

    test('onComplete should run with inputs and click on Complete button',async () => {
        const updateMoviesListMock = jest.fn();
        const mAxiosResponse = {
            data: {}
        };
        const user = userEvent.setup();
        let fields;
        let option1;
        let option2;
        const spy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);

        render(<Questionnaire updateMoviesList={updateMoviesListMock}/>);

        fields = screen.getAllByRole('combobox');
        option1 = screen.getByText('Hulu');
        option2 = screen.getByText('Action');

        //Choose "Hulu" option in "Select all streaming services to search" selector
        await user.click(fields[0]);

        //Type "Hulu" and press Enter
        await user.click(option1);

        //click to collapse tagbox
        await user.click(fields[0]);

        //Choose "Action" option in "Select movie genre" selector
        await user.click(fields[1]);

        //Press "Enter" to actually choose the "Action" option
        await user.click(option2);
        
        //click to collpase tagbox
        await user.click(fields[1]);

        //Click "Complete" button to submit form
        await user.click(screen.getByText('Complete'))
        .then(() => {
            console.log('Complete Button clicked!');
        });

        await waitFor(() => expect(spy).toBeCalled(), { timeout: 5000 });
        await waitFor(() => expect(updateMoviesListMock).toBeCalled(), { timeout: 5000 });
    });

});