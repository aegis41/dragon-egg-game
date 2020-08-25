import React from 'react';
import './Styles/style.css';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GameContainer from './components/layout/GameContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

let gameData = JSON.parse(localStorage.getItem('gameData'));

function App() {
  return (
    <div className="App">
      <Header />
      <GameContainer gameData={gameData} />
      <Footer />
    </div>
  );
}

export default App;
