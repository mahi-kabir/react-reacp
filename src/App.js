import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const heroes = ['ironman', 'spiderman','batman'];

  const villans = ['thanos', 'rhino', 'joker'];

  const contests = [
    {hero: 'ironman', villan: 'thanos', winner: 'ironman'},
    {hero: 'spiderman', villan: 'rhino', winner: 'spiderman'},
    {hero: 'batman', villan: 'joker', winner: 'batman'},
    {hero: 'captain america', villan: 'baki vai',winner:''}
  ];

  

  
  return (
    <div className="App">
      
      <header className="App-header">
      
      {
        heroes.map(hero => <li> {hero} </li>)
      }
    
    {
      villans.map(villan => <li>{villan}</li>)
    }


    {
      contests.map(contest => <li>{contest.hero}</li>)
    }

    {
      contests.map(contest => <Fights hr = {contest.hero} vl = {contest.villan}></Fights>)
    }


      </header>
    </div>
  );
}


function Fights(props){

  return(
    <div>
    <h2>I am {props.hr} will play </h2>
    <h4>vs {props.vl}</h4>
    

  </div>
      
  )
}



export default App;
