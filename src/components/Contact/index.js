import { useContext } from 'react';
import {AuthContext} from '../ReactContext';
import {Navigate} from 'react-router-dom'
import Header from '../Header';
import './index.css'

const Contact = ()=>{
    const {isLoggedIn} = useContext(AuthContext);

    if(!isLoggedIn){
        return <Navigate to='/login_page'/>
    }

    return (
    <>
    <Header />
    <div className="contact">
        <div className="contactbox">
            <h1 className='contact-head'>Contact</h1>
        </div>
    </div>
    </>
    )
}

export default Contact;