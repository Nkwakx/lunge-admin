import { ComponentType, ReactElement, Suspense } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

type LoadableProps = object; 

const Loadable = (Component: ComponentType<LoadableProps>) : ((props: LoadableProps) => ReactElement) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
