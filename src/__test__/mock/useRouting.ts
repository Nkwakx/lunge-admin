jest.mock('./routes/Routing', () => ({
    useRouting: jest.fn().mockReturnValue({
        // Mock the router object returned by createBrowserRouter
        // Adjust based on your actual implementation
    }),
}));

jest.mock('../app/store', () => ({
    useAppSelector: jest.fn(),
}));
