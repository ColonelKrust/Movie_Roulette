import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Questionnaire from '../src/components/Questionnaire.jsx'
import { afterEach } from 'node:test'

afterEach(cleanup)

describe('Quesionnaire tests', () => {
    test('Questionnaire should render successfully', () => {
        render(<Questionnaire />, );
        const questionnaireDiv = document.querySelector('.sd-body');
        expect(questionnaireDiv).toBeTruthy();
    });
});