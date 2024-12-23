import { faAngular, faCss, faDrupal, faJs, faNodeJs, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import data from './data/portfolio.json';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const triggerPointRef = useRef(null);
  const iconSize = 'xl';

  useEffect(() => {
    console.log('ref', triggerPointRef.current);
    const handleScroll = () => {
      
      if (triggerPointRef.current && window.scrollY > triggerPointRef.current.offsetTop - 300) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);
  return (
    <div className="app">
      <div className="app__title">
        <h1>Anna Boot</h1>
        <p>
          Hello! I'm <strong>Anna</strong>, a seasoned UI Developer with over 10 years of experience at IBM Consulting. 
          My journey into programming began during my master's program, where I delved into PHP, SQL, and Python basics. 
          However, my passion for UI development truly ignited with my first professional project, My Coke Rewards.
        </p>
        <p>
          Throughout my career, I've honed my ability to adapt quickly to new environments and technologies, thanks to a wide 
          range of deployments across diverse projects. This adaptability not only sharpened my technical skills but also 
          fueled my curiosity and love for creating innovative solutions.
        </p>
        <p>
          Beyond work, I enjoy expanding my skill set through personal projects and continuous learning. For example, 
          I wrote a Python script to scrape data from my favorite cooking site, and then used that data to find recipes by ingredient. I created a Chrome plugin to crawl bookmarked recipe pages so I could search them by ingredient and add custom tags. I also explored C# and Unity to deploy an app on my Meta Quest and 
          completed a React Native course at IBM, where I presented a custom Android app to my team (this was also food related). These experiences reflect my passion for exploring new technologies and building experiences that are useful or fun.
        </p>
        <p>
          To me, life is an ongoing journey of learning and growth. I'm excited about the challenges and opportunities 
          that lie ahead as I continue to build and innovate in the world of UI development.
        </p>
      </div>
      <div className="portfolio__header">
        <h2 className="portfolio__title">Select Projects at IBM</h2>
        <div style={{ height: "15px", margin: 0 }} ref={triggerPointRef}>
          <div className={`bar ${isAnimated ? "animated" : ""}`} />
        </div>
      </div>
      <div className="portfolio">
        {data.portfolio.map((project) => {
          return (
            <div key={project.id} className="portfolio__item">
              <h2>{project.title}</h2>
              <h3>{project.date}</h3>
              <p>{project.summary}</p>
              <p>{project.contribution.replace(/-/g, "\n-")}</p>
              {project.url && <a href={project.url} target="_blank" rel="noreferrer">Website</a>}
              {project.stack && (
                <div className="portfolio__item-stack">
                {project.stack.includes('angular') && <FontAwesomeIcon icon={faAngular} size={iconSize} title="Angular" />}
                {project.stack.includes('react') && <FontAwesomeIcon icon={faReact} size={iconSize} title="React" />}
                {project.stack.includes('rn') && <FontAwesomeIcon icon={faReact} size={iconSize} title="React Native" />}
                {project.stack.includes('js') && <FontAwesomeIcon icon={faJs} size={iconSize} title="JavaScript" />}
                {project.stack.includes('node') && <FontAwesomeIcon icon={faNodeJs} size={iconSize} title="Node" />}
                {project.stack.includes('wordpress') && <FontAwesomeIcon icon={faWordpress} size={iconSize} title="Wordpress" />}
                {project.stack.includes('drupal') && <FontAwesomeIcon icon={faDrupal} size={iconSize} title="Drupal" />}
                {project.stack.includes('html') && <FontAwesomeIcon icon={faCode} size={iconSize} title="HTML" />}
                {project.stack.includes('css') && <FontAwesomeIcon icon={faCss} size={iconSize} title="CSS" />}
                {project.stack.includes('sass') && <FontAwesomeIcon icon={faSass} size={iconSize} title="Sass" />}
              </div>
          )}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
