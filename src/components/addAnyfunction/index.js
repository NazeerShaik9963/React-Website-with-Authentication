
const VerifyingData = (props, setErrorstatus)=>{
const {email, pws} = props

    const errorStatus = {
        emailErrorMgs: "",
        pwsErrorMgs: ""
    };


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const pwsPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>/?`~-]{8,}$/;



        if ((email=== "")&&(pws === "")){
            errorStatus.emailErrorMgs = "*Email is Required";
            errorStatus.pwsErrorMgs= "*Password is Required";

        }else if (email=== ""){
            errorStatus.emailErrorMgs = "*Email is Required";
        }else if(pws === ""){
            errorStatus.pwsErrorMgs= "*Password is Required";
        }else if ((!emailPattern.test(email)) && (!pwsPattern.test(pws))){
            errorStatus.emailErrorMgs = "*Email did'nt Match";
            errorStatus.pwsErrorMgs= "*Password did'nt Match";
        }
        else if (!emailPattern.test(email)){
            errorStatus.emailErrorMgs = "*Email did'nt Match";
        }else if (!pwsPattern.test(pws)){
            errorStatus.pwsErrorMgs= "*Password did'nt Match";
        }

        setErrorstatus(errorStatus);

}

export default VerifyingData;