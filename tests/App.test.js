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
});