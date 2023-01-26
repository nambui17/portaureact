import React, {useState} from "react";
import Navi from "./Navi";
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';

function Header() {
  const [activePage, pageSwitchHandler] = useState("about");
  function showPage() {
    switch (activePage) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Navi activePage={activePage} pageSwitchHandler={pageSwitchHandler} />
      <main>{showPage(activePage)}</main>
    </div>
  );
}

export default Header;
