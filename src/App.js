import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Swal from 'sweetalert2';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className='main-container'>
     <Nav></Nav>
     <Home></Home>
     <Blog></Blog>
    </div>
  );
}

export default App;
