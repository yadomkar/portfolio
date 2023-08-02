import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experiences</h2>
      <span className="section__subtitle"></span>
      <div className="experience__container container">
        <div className="experience__sections">
          <div className="experience__content">
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Software Engineer</h3>
                <span className="experience__subtitle">CallHub</span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - Jun 2023
                </div>
                <div className="experience__description">
                  Led a team in upgrading a significant Django project from
                  Python 2 to Python 3. Adopted a test-driven development
                  approach to curtail potential fail paths during the
                  transition. Successfully upgraded 200+ dependencies to align
                  with industry standards, while ensuring uninterrupted
                  development.
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div></div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">Senior Data Engineer</h3>
                <span className="experience__subtitle">
                  Larsen & Toubro Infotech
                </span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2020 - May 2022
                </div>
                <div className="experience__description">
                  Collaborated with a Big 4 multinational bank on their
                  next-generation Data Fabric project. Played a key role in
                  designing solutions to address data discrepancies, automated
                  data validation across clusters, and safeguarded platform
                  integrity by resolving critical data loss issues.
                </div>
              </div>
            </div>
            {/* <div className="experience__data">
              <div>
                <h3 className="experience__title">GET - Data Engineer</h3>
                <span className="experience__subtitle">
                  Larsen & Toubro Infotech
                </span>
                <div className="experience__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2020 - Jul 2021
                </div>
              </div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
