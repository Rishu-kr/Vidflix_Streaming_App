import React,{useState , useContext} from 'react';
import {FirebaseContext} from '../context/firebase.js';
import Form from '../components/form';
import { FooterContainer } from '../containers/footers';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';
import {useNavigate} from 'react-router-dom';


export default function ForgotPassword(){

    const[forgetPassword,setforgetPassword]=useState('');
    const history=useNavigate();
    const {firebase}=useContext(FirebaseContext);
    console.log(forgetPassword);
    // var auth=firebase.auth();
    
    const isInValid = forgetPassword === '';
    const handlepassword=(event)=>{
       event.preventDefault();
       firebase
       .auth()
       .sendPasswordResetEmail(forgetPassword)
       .then((userCredential)=>{
           firebase.auth().signOut();
           alert("Password reset email sent");
           history(ROUTES.SIGN_IN);
       }).catch((err)=>{
        console.log(forgetPassword);
        console.log(err.code);
        console.log(err.message);
       });
    }


return (
<>
<HeaderContainer>
    <Form>
        <Form.Title>Forgot Password</Form.Title>
        <Form.Base onSubmit={handlepassword}>
        <Form.Input
        placeholder="Email Address"
        type="email"
        name="email"
        value={forgetPassword}
        onChange={(e)=>setforgetPassword(e.target.value)}/>
        <Form.Submit type="submit" disabled={isInValid}>
        Send Password Reset Link
        </Form.Submit>
        </Form.Base>
    </Form>
</HeaderContainer>
</>
);
}
