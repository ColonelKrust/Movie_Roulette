import React from 'react'
import { render, screen, cleanup, waitFor } from '@testing-library/react'
import App from '../src/components/App.jsx'
import Sidebar from '../src/components/Sidebar.jsx'
import { afterEach } from 'node:test'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

afterEach(cleanup);

describe('Sidebar component tests', () => {
    test('Should render Sidebar Component', () => {
        render(<Sidebar onHide={hideSpy} />);
        
        const hideSpy = jest.spyOn(App.prototype, 'hideSidebar');
        const sidebarComponent = screen.getByTestId('sidebarComponent');
    
        expect(sidebarComponent).toBeTruthy();
    })
    
    test('Should move sidebar onto screen when list icon button is clicked', async () => {
        render(<App />);
    
        const user = userEvent.setup();
        const sidebarButton = screen.getByTestId('sidebarButton');
        const sidebarComponent = screen.getByTestId('sidebarComponent');
        const showSpy = jest.spyOn(App.prototype, 'showSidebar');
    
        await user.click(sidebarButton)
        .then(() => {
            expect(sidebarComponent.className).toBe('show');
        });
    });
    
    test('Should move sidebar off screen when close button is clicked', async () => {
        render(<App />);
        
        const user = userEvent.setup();
        const sidebarButton = screen.getByTestId('sidebarButton');
        const closeSidebarButton = screen.getByTestId('closeSidebarButton');
        const sidebarComponent = screen.getByTestId('sidebarComponent');
        expect(sidebarComponent).toBeVisible();
        await user.click(sidebarButton)
        .then(async () => {
            expect(sidebarComponent.className).toBe('show');
            
            await user.click(closeSidebarButton)
            .then(() => {
                expect(sidebarComponent.className).toBe('');
            });
        });
    });
});