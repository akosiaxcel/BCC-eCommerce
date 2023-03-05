import './App.css';
import NavigationBar from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
        </header>
      </div>
    </Router>
  );
}

export default App;
