import React from 'react'
import { Model, Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.min.css'

const questions = {
    "elements": [
        {
            "name": "Streaming services",
            "title": "Select all streaming services to search",
            "type": "tagbox",
            "choices": [
                { 
                    "text": "Netflix",
                    "value": "Netflix"
                },
                {
                    "text": "Hulu",
                    "value": "Hulu"
                },
                {
                    "text": "Prime Video",
                    "value": "Prime Video"
                },
                {
                    "text": "Disney+",
                    "value": "Disney+"
                }
            ],
            "isRequired": true,
            "hideSelectedItems": true
        },
        {
            "name": "Genre(s)",
            "title": "Select movie genre",
            "type": "dropdown",
            "choices": [ "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Science Fiction" ],
            "isRequired": true
        }
    ],
    "showQuestionNumbers": false
}

function Questionaire () {
    const questionaire = new Model(questions)
    return (<Survey model={questionaire} />)
}

export default Questionaire