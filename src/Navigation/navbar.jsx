import "./navbar.style.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img
          src="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.png"
          alt="Accenture"
        />
      </div>
      <div className="navButtons">
        <button className="navItem" href="/">
          Insights
        </button>
        <button href="/" className="navItem">
          Services
        </button>
        <button href="/" className="navItem">
          Industries
        </button>
        <button href="/" className="navItem">
          Careers
        </button>
        <button href="/" className="navItem">
          About Accenture
        </button>
      </div>

      <div className="navEndItems">
        <button>
          <img
            src="https://img.icons8.com/ios/50/000000/search--v1.png"
            alt=""
            className="searchIcon"
          />
        </button>

        <button className="borderRight">
          <img
            src="https://www.accenture.com/Content/images/flags/USA.jpg"
            alt=""
            className="flagIcon"
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
