import React from 'react';
import AppProvider from './AppContext';

import Button from './Button';
import UserInfo from './UserInfo';

import './App.css';



const App = () => {

  return (
    <div className="App">

      <AppProvider>
        <UserInfo />
        <Button />
      </AppProvider>

    </div>
  );


}

export default App;


