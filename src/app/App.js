import{Routes,Route, NavLink} from 'react-router-dom'
import SobreNosotros from '../components/sobrenosotros/SobreNosotros';
import Menu from '../components/menu/Menu';
import Reservaciones from '../components/reservaciones/Reservaciones';
import SignUp from '../components/signup/SignUp';
import SignIn from '../components/signin/SignIn';
import Home from '../pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
       
       <nav>
        <div>
          <div>
            <ul>
              <li><NavLink to="/Nosotros">Sobre nosotros</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/Menu">Menu</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/Nosotros">Sobre nosotros</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/Reservaciones">Reservaciones</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/Signup">Sign Up</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/Signin">Sign In</NavLink></li>
            </ul>
            
            
          </div>
        </div>
       </nav>


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
