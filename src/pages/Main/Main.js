import React from 'react';
import { FaXing, FaLinkedinIn, FaGithub, FaFileDownload } from 'react-icons/fa';

import useType from '../../hooks/useType';

import data from '../../config/data';
import file from '../../assets/resume.pdf';
import './index.css';

const Main = () => {
  const { linkedin, xing, github } = data.social;
  const strings = ['Hi!', "I'm Augusto,", 'Software Developer'];

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
              <a href={file} download>
                <FaFileDownload size={16} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
