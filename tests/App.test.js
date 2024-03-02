import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../src/components/App.jsx'

describe('Main App component', () => {
    test('Should render app div', () => {
        render(<App />, );
        const appDiv = document.getElementById('appComponent');
        expect(appDiv).toBeTruthy();
    });
});