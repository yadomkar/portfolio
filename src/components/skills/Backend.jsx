import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Celery</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Redis</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Big Data</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
