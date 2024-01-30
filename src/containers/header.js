import React from "react";
import * as ROUTES from '../constants/routes';
import { Header } from "../components";
import logo from "../logo/vidflix.jpg";

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to="/" alt="Vidflix" src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>
                SignIn/SignOut
                </Header.ButtonLink>               
            </Header.Frame>
            {children}
        </Header>
    );
}