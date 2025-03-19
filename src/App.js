
import './App.css';
import Alerta from './components/Alerta';
import Botones from './components/Botones';
import Card from './components/Card';
import Componente from './components/Componente';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grupo from './components/Grupo';
import Paginas from './components/Paginas';
import Carosel from './components/Carosel';
import Tostadas from './components/Tostadas';
import BotonTostadas from './components/BotonTostadas';
import Linkeados from './components/Linkeados';


function App() {
  return (
    <div className="App">
      <Alerta/>
      <div>
      <Componente/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Botones/>
      </div>
      <div>
      <Grupo/>
      </div>
      <div>
      <Paginas/>
      </div>
      <div>
      <Carosel/>
      </div>
      <div>
      <Tostadas/>
      </div>
      <div>
      <BotonTostadas/>
      </div>
      <div>
      <Linkeados/>
      </div>
    </div>
    
  );
}

export default App;
