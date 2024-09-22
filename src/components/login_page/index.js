import React, { useState , useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {TailSpin} from 'react-loader-spinner';
import { AuthContext } from '../ReactContext';
import VerifyingData from '../addAnyfunction';
import './index.css';

const Login_page = () => {
    document.title = "Nazeer";
    const [values, setValues] = useState({
        email: '',
        pws: ''
    });
    const [error, setError] = useState({
        emailErrorMgs: '',
        pwsErrorMgs: ''
    });
    const [loading, setLoading] = useState(false);
    const {isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);
 
    const emailOnChangeValues = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const pwsOnChangeValues = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const setErrorStatus = (errorStatus) => {
        setError(errorStatus);
    };

    const submit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
           // eslint-disable-next-line no-unused-vars
           VerifyingData(values, setErrorStatus);
        if (error.emailErrorMgs === '' && error.pwsErrorMgs === '') {
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    email: values.email,
                    password: values.pws
                })
            }
            let response = await fetch('https://backend-website-nazeer1.onrender.com/login_page', options);
            let data = await response.json();
            console.log(data);
            if (data.status === 200) {
                Cookies.set("jwtToken", data.token, { expires: 1 / 2 });
                setIsLoggedIn(true);
                setLoading(false);
            }else{
                alert(data.message);
            }

        }
            
        }catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        
    };


    const createNewAccount = () => {
        navigate('/register_page');
    };

    return (
    <>{isLoggedIn? navigate('/Home') : (
        <div className='d-flex justify-content-center flex-column loginpage_background'>
            <h1 className='head'>Nazeer Login</h1>
            {loading? 
            (<div className='d-flex justify-content-center'>
                <TailSpin color="#00BFFF" height={80} width={80}/>
            </div>):
            (<form action='submit' className='formClass'>
                <div>
                    <label htmlFor="Email" className='emailLabel'>Email:</label><br />
                    <input className="input" type="email" id="Email" name="email" placeholder="Enter Email" onChange={emailOnChangeValues} />
                    <p>{error.emailErrorMgs}</p>
                </div>
                <div>
                    <label htmlFor="pws" className='pwsLabel'>Password:</label><br />
                    <input className="input" type="password" id="pws" name="pws" placeholder="Enter Password" onChange={pwsOnChangeValues} />
                    <p>{error.pwsErrorMgs}</p>
                </div>
                <input type='submit' id='submitButton' className='btn btn-light submitButton' name='submit' value="Login" onClick={submit} />
                <input type='button' id='buttonCreateAccount' name='createAccount' className='btn btn-light buttonCreateAccount' value="Create Account" onClick={createNewAccount} />
            </form>
        )}
        </div>
        )}</>
        );
}
export default Login_page;
