import Navi from "./components/Navi";
import Footer from "./components/Footer";
import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [activePage, pageSwitchHandler] = useState("about");
  function showPage() {
    switch (activePage) {
      case "about":
        return <About/>;
      case "work":
        return <Work/>;
      case "resume":
        return <Resume/>;
      case "contact":
        return <Contact/>;
      default:
        return <About/>;
    }
  }
  return (
      <div>
        <Navi activePage={activePage} pageSwitchHandler={pageSwitchHandler}/>
        <main>
          {showPage(activePage)}
        </main>
        <Footer />
      </div>
  );
}

export default App;
