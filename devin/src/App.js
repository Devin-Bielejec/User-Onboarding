import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from "./Form";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <FormikForm />
      </header>
    </div>
  );
}

export default App;
