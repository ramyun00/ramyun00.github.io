import { useEffect, useRef, useState } from 'react';
import './App.scss';
import data from './data/portfolio.json';
import { getIcons } from './utilities/getIcons';
import StarrySky from './utilities/makeSky';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isSecondAnimated, setIsSecondAnimated] = useState(false);
  const [isThirdAnimated, setIsThirdAnimated] = useState(false);
  const ibmPointRef = useRef(null);
  const personalProjectsTriggerRef = useRef(null);
  const contactTriggerPointRef = useRef(null);
  const iconSize = 'xl';

  const scrollToSection = (ref) => {
    const target = ref.current;

    if (target) {
      // Scroll to the section, but stop 100px above it
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ibmPointRef.current && window.scrollY > ibmPointRef.current.offsetTop - 250) {
        setIsAnimated(true);
      }

      if (
        personalProjectsTriggerRef.current &&
        window.scrollY > personalProjectsTriggerRef.current.offsetTop - 300
      ) {
        setIsSecondAnimated(true);
      }

      if (
        contactTriggerPointRef.current &&
        window.scrollY > contactTriggerPointRef.current.offsetTop - 300
      ) {
        setIsThirdAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <div className="app">
      <StarrySky />
      <div className="app_header-wrapper">
        <div className="app__title">
          <h1>Anna Boot</h1>
          <h2>UI Dev | Adaptable, curious, inventive</h2>
        </div>
        <div className="app__nav">
          <button onClick={() => scrollToSection(ibmPointRef)}>Select Projects at IBM</button>
          <button onClick={() => scrollToSection(personalProjectsTriggerRef)}>
            Personal Projects
          </button>
          <button onClick={() => scrollToSection(contactTriggerPointRef)}>Contact</button>
        </div>
      </div>
      <div className="portfolio__header">
        <h2 className="portfolio__title">Select Projects at IBM</h2>
        <div style={{ height: '15px', margin: 0 }} ref={ibmPointRef}>
          <div className={`bar ${isAnimated ? 'animated' : ''}`} />
        </div>
      </div>
      <div className="portfolio">
        {data.portfolio.map((project) => {
          if (project.type !== 'personal') {
            return (
              <div key={project.id} className="portfolio__item">
                <h2>{project.title}</h2>
                <h3>{project.date}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>
                <p>{project.contribution?.replace(/-/g, '\n-')}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                )}
                {project.stack && <>{getIcons(project, iconSize)}</>}
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>

      <div className="portfolio__header">
        <h2 className="portfolio__title">Personal Projects</h2>
        <div style={{ height: '15px', margin: 0 }} ref={personalProjectsTriggerRef}>
          <div className={`bar ${isSecondAnimated ? 'animated' : ''}`} />
        </div>
      </div>
      <div className="portfolio">
        {data.portfolio.map((project) => {
          if (project.type === 'personal') {
            return (
              <div key={project.id} className="portfolio__item">
                <h2>{project.title}</h2>
                <h3>{project.date}</h3>
                <p dangerouslySetInnerHTML={{ __html: project.summary }}></p>
                <p>{project.contribution?.replace(/-/g, '\n-')}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Website
                  </a>
                )}
                {project.stack && <>{getIcons(project, iconSize)}</>}
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>

      <div className="portfolio__header">
        <h2 className="portfolio__title">Contact</h2>
        <div style={{ height: '15px', margin: 0 }} ref={contactTriggerPointRef}>
          <div className={`bar ${isThirdAnimated ? 'animated' : ''}`} />
        </div>
      </div>
      <div className="portfolio">
        <div className="contact">
          <div>
            <h2>E-Mail</h2>
            <a href="mailto:annaboot@gmail.com">annaboot@gmail.com</a>
          </div>
          <div>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/annaboot/">
              https://www.linkedin.com/in/annaboot/
            </a>
          </div>
          <div>
            <h2>Github</h2>
            <a href="https://github.com/ramyun00">https://github.com/ramyun00</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
