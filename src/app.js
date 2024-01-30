import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import {Home,Browse,SignIn,SignUp,ForgotPassword} from './pages';
import * as ROUTES from './constants/routes';
export default function App() {
  const user=null;
  return(
      <BrowserRouter> 
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
        <Route path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
  )
}
 