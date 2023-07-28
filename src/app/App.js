import{Routes,Route,} from 'react-router-dom'
import SobreNosotros from '../components/sobrenosotros/SobreNosotros';
import Menu from '../components/menu/Menu';


import SignUp from '../components/signup/SignUp';
import SignIn from '../components/signin/SignIn';
import Home from '../pages/Home';
import './App.css';
import Navegador from '../routes/Navegador';
import Reservaciones from './../components/reservaciones/Reservaciones';

function App() {
  return (
    <div className="App">
       <Navegador/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Nosotros' element={<SobreNosotros/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Reservasiones' element={<Reservaciones/>}/>
        <Route path='/Sinup' element={<SignUp/>}/>
        <Route path='/Signin' element={<SignIn/>}/>


      </Routes>
    </div>
  );
}

export default App;
