import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './components/Header'
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
