import React from 'react'
import axios from 'axios'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import App from '../src/components/App.jsx'
import RouletteWheel from '../src/components/RouletteWheel.jsx'
import { afterEach } from 'node:test'
import userEvent from '@testing-library/user-event'

afterEach(cleanup);

describe('RouletteWheel Tests', () => {
    test('RouletteWheel should render if App state contains moviesList with a length greater than 0', async () => {
        const mockAxiosMoviesList = {
            data: [
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
        };
        const mockAxiosMoviePoster = {
            data: {
                "title": "The Marvels",
                "url": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
                "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe."
            }
        }
        const user = userEvent.setup();
        let fields;
        let option1;
        let option2;
        const spy = jest.spyOn(axios, 'get')
        .mockResolvedValueOnce(mockAxiosMoviesList)
        .mockResolvedValueOnce(mockAxiosMoviePoster);

        render(<App />);

        fields = screen.getAllByRole('combobox');
        option1 = screen.getByText('Disney+');
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

        expect(spy).toBeCalled();
        expect(screen.getByTestId('WheelComponent')).toBeTruthy();
    });
});