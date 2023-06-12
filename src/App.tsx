import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.module.scss';
import IssuePage from './features/issues/pages/IssuePage';
import IssuesPage from './features/issues/pages/IssuesPage';
import { store } from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IssuesPage />,
  },
  {
    path: '/issues/:id',
    element: <IssuePage />,
  },
]);

const App = () => {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default App;
