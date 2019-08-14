import React, { useState } from 'react';
import './App.css';
import FormikForm from "./Form";
import ShowUsers from "./Users";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userObj) => {
    setUsers( [...users, userObj ]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FormikForm addUser={addUser} pop={"Turkey"}/>
        </div>
        <div>
          <ShowUsers users={users}/>  
        </div>     
      </header>
    </div>
  );
}

export default App;
