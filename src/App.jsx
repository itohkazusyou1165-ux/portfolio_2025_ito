import "./App.css";
import navList from "./components/navigationList";
import Header from "./components/header";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import ListItem from "./components/ListItem";
import MainWrap from "./components/MainWrap";
import Mainsection from "./components/Mainsection";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation src={navList} />
      </Header>

      <MainWrap />
      <Mainsection />
      <Card />
      <Footer />

      {/* <h1>簡単なwebサイト制作</h1> */}
    </>
  );
}

export default App;
