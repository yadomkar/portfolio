import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">omkar.sy10@gmail.com</span>

              <a href="mailto:omkar.sy10@gmail.com" className="contact__button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Call</h3>
              <span className="contact__card-data">+91 9987194817</span>

              <a href="" className="contact__button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data"></span>

              <a
                href="https://www.linkedin.com/in/omkar-yadav10/"
                className="contact__button"
              >
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
