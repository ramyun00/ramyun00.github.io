import {
  faAngular,
  faCss,
  faDrupal,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faUnity,
  faWordpress
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const getIcons = (project, iconSize) => {
  const color = '#93B7CC';
  return (
    <div className="portfolio__item-stack">
      {project.stack.includes('unity') && (
        <FontAwesomeIcon icon={faUnity} size={iconSize} color={color} title="Unity" />
      )}
      {project.stack.includes('angular') && (
        <FontAwesomeIcon icon={faAngular} size={iconSize} color={color} title="Angular" />
      )}
      {project.stack.includes('react') && (
        <FontAwesomeIcon icon={faReact} size={iconSize} color={color} title="React" />
      )}
      {project.stack.includes('rn') && (
        <FontAwesomeIcon icon={faReact} size={iconSize} color={color} title="React Native" />
      )}
      {project.stack.includes('js') && (
        <FontAwesomeIcon icon={faJs} size={iconSize} color={color} title="JavaScript" />
      )}
      {project.stack.includes('node') && (
        <FontAwesomeIcon icon={faNodeJs} size={iconSize} color={color} title="Node" />
      )}
      {project.stack.includes('wordpress') && (
        <FontAwesomeIcon icon={faWordpress} size={iconSize} color={color} title="Wordpress" />
      )}
      {project.stack.includes('drupal') && (
        <FontAwesomeIcon icon={faDrupal} size={iconSize} color={color} title="Drupal" />
      )}
      {project.stack.includes('html') && (
        <FontAwesomeIcon icon={faCode} size={iconSize} color={color} title="HTML" />
      )}
      {project.stack.includes('css') && (
        <FontAwesomeIcon icon={faCss} size={iconSize} color={color} title="CSS" />
      )}
      {project.stack.includes('sass') && (
        <FontAwesomeIcon icon={faSass} size={iconSize} color={color} title="Sass" />
      )}
    </div>
  );
};
