import React from 'react';

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="background-footer space after-introduction"></div>
      <div className="footer-container">
        <ul className="links">
          <li>
            <a href="https://www.linkedin.com/in/kevinjrneves" target="_blank" rel="noreferrer">
              <span>
                <img src="./assets/icons/linkedin.png" alt="linkedin" />
              </span>
              <p>Linkedin</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/kevin-neves" target="_blank" rel="noreferrer">
              <span>
                <img src="./assets/icons/github.png" alt="github" />
              </span>
              <p>Github</p>
            </a>
          </li>
          <li>
            <a href="/assets/files/KEVIN-Resume-PtBr.pdf" download>
              <span>
                <img src="./assets/icons/curriculum.png" alt="curriculum" />
              </span>
              <p>Curriculum</p>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5541996668892&text=Contact%20me"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src="./assets/icons/whatsapp.png" alt="whatsapp" />
              </span>
              <p>WhatsApp</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
