import "./stickyNavbar.style.scss";

const StickyNavbar = () => {
  return (
    <div className="stickyNavContainer">
      <div className="container fixedStickyContainer">
        <button className="firstBtnChild">Explore Our Latest Insights</button>
        <button>Industry Customer Experience Trends</button>
        <button>Understanding Customer Experience</button>
        <button>Who is Responsible for Customer Experience?</button>
        <button>The Future of Customer Experience</button>
      </div>
    </div>
  );
};

export default StickyNavbar;
