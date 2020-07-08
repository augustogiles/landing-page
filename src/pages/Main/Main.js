import React from 'react';
import { FaXing, FaLinkedinIn, FaGithub, FaFileDownload } from 'react-icons/fa';
import psmi from '../../assets/psmi.png';
import psmii from '../../assets/psmii.png';

import useType from '../../hooks/useType';
import data from '../../config/data';

import './index.css';

const Main = () => {
  const { linkedin, xing, github, drive, scrumOrg } = data.social;
  const strings = ['Hi!', "I'm Augusto,", 'a Scrum Master'];

  const text = useType(strings);

  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <h1>
            {text}
            <span className="cursor">|</span>
          </h1>
          <ul className="social">
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={16} color="white" />
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={16} color="white" />
              </a>
            </li>
            <li>
              <a href={xing} target="_blank" rel="noopener noreferrer">
                <FaXing size={16} color="white" />
              </a>
            </li>
            <li>
              <a href={drive} target="_blank" rel="noopener noreferrer">
                <FaFileDownload size={16} color="white" />
              </a>
            </li>
          </ul>
          <ul className="badges">
            <li>
              <a href={scrumOrg} target="_blank" rel="noopener noreferrer">
                <img src={psmi} alt="PSM I" className="psmi" />
              </a>
            </li>
            <li>
              <a href={scrumOrg} target="_blank" rel="noopener noreferrer">
                <img src={psmii} alt="PSM II" className="psmii" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
