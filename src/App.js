import { useEffect, useRef, useState } from 'react';
import './App.scss';
import data from './data/portfolio.json';
import { getIcons } from './utilities/getIcons';
import StarrySky from './utilities/makeSky';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isSecondAnimated, setIsSecondAnimated] = useState(false);
  const [isThirdAnimated, setIsThirdAnimated] = useState(false);
  const triggerPointRef = useRef(null);
  const secondTriggerPointRef = useRef(null);
  const thirdTriggerPointRef = useRef(null);
  const iconSize = 'xl';

  useEffect(() => {
    console.log('ref', triggerPointRef.current);
    const handleScroll = () => {
      if (triggerPointRef.current && window.scrollY > triggerPointRef.current.offsetTop - 300) {
        setIsAnimated(true);
      }

      if (
        secondTriggerPointRef.current &&
        window.scrollY > secondTriggerPointRef.current.offsetTop - 300
      ) {
        setIsSecondAnimated(true);
      }

      if (
        thirdTriggerPointRef.current &&
        window.scrollY > thirdTriggerPointRef.current.offsetTop - 300
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
      <div className="app__title">
        <h1>Anna Boot</h1>
        <h2>UI Dev | Adaptable, curious, inventive</h2>
      </div>
      <div className="portfolio__header">
        <h2 className="portfolio__title">Select Projects at IBM</h2>
        <div style={{ height: '15px', margin: 0 }} ref={triggerPointRef}>
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
        <div style={{ height: '15px', margin: 0 }} ref={secondTriggerPointRef}>
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
        <div style={{ height: '15px', margin: 0 }} ref={thirdTriggerPointRef}>
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
