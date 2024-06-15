import { createBrowserRouter } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import { useAppSelector } from '../app/store';

// ==============================|| ROUTING RENDER ||============================== //
export const useRouting = () => {
    const { token } = useAppSelector((state) => state.auth);

    const router = token ? createBrowserRouter([LoginRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME })
        : createBrowserRouter([MainRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

    return router;
};
