import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Register from '../../../pages/authentication/Register';

const theme = createTheme();

test('renders correct title when is register', () => {
    render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </ThemeProvider>
    );
    const titleElement = screen.getByText(/Sign up/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders login link', () => {
    render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/Already have an account\?/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/login');
});
