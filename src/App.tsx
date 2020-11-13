import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NoFoundPage from './pages/NotFoundPage/NoFoundPage';
import s from './App.module.scss';

const App: React.FC = () => {
  const match = useRoutes(routes);
  return match ? (
    <div className={s.root}>
      <Header />
      {match}
      <Footer />
    </div>
  ) : (
    <NoFoundPage />
  );
};

export default App;
