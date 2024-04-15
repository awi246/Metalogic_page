import Approach from "./components/Approach/Approach";
import Detail from "./components/details/Detail";
import Foundation from "./components/foundation/Foundation";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Header />
        <Detail />
      </div>
     <Approach/>
     <Foundation/>
     <Mission/>
    </div>
  );
}

export default App;
