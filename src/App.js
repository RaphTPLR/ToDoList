import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Link to="/">Accueil</Link>

      <Routes>
          <Route path='/' element = { <Home/> }/>
        </Routes>
    </div>
  );
}

export default App;
