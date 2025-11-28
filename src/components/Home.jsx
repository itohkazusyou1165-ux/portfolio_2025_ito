
import navList from "./navigationList";
import Header from "./Header";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Aboutme from "./Aboutme";
import Works from "./Works";
import Footer from "./Footer";
import Myprofile from "./Myprofile";
import FirstView from "./FirstView";
import MySkill from "./MySkill";
import MyVision from "./MyVision";



export default function Home() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation src={navList} />
      </Header>
      <FirstView />
      <Myprofile />
      <Aboutme />
      <MySkill />
      <Works />
      <MyVision />
      <Footer />
     
    </>
  );
}