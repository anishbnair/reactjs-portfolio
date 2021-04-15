//import logo from './logo.svg';
//import './App.css';

import './App.scss';
import Navbar from './Components/NavBar';
//import './Styles.scss';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <div className="sidebar"></div>
        <Navbar />
      <div className="main-content"></div>
    </div>
  );
}

export default App;
