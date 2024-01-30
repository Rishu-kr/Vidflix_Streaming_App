import React,{useEffect,useState,useContext} from 'react'
import logo from "../../logo/vidflix.jpg";
import {Header} from '../../components';
import { FirebaseContext } from "../../context/firebase";
import * as ROUTES from '../../constants/routes';
import "./nav.css";
import { Router, useNavigate } from 'react-router-dom';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import { Home } from '../../pages';
import { FooterContainer } from '../../containers/footers';
import LogOut from "../logout/Logout"
import check from "../../lib/fixtures/check.json";
import Fuse from 'fuse.js'
import {AiOutlineMenu} from 'react-icons/ai';




function NavBar() {
    const [show, handleShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
console.log(searchTerm)
    const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

const navigate=useNavigate();

    useEffect(() => {
      window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
            handleShow(true);
          }
          else{
              handleShow(false);
          }
      });
    }, []);




    //logout function
    function logout(){
      firebase.auth().signOut().then(
        function(){
          navigate(ROUTES.HOME);
          console.log("logged out");
        }
      )
    }

      
    
    return (<>
        <div className={`nav ${show && "nav_black"}`}>               
            <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Vidflix"/>
            </Header.Group>
            <Header.Dropdown>
                <Header.Picture src={user.photoURL}/>
            </Header.Dropdown>  
            <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
               <AiOutlineMenu className={`menu ${show && "menuWhite"}`} />
              <Header.Dropdown className="menuDropDown">
              <Header.TextLink>{user.displayName}</Header.TextLink>
                <Header.Group>
                  <button className='menuButton'>Subscribe</button>   
                </Header.Group>
                <Header.Group>
                <button onClick={logout} class="menuButton">Sign Out</button>   
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>         
        </div>
               
        </>
    );
}

export default NavBar;
