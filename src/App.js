import React from 'react';
import Team from './Team'
import dataProvider from "./api"


function App() {

  return (
    <div className="App">
       <Team dataProvider= {dataProvider}/>
    </div>
  );
}

export default App;
