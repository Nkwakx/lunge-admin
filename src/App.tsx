import { RouterProvider } from 'react-router-dom';

// project import
import ThemeCustomization from './themes';

import ScrollTop from './components/ScrollTop';
import { useRouting } from './routes/Routing';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
const router = useRouting()

  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );     
}