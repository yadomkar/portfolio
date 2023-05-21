import React from 'react';

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.dribbble.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-dribbble"></i>
      </a>
      <a
        href="https://www.github.com/yadomkar/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
