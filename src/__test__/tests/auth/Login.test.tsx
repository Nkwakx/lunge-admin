import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Login from '../../../pages/authentication/Login';

test('renders correct title when is login', () => {
    const theme = createTheme(); 
    render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </ThemeProvider>
    );
    const titleElements = screen.queryAllByText(/Login/i);
    const titleElement = titleElements[0];
    expect(titleElement).toBeInTheDocument();
});

test('renders register link', () => {
    const theme = createTheme(); 
    render(
        <ThemeProvider theme={theme}> 
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/Don\'t have an account\?/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/register');
});
