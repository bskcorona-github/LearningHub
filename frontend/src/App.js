import React from 'react';
import './App.css';
import ReadingList from './components/ReadingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>読んだ本とか勉強した事とかメモするとこ</h1>
      </header>
      <main>
        <ReadingList />
      </main>
    </div>
  );
}

export default App;
