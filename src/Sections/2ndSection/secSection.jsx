import "./secSection.style.scss";

const SecSection = () => {
  return (
    <div className="container">
      <h1 className="sec2Head">
        What is customer experience? And why it’s evolving
      </h1>
      <div className="secBodyContainer">
        <div className="secBody1">
          <p>
            Typically, when people talk about customer experience (CX) they mean
            traditional sales and marketing touch points along the customer
            journey (for example, attentive store clerks in attractive stores
            and simple and beautiful apps and websites). In the past, when
            executed well, CX investments have yielded good results: customer
            retention and acquisition, increased sales and loyalty.
          </p>
          <p>
            But the world has changed. How we interact with brands has evolved
            and so too has customer experience. Even before Covid-19, digital
            was already impacting how we all live, shop, work and play—and the
            pandemic has upended things even more. Many of the consumer
            behavioral changes we are seeing today are likely to stay with us
            for a long time, possibly forever. Some have been in motion for
            years. Many have now been accelerated.
          </p>
          <p>All of this affects customer experience.</p>
          <p>
            Right now, we’re on the brink of an experience renaissance. CX is
            not going away, but its value proposition is stalling because many
            of the fundamentals of CX are now commonplace and no longer enough
            for differentiation and growth. A mandate of every organization must
            be to deliver exceptional experiences for their customers. This
            renaissance is galvanizing companies to push beyond the CX
            philosophy and reimagine their entire business through the lens of
            experience.
          </p>
        </div>
        <div className="secBody2">
          <img
            className="sec2Img"
            src="https://www.accenture.com/t20220720T091728Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail768x432/32/Accenture-Fjord-Trends-2022-Supporting-Image1-768x432.jpg"
            alt=""
          />

          <div className="imgCap">
            <h3>
              <a href="/">Fjord Trends 2022</a>
            </h3>
            <p>
              Explores recent changes in relationships and sets out how
              organizations can respond to build a new fabric of life that's
              good for people and the planet.
            </p>
            <a href="/">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecSection;
