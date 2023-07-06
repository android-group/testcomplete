import React, { useState } from 'react';
import './App.css';
import Login from './features/login/LoginPage';
import TablePage from './features/table';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {
        isLoggedIn ?
        <TablePage /> :
        <Login setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App;
