import "./sectionthree.style.scss";

const SecThree = () => {
  return (
    <div className="fullContainer">
      <div className="container">
        <h1 className=" secThreeHead">Explore our latest insights</h1>
      </div>
      <div className="container carding">
        {/* First Card */}
        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20220721T235611Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail768x432/36/Accenture-Cone-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">The human paradox</a>
            </h3>
            <p>From customer centricity to life centricity</p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20211006T131020Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail768x432/30/Accenture-CM-Thumbnail-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">The great marketing declutter​</a>
            </h3>
            <p>
              Focus on what really matters. Discard what doesn’t. And rewire the
              rest.​
            </p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>
        {/* Third Card */}

        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20210208T054614Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/82/Accenture-Tryit-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">Try it. Trust it. Buy it.</a>
            </h3>
            <p>Opening the door to the next wave of digital commerce.</p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20210816T185555Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail768x432/29/Accenture-Future-of-CC-Hero-Image-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">The future of customer conversation​</a>
            </h3>
            <p>
              Combine people and technology to enable conversations that deliver
              real business value.
            </p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>
        {/* Fifth Card */}
        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20220301T082317Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/133/Accenture-End-to-Endless-Image-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">End-to-endless customer service</a>
            </h3>
            <p>Transforming customer service to generate growth.</p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>
        {/* Sixth Card */}
        <div className="thirdSecBody">
          <img
            className="thirdSecImg"
            src="https://www.accenture.com/t20220826T102415Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/82/Accenture-BOE-Covid-768x432.jpg"
            alt=""
          />
          <div className="secThreeImgCap">
            <a className="secLinks" href="/">
              Accenture Song
            </a>
            <h3>
              <a href="/">Channel shift: Prioritizing digital commerce</a>
            </h3>
            <p>Navigating the human and business impact of COVID-19.</p>
            <a href="/" className="endlink">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecThree;
