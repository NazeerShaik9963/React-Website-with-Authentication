import {useState , useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import brainimg from '../images/brainimg.jpg'
import './index.css'
 
const Register_page = ()=>{
    const fullNameref = useRef();
    const emailref = useRef();
    const pwsref = useRef();
    const DOBref = useRef();
    const cellref = useRef();
    const navigate = useNavigate();

    const [fullName, setfullName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [gender, setgender] = useState();
    const [age, setage] = useState(18);
    const [DOB, setDOB] = useState();
    const [phonenum, setphonenum] = useState();
    const [Message, setMessage] = useState('');

    const loginPage =()=>{
        navigate('/login_page')
    }
    const fullnamehandel = (event)=>{
        setfullName(prev => event.target.value)
    }
    const emailhandel = (event)=>{
        setemail(prev => event.target.value)
    }
    const passwordhandel = (event)=>{
        setpassword(prev => event.target.value)
    }
    const agehandel = (event)=>{
        setage(prev => event.target.value)
    }
    const genderhandel = (event)=>{
        setgender(prev => event.target.value)
    }
    const DOBhandel = (event)=>{
        setDOB(prev => event.target.value)
    }
    const phonenumhandel = (event)=>{
        setphonenum(prev => event.target.value)
    }

    const setErrorstatus = (props)=>{
         setMessage(props)
    }

    function clearinputFelids(){
        fullNameref.current.value = "";
        emailref.current.value = ""
        pwsref.current.value = ""
        DOBref.current.value = ""
        cellref.current.value = ""
        setage(prev => 18);
        setgender(prev => "")

    }
    const submit = async (event)=>{
        event.preventDefault()
        let data = {
            "email": email,
            "name": fullName,
            "age": age,
            "DOB": DOB,
            "password": password,
            "phone_number": phonenum,
            "gender": gender
        }
        try {
            let Options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('https://backend-website-nazeer1.onrender.com/register_page', Options);
            const result = await response.json();
            // console.log(result);
            if (result.status === 200) {
                clearinputFelids()
            }else{
                setErrorstatus(result.message)
            }
        } catch (error) {
            setErrorstatus(error)
        }

    }
    

    return(     
        <>
        <div className="bg-total">
            <div className="image-form">
                <img src={brainimg} alt="side-image" className="image" />
            </div>
            <div className="Signup-form">
                <h1 className="text-center">Signup</h1>
                <form onSubmit={submit}>
                    <div className="inputsLabels">
                        <h4 className="h4">Full Name:</h4>
                        <input  className="inputsignup" ref={fullNameref} type="text" id="fullName" placeholder="Enter Full Name" onChange={fullnamehandel} required/>
                    </div> 
                    <div className="inputsLabels">
                        <h4 className="h4">Age:</h4>
                        <input className="inputsignup" type="number"  id="Age" min="18" placeholder="Enter Age" value={age} onChange={agehandel} required/>
                    </div>
                    <div className="inputsLabels">
                        <h4 className="h4">DOB:</h4>
                        <input className="inputsignup" type="date"  ref={DOBref} id="DOB" max="2006-12-31"  placeholder="Enter Your Age" onChange={DOBhandel} required/>
                    </div> 
                    <div className="inputsLabels">
                        <h4 className="h4">Gender:</h4>
                        <input type="radio"  className="inputsignup "  id="gender-Female" name="gender" value="Female" onChange={genderhandel} checked={gender === "Female"} required/>
                        <label htmlFor="gender-Female" className="gender-Female">Female</label>
                        <input className="inputsignup " type="radio"  id="gender-Male" name = "gender" value="Male" onChange={genderhandel} checked={gender==="Male"} required/>
                        <label htmlFor="gender-Male" className="gender-Male">Male</label>
                    </div> 
                    <div className="inputsLabels">
                        <h4 className="h4">Email:</h4>
                        <input className="inputsignup" type="email" ref={emailref} placeholder="Enter a Email" onChange={emailhandel} required/> 
                    </div>
                    <div className="inputsLabels">
                        <h4 className="h4">Password:</h4>
                        <input className="inputsignup" type="password" ref={pwsref} placeholder="Enter Password" onChange={passwordhandel} required/>
                    </div>
                    <div className="inputsLabels">
                        <h4 className="h4">Phone Number:</h4>
                        <input className="inputsignup" type="tel" id="phone" ref={cellref} name="phone" pattern="[0-9]{10}" placeholder="Enter Phone Number" onChange={phonenumhandel} required/>
                    </div>
                    <div className="inputsLabels">
                        <button type="submit"className="submitSignup submitSignup2">Create</button>
                    </div>
                    <div className="inputsLabels">
                        <a href=' ' onClick={loginPage}>Already have an account? </a><br/>
                    </div>
                    <p className='Message' >{Message}</p>
                </form>
            </div> 
        </div>
        </>
    )
}

export default Register_page;