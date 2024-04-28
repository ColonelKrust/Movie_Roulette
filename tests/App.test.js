import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from '../src/components/App.jsx'
import Sidebar from '../src/components/Sidebar.jsx'
import { afterEach } from 'node:test'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

afterEach(cleanup);

describe('Main App component tests', () => {
    test('Should render app div', () => {
        render(<App />);
        const appDiv = screen.getByTestId('appComponent');
        expect(appDiv).toBeTruthy();
    });
});