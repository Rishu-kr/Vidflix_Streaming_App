import React,{useState,useContext,useEffect} from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import {Loading} from '../components'
import { Header } from "../components";
import "./styles.css";
import Row from "../components/board/Row";
import request from "../request";
import Banner from "../components/board/Banner";
import NavBar from "../components/board/NavBar";
import { FooterContainer } from "./footers";



export function BrowseContainer({slides}){

const [profile,setProfile]=useState({});

const [loading,setLoading]=useState(true);

const {firebase} = useContext(FirebaseContext);

const user=firebase.auth().currentUser || {};

useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1000);
  }, [profile.displayName]);

    return profile.displayName?(
      <>
     {loading ?<Loading src={user.photoURL}/>:<Loading.ReleaseBody/>}
     <NavBar/>
      <Banner/>
      <Row title="VIDFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
      <hr/>
      <FooterContainer/>
      </>

    ):(<SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
