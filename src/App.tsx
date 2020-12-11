import React from 'react';
import GameList from './view/GameList';
import Search from "./view/Search"
import StoreProvider from "./Context"
import './App.css';
import Paginator from './Components/Paginator';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <GameList />
          <Paginator />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;