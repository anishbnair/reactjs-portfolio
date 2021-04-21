//import logo from './logo.svg';
//import './App.css';

import './App.scss';
import Navbar from './Components/NavBar';
//import './Styles.scss';

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
