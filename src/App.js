import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login_page from './components/login_page'
import './App.css';

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Notfound from './components/notfount';
import Register_page from './components/Signup'

const App = ()=>{
  
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path='/login_page' Component={Login_page} />
      <Route exact path='/' Component={Home} />
      <Route exact path='/About' Component={About}/>
      <Route exact path='/Contact' Component={Contact}/>
      <Route exact path='/register_page' Component={Register_page} />
      <Route path='*' Component={Notfound} />
    </Routes>
  </BrowserRouter>
  )
 
};

export default App;
