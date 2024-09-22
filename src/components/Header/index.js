import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';


const Header = () =>{
    const Logout = ()=>{
        Cookies.remove('jwtToken');
        window.location.reload();
    }
    return (
           <nav className="navbar navbar-expand-lg navbar-light bg-dark nav-d-flex">
            <div className="navLogo-container">
                <Link className="navbar-brand" to="/">
                    <img src="https://dynamic.brandcrowd.com/asset/logo/024558e4-3fd4-42cf-9097-6d6d3ebce960/logo-search-grid-1x?logoTemplateVersion=3&v=638285506827600000g" className='navLogo' alt="navlogo" />
                </Link>
            </div>
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list-items">
                    <Link className="nav-link active " aria-current="page" to="/" >
                       <li className="nav-item homeItem">Home</li>
                    </Link>
                    
                    <Link className="nav-link" to="/About">
                        <li className="nav-item homeItem" > 
                            About
                        </li>
                    </Link>
                    <Link className="nav-link" to="/Contact">
                        <li className="nav-item homeItem">
                        Contact
                        </li>
                    </Link>
                    
                </ul>
            </div>
            <button
                    type="button"
                    className="logout-desktop-btn" onClick={Logout}>
                    Logout
                </button>
           </nav>

    );
}

export default (Header);