import {Routes , Route, NavLink} from 'react-router-dom';
import Home from './components/home';
import Users from './components/users';
import Contactus from './components/contactus';
import {NavNavLink} from 'react-router-dom'



function App() {
  return (
    <div >

      <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-dark "  to=" ">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark"  to="users">Users</NavLink>
        </li>
        <li className= "nav-item">
          <NavLink className= "nav-link text-dark"  to="contactus">Contactus</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>   




                                            
      <Routes>

      <Route path="" element={ <Home />} />
      <Route path="users" element={ <Users />} />
      <Route path="contactus" element={ <Contactus />} />

      </Routes>                                                                                                                                                                 
    </div>
  );
}

export default App;
