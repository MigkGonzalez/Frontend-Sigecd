// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './components/Header'
import Header from './components/Header';
import Footer from './components/Footer';
import Entrenadores from './components/Entrenadores';
import ContainerHorUbi from './components/ContainerHorUbi';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContentMain from './components/ContentMain';

function App() {
  return (
    <div className="App">
      <Header/>
      
      
      <ContentMain/>

      <ContainerHorUbi/>

      <Entrenadores/>
      {/* <header className="App-header">
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
      </header> */}
      
      
      <Footer/>
    </div>
  );
}

export default App;
