import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ message, children }: React.PropsWithChildren<{ message: string }>) {
  return (
    <div className="App">
      <header style={{
        marginTop: 40,
        fontSize: 40,
        fontWeight: 'bold'
      }}>
        Nice to meet you !
      </header>
      <div>
        <h1>{message}</h1>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default App;
