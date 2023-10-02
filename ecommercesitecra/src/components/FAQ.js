import React from 'react';
import faqData from './FAQ.json'

const FAQ = () => {
    return(
      <><h2>Frequently Asked Questions (FAQ)</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {faqData.map((faq,index)=>(
        <div className="accordion-item" key={index}>
        <h2 className="accordion-header" id={`flush-heading${index}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${index}`}
            aria-expanded="true"
            aria-controls={`flush-collapse${index}`}
          >
            {faq.question}
          </button>
        </h2>
        <div
          id={`flush-collapse${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${index}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{faq.answer}</div>
        </div>
      </div>
    ))}
  </div>
</>
);
};

    export default FAQ;
    