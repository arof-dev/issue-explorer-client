import { Navbar, NextUIProvider } from '@nextui-org/react';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import IssuePage from './features/issues/pages/IssuePage';
import IssuesPage from './features/issues/pages/IssuesPage';
import LogsPage from './features/logs/pages/LogsPage';
import s from './App.module.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IssuesPage />,
  },
  {
    path: '/issues/:username/:repo/:number',
    element: <IssuePage />,
  },
  {
    path: '/logs',
    element: <LogsPage />,
  },
]);

const App = () => {
  return (
    <StoreProvider store={store}>
      <NextUIProvider>
        <div className={s.container}>
          <Navbar>
            <Navbar.Content>
              <Navbar.Link href={'/'}>Issues</Navbar.Link>
              <Navbar.Link href={'/logs'}>Logs</Navbar.Link>
            </Navbar.Content>
          </Navbar>
          <RouterProvider router={router} />
        </div>
      </NextUIProvider>
    </StoreProvider>
  );
};

export default App;
