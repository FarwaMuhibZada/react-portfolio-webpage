import React, { useState } from 'react';
import './certificates.css';
import C1 from '../../assets/certificate_js.png';
import C2 from '../../assets/Screenshot (807).png';
import C3 from '../../assets/c3.png';

const certificatesData = [
  {
    title: 'JavaScript Algorithm & Data Structure',
    image: C1,
    link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/javascript-algorithms-and-data-structures-v8',
  },
  {
    title: 'Front End Development Libraries',
    image: C3,
    link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/front-end-development-libraries',
  },
  {
    title: 'Responsive Web Design',
    image: C2,
    link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/responsive-web-design',
  },
];

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificatesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificatesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="certificates">
      <h2>My Certificates</h2>
      <div className="slider">
        <button className="slider__btn slider__btn--prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="slider__content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certificatesData.map((cert, index) => (
            <div key={index} className="slider__item">
              <h5>{cert.title}</h5>
              <div className="slider__image">
                <img src={cert.image} alt={cert.title} />
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Visit Link
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="slider__btn slider__btn--next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Certificates;
