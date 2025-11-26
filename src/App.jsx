import "./App.css";
import navList from "./components/navigationList";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Aboutme from "./components/Aboutme";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Myprofile from "./components/Myprofile";
import FirstView from "./components/FirstView";
import MySkill from "./components/MySkill";
import MyVision from "./components/MyVision";

function App() {
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

      {/* <h1>簡単なwebサイト制作</h1> */}
    </>
  );
}

export default App;
