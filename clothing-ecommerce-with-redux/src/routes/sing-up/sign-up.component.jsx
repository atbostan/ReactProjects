import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from '../../utils/firebase.utils';
import FormInput from '../../components/ui/form-input/form-input.component';
import "./sign-up.style.scss"
import Button from '../../components/ui/button/button.component';
const defaultFormFields ={
    displayName:'',
    email : '',
    password: '',
    confirmPassword : '',
}

const SingUp = () => {

const [formFields, setformFields] = useState(defaultFormFields);
const {displayName,email,password,confirmPassword} = formFields;


const resetFormFields = ()=>{
    setformFields(defaultFormFields);
}

const handleSubmit = async (event)=>{
    event.preventDefault();

    if(password!==confirmPassword) {alert("Password do not match"); return};

    try{
        const {user} = await createAuthUserWithEmailAndPassword(email,password)
        if(user){
            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields();
        }

        
    }catch(error){

        console.log('user creation encoutered an error' , error)
    }

}

const handleChange = (event)=>{
    const {name , value} = event.target; //Takes the input's unique name and values
    setformFields({...formFields, [name]:value})
}
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign Up With Your Email And Password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />

            <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

            <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

            <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

            <Button type='submit'>
                Sign Up
            </Button>
        </form>
    </div>
  )
}

export default SingUp