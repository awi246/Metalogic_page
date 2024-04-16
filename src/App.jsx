import Approach from "./components/Approach/Approach";
import Detail from "./components/details/Detail";
import Foundation from "./components/foundation/Foundation";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import Count from "./components/count";
import Footer from "./components/footer/Footer";
import Nav from "./nav/Nav";
function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Header />
        <Detail />
        <Nav/>
        <Count />
      </div>
     <Approach/>
     <Foundation/>
     <Mission/>
    <Footer/>
    </div>
  );
}

export default App;
