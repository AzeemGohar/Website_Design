import "./SectionEight.style.scss";
const SectionEight = () => {
  return (
    <div className="container">
      <h1 className="secEightHead">Frequently asked questions</h1>
      <div
        class="accordion accordion-flush sm-w-50 md-w-50 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is customer experience?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Typically, when people talk about customer experience (CX) they
              mean traditional sales and marketing touch points along the
              customer journey (for example, attentive store clerks in
              attractive stores and simple and beautiful apps and websites). CX
              is many things, but it can broadly be described as the perception
              a customer or a B2B company has of a brand. These perceptions can
              lead to life-long loyalty to a brand.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              What makes a great customer experience?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              As customer expectations have changed, CX has moved from
              fulfilling wants and needs to meeting customers’ increased
              expectations. For brands, this means customer obsession is a must,
              and brands need to adopt a new way of thinking about what makes
              great CX (see our Business of Experience report to learn more).
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What is customer experience strategy?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              To remain relevant and compete in today’s ever-changing world,
              customer experience strategies need to be top of mind for every
              stakeholder in your business. From the CEO to every C-level
              executive and leader inside both front- and back-office functions,
              everyone needs to be invested in shifting their thinking about
              experience.​
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
