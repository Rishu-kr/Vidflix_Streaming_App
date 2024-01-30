import React,{useState,useContext} from 'react'
import Form from '../components/form'
import { HeaderContainer } from '../containers/header'
import { useNavigate  } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footers';
import * as ROUTES from '../constants/routes';
import {AiFillGoogleCircle} from 'react-icons/ai';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignUp(){

  const history=useNavigate();
 const {firebase} = useContext(FirebaseContext);
 const [firstName,setFirstName]=useState('');
 const [emailAddress,setEmailAddress]=useState('');
 const [password,setPassword]=useState('');
 const [error,setError]=useState('');

  const isInValid = firstName==='' || password==='' || emailAddress==='';

  const handleSignup=(event)=>{
    event.preventDefault();
    return firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) =>{
      result.user.sendEmailVerification()
      .then(()=>{
         firebase.auth().signOut();
      history(ROUTES.SIGN_IN);
      alert("Email sent");
      });
     
      // result.user
      //   .updateProfile({
      //     displayName: firstName,
      //     photoURL: 1,
      //   })
      //   .then(() => {
      //     history(ROUTES.BROWSE);
      //   })
      }
    )
    .catch((error) => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    });
    } ;

//using google authentication firebase

const provider = new GoogleAuthProvider();
const auth=getAuth();
auth.languageCode="it";
const signInwithGoogle=()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    const credentials=GoogleAuthProvider.credentialFromResult(result);
    console.log("crendentials",credentials);
    const user=result.user;
    console.log("username",user.displayName);
    console.log("emailAddress",user.emailAddress);
  }).then(() => {
        history(ROUTES.BROWSE);
      })
  .catch((error)=>{
    console.log(error.code);
    console.log(error.message);
    console.log(error.customData.email);
    console.log(GoogleAuthProvider.credentialFromError(error));
  });
}


  return (
   <>
     <HeaderContainer>
       <Form>
         <Form.Title>Sign Up</Form.Title>
         {error && <Form.Error>{error}</Form.Error>}
       <Form.Base onSubmit={handleSignup} method="POST">
        <Form.Input placeholder="First Name" 
        type="text" 
        name="firstName" 
        value={firstName} 
        onChange={(target)=>setFirstName(target.value)}/>
        <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
        
       </Form.Base>

       {/* google authentication button */}
       
       <div className='login-buttons' style={{textAlign:"center"}} >
       <Form.Text > Or </Form.Text>
        <AiFillGoogleCircle style={{color: "red", fontSize:"50px"}} onClick={signInwithGoogle}  />
          </div>


       <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
       </Form>
     </HeaderContainer>
     <FooterContainer/>

   </>
  );
}
