
import './App.css';
import GetStarted from './GetStartedPage/GetStarted';
import frist from './assest/frist.png'
import third from './assest/third.png'
import Hiking from './HikingGears/Hiking';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
     <GetStarted pageNumber='01' heading='GEt Started' title='What level of  hiker ' titleEnd='are you?'  imgs={frist}/>
     <Hiking/>
     <GetStarted pageNumber='03' heading='where you go is the key' title='Understand Your ' titleEnd='Map & Timing' imgs={third}/>
     <Footer/>
    </div>
  );
}

export default App;
