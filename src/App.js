import './App.css';
import React, {useState} from 'react';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './home';

function App() {

  const [employee, setEmployee]=useState([]);

  const addEmployee=((name, surname, email)=>{
    setEmployee((items)=>[...items, {
      name:name,
      surname:surname,
      email:email
    }])
    console.log(employee)
  })

  return (
    /*<Router>
      <Switch>
        <Route path='/home'>
          <Home list={employee} add={addEmployee} />
        </Route>
      </Switch>
    </Router>*/
    
    <Home list={employee} add={addEmployee} />

  );
}

export default App;
