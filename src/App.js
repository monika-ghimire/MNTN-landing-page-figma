import "./App.css";
import GetStarted from "./GetStartedPage/GetStarted";
import frist from "./assest/frist.png";
import third from "./assest/third.png";
import Hiking from "./HikingGears/Hiking";
import Footer from "./Footer/Footer";
import BackGround from "./BackGroud";


function App() {
  return (
    <div className="App">
      <div className="container">
        
         <BackGround/> 
        <div className="content-conteiner-holder">
          <div className="box-shadow">
            <GetStarted
              pageNumber="01"
              heading="GEt Started"
              title="What level of  hiker "
              titleEnd="are you?"
              imgs={frist}
            />
          </div>

          <Hiking />
          <GetStarted
            pageNumber="03"
            heading="where you go is the key"
            title="Understand Your "
            titleEnd="Map & Timing"
            imgs={third}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
