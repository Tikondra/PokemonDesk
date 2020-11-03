import React from 'react';
import cn from 'classnames';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div className={cn(classes.wrapper)}>
      <Header />
      <div className={cn(classes.content)}>
        <h1>
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
