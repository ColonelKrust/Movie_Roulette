import React from 'react'
import axios from 'axios'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import App from '../src/components/App.jsx'
import { afterEach } from 'node:test';
import userEvent from '@testing-library/user-event'

afterEach(cleanup);

describe('Main App component tests', () => {
    test('Should render app div', () => {
        render(<App />, );
        const appDiv = screen.getByTestId('appComponent');
        expect(appDiv).toBeTruthy();
    });
    /*
    test('App state should be updated with array of movies/chosenMovie object, called from Questionnaire onComplete', async () => {
        const mAxiosResponse = {
            data: { 
                result:
                    [
                        {
                            "type": "movie",
                            "title": "The Marvels",
                            "overview": "HOME PREMIERE. Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree. When her duties send her to an anomalous wormhole, her powers are entangled with super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and work together to save the universe.",
                            "streamingInfo": {
                                "us": [
                                    {
                                        "service": "netflix",
                                        "streamingType": "subscription"
                                    },
                                    {
                                        "service": "disney",
                                        "streamingType": "subscription"
                                    },
                                    {
                                        "service": "netflix",
                                        "streamingType": "subscription"
                                    },
                                    {
                                        "service": "prime",
                                        "streamingType": "rent"
                                    },
                                    {
                                        "service": "prime",
                                        "streamingType": "buy",
                                    }
                                ]
                            },
                            "year": 2023,
                            "imdbId": "tt10676048",
                            "tmdbId": 609681,
                            "originalTitle": "The Marvels",
                            "genres": [
                                {
                                    "id": 28,
                                    "name": "Action"
                                },
                                {
                                    "id": 12,
                                    "name": "Adventure"
                                },
                                {
                                    "id": 14,
                                    "name": "Fantasy"
                                }
                            ]
                        }
                    ]
            }
        };
        // const setState = jest.fn();
        const user = userEvent.setup();
        let fields;
        let option1;
        let option2;
        const spy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
        // const spy2 = jest.spyOn(App, 'updateMoviesList').mockImplementationOnce(initState => [initState, setState]);

        render(<App />);

        fields = screen.getAllByRole('combobox');
        option1 = screen.getByText('Hulu');
        option2 = screen.getByText('Action');

        //Choose "Hulu" option in "Select all streaming services to search" selector
        await user.click(fields[0]);

        //Type "Hulu" and press Enter
        //await user.type(fields[0], 'Hulu{enter}{escape}');
        await user.click(option1);

        //click to collapse tagbox
        await user.click(fields[0]);

        //Choose "Action" option in "Select movie genre" selector
        await user.click(fields[1]);

        //Press "Enter" to actually choose the "Action" option
        //await user.keyboard('{ArrowDown}{Enter}{Escape}');
        await user.click(option2);
        
        //click to collpase tagbox
        await user.click(fields[1]);

        //Click "Complete" button to submit form
        await user.click(screen.getByText('Complete'))
        .then(() => {
            console.log('Complete Button clicked!');
            //********* dropdown selection div is not rendering in field when selected, form is invalid therefore it won't complete
        });
        expect(spy).toBeCalled();
        // await waitFor(() => expect(App.state.moviesList.length).toBeGreaterThan(0))
    })
    */
});