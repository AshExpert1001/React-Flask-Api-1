import React, { useState, useEffect } from 'react';
import './App.css';
import {Player} from './Component/Player';
import {Add_player} from './Component/Add_player';
import { Container } from 'semantic-ui-react';

function App() {
  const [players, setPlayer] = useState([]);

  useEffect(()=>{
    fetch('/players').then(res=>res.json()
    .then(data=>{
      // console.log(data);
      setPlayer(data.players);
    }) 
  )  
  },[]);

  return (
    <Container style={{marginTop:40}}>
       <Add_player onNewPlayer={player=>setPlayer(currentPlayer=>
        [player, ...currentPlayer] 
       )}/>
       <Player players={players} />
    </Container>
      
  );
}

export default App;
