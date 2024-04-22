import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Galeria from './components/Galeria';
import Sessao from './components/Sessao';

function App() {
  return (
    <div className="App">
   <Header/>
   <Sessao/>
   <Galeria/>
   <Galeria/>
   <Footer/>
    </div>
  );
}
export default App;
