// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import './components/Header'
import Header from './components/Header';
import Footer from './components/Footer';
import Rutas from './Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Rutas/>
      <Footer/>
    </div>
  );
}

export default App;
