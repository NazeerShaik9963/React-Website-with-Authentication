import { useContext } from 'react';
import {AuthContext} from '../ReactContext';
import {Navigate} from 'react-router-dom'
import Header from '../Header';
import './index.css'
const About = ()=>{
    const {isLoggedIn} = useContext(AuthContext);

    if(!isLoggedIn){
        return <Navigate to='/login_page'/>
    }
    
    return <>
    <Header />
    <div className="About">
        <div className="box">
            <h1 className='about-head'>About</h1>
        </div>
    </div>
    </>
}

export default About;