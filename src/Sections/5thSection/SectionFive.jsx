import "./SectionFive.style.scss";

const SectionFive = () => {
  return (
    <div className="fullContainer mt-5">
      <div className="container">
        <h1 className="secFiveHead">
          The numbers tell the story about why CX is no longer enough
        </h1>
        <p className="secFivePara">
          Research conducted by Adweek and Accenture found that 80% of brands
          think they deliver a superior customer experience but only 8% of their
          customers agree.
        </p>
        <div className="secFiveCol">
          <div className="secFiveItems">
            <h1 className="secFiveItemHead">80%</h1>
            <p>of brands think they deliver a superior customer experience.</p>
          </div>
          <div className="secFiveItems">
            <h1 className="secFiveItemHead">8%</h1>
            <p>of their customers agree.</p>
          </div>
        </div>
        <p className="secFivePara">
          With such a huge disconnect between expectation and reality, pushing
          beyond CX has never been more vital–it simply isn’t enough to meet
          customers’ expectations.
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
