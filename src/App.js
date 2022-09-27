import NavBar from "./Navigation/navbar";
import FirstSec from "./Sections/1stSection/firstSec";
import StickyNavbar from "./Navigation/stickyNavbar";
import SecThree from "./Sections/3rdSection/sectionthree";
import { Fragment } from "react";
import SecSection from "./Sections/2ndSection/secSection";
import SecFour from "./Sections/4thSection/SectionFour";
import SectionFive from "./Sections/5thSection/SectionFive";
import SecSixImg from "./Sections/6thSection/secsiximg";
import SectionSeven from "./Sections/7thSection/sectionseven";
import SectionEight from "./Sections/8thSection/SectionEight";
import Footer from "./Sections/FooterSection/FooterSec";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <FirstSec />
      <StickyNavbar />
      <SecSection />
      <SecThree />
      <SecFour />
      <SectionFive />
      <SecSixImg />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </Fragment>
  );
};

export default App;
