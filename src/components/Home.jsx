
import GlobalScrollObserver from "./GlobalScrollObserver";
import Loading from "./Loading";
import Header from "./Header";
import FirstView from "./FirstView";
import Myprofile from "./Myprofile";
import MySkill from "./MySkill";
import Works from "./Works";
import MyVision from "./MyVision";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Aboutme from "./Aboutme";

export default function Home() {

  const[isLoading,setIsLoading]=useState(true);
useEffect(()=>{
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  
  return()=>clearTimeout(timer);
},[])

  return (
    <>
     <Loading isVisible={isLoading}/>
      <GlobalScrollObserver />

      <Header />
      
      <FirstView />

     
      
      <div className="watch">
        <Myprofile />
      </div>
      <div className="watch">
        <Aboutme/>
      </div>

      <div className="watch">
        <MySkill />
      </div>

      <div className="watch">
        <Works /> 
      </div>

      <div className="watch">
        <MyVision />
      </div>

      <Footer />
    </>
  );
}