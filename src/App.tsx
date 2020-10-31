import React from 'react';
import cn from 'classnames';

import './custom.css'
import classes from './App.modules.scss';

const App: React.FC = () => {
  return (
    <div className={cn(classes.header, 'color')}>
      this is App Component
    </div>
  );
};

export default App;
