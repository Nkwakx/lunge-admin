import { createBrowserRouter } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import { useAppSelector } from '../app/store';

// ==============================|| ROUTING RENDER ||============================== //
export const useRouting = () => {
    const { accessToken } = useAppSelector((state) => state.auth);

    const router = accessToken ? createBrowserRouter([MainRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME })
        : createBrowserRouter([LoginRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

    return router;
};
