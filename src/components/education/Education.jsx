import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section className="education section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle"></span>
      <div className="education__container container">
        <div className="education__sections">
          <div className="education__content">
            <div className="education__data">
              <div>
                <h3 className="education__title">MS Computer Science</h3>
                <span className="education__subtitle">
                  San Jose State University
                </span>
                <div className="education__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - May 2025
                </div>
                <div className="education__description">
                  Relevant Coursework: Advanced Algorithms, Computer Networks.
                </div>
              </div>

              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
              <div></div>
            </div>
            <div className="education__data">
              <div></div>
              <div>
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>
              <div>
                <h3 className="education__title">BE Computer Engineering</h3>
                <span className="education__subtitle">Mumbai University</span>
                <div className="education__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2016 - Oct 2020
                </div>
                <div className="education__description">
                  Relevant Coursework: Operating Systems, Database Systems, Data
                  Structures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
