import { useContext } from 'react';
import Header from '../Header';
import {AuthContext} from '../ReactContext'
import './index.css'
import { Navigate } from 'react-router-dom';
const Home = ()=>{
    const {isLoggedIn} = useContext(AuthContext);
    if(!isLoggedIn){
        return <Navigate to='/login_page'/>
    }
    return(
        <><Header />
        <div className="home">
            <div className="homebox">
                <h1 className='home-head'>Home</h1>
            </div>
        </div>
        </>
    );
}

export default Home;