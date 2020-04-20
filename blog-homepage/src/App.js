import React from 'react';
import './App.css';
import MissedArticleList from './MissedArticleList';
import YourArticles from './YourArticles';

function App() {
  return (
    <div className="App">
      <YourArticles />
      <MissedArticleList />
    </div>
  );
}

export default App;
