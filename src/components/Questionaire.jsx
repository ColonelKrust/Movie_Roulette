import React from 'react'
import { Model, Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'
import axios from 'axios'

const questions = {
    'elements': [
        {
            'name': 'Streaming services',
            'title': 'Select all streaming services to search',
            'type': 'tagbox',
            'choices': [
                { 
                    'text': 'Netflix',
                    'value': 'netflix'
                },
                {
                    'text': 'Hulu',
                    'value': 'hulu.subscription'
                },
                {
                    'text': 'Prime Video',
                    'value': 'prime.subscription'
                },
                {
                    'text': 'Disney+',
                    'value': 'disney'
                },
                {
                    'text': 'HBO Max',
                    'value': 'hbo'
                },
                {
                    'text': 'Peacock',
                    'value': 'peacock.subscription'
                }
            ],
            'isRequired': true,
            'hideSelectedItems': true
        },
        {
            'name': 'Genre(s)',
            'title': 'Select movie genre',
            'type': 'dropdown',
            'choices': [ 'Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Documentary', 'Fantasy', 'Family', 'Horror', 'History', 'Mystery', 'Music', 'Romance', 'Science Fiction', 'Thriller', 'War' ],
            'isRequired': true
        }
    ],
    'showQuestionNumbers': false
}

function Questionaire (props) {
    const questionaire = new Model(questions)

    questionaire.onComplete.add((sender) => {
        const services = sender.data['Streaming services'].join(',')
        const genres = sender.data['Genre(s)']

        axios.get(`/getMovies?services=${services}&genres=${genres}`)
        .then((response) => {
            console.log('Success!');
            //function from App through props to update movies list
            props.updateMoviesList(response.data)
        })
        .catch((err) => {
            throw new Error(err)
        })
    })

    return (<Survey model={questionaire} />)
}

export default Questionaire