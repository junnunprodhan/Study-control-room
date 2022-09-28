import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Swal from 'sweetalert2';

function App() {
  return (
    <div className='main-container'>
     <Nav></Nav>
     <Home></Home>
    </div>
  );
}

export default App;
