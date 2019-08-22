import React, { useState, useEffect } from "react";
import Employee from './Employee'


const Team = ({dataProvider})  => {
// const Team = (props)  => {
  // const dataProvider = props.dataProvider;
  // const { dataProvider } = props;
  let [team, setTeam] = useState([])
  useEffect(()=> dataProvider(setTeam), [])
  return (
     <ul>
       {
         team.map((person) => <li data-testid={person.firstName} key={person.firstName}><Employee data={person} /></li>)
       }
     </ul>
  );
}

export default Team;
