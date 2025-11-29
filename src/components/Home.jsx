

import Header from "./Header";

import Aboutme from "./Aboutme";
import Works from "./Works";
import Footer from "./Footer";
import Myprofile from "./Myprofile";
import FirstView from "./FirstView";
import MySkill from "./MySkill";
import MyVision from "./MyVision";
import FadeIn from "./Fadein";



export default function Home() {
  return (
    <>
      <Header/>
      <FadeIn>
      <FirstView />
      </FadeIn>
      <FadeIn>
      <Myprofile />
      </FadeIn>
      <FadeIn>
      <Aboutme />
      </FadeIn>
      <FadeIn>
      <MySkill />
      </FadeIn>
      <FadeIn>
      <Works />
      </FadeIn>
      <FadeIn>
      <MyVision />
      </FadeIn>
      <Footer />
      
    </>
  )
}