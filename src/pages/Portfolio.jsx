import Footer from "../components/Footer";
import AudibleAtmosphere from "../assets/Audible Atmosphere.png";
import RealEstate from "../assets/real-estate-admin-rules.png";
import Readme from "../assets/Generate Readme.png";
import Quiz from "../assets/Javascript quiz.png";
import PasswordGen from "../assets/Random Password Generator.png";
import Calendar from "../assets/Simple Calendering App.png";
import githubLogo from '../assets/github-mark.svg';
import './Portfolio.css';

export default function Portfolio() {
  const projects = [
    { image: AudibleAtmosphere, title: 'Audible Atmosphere', githubLink: 'https://github.com/provardjake/Audible-Atmosphere', projectLink: 'https://provardjake.github.io/Audible-Atmosphere/' },
    { image: RealEstate, title: 'Real Estate Rules', githubLink: 'https://github.com/Jelu113/RE-law-lookup', projectLink: 'https://re-law-lookup-production-6926.up.railway.app/' },
    { image: Readme, title: 'Readme', githubLink: 'https://github.com/JonBay/generate-readme', projectLink: 'https://drive.google.com/file/d/1jhHMqVxSQcgzGGKyflLa-Jj47at0t0Rh/view' },
    { image: Quiz, title: 'Javascript Quiz', githubLink: 'https://github.com/JonBay/javascript-quiz', projectLink: 'https://jonbay.github.io/javascript-quiz/' },
    { image: PasswordGen, title: 'Password Generator', githubLink: 'https://github.com/JonBay/random-password-generator', projectLink: 'https://jonbay.github.io/random-password-generator/' },
    { image: Calendar, title: 'Daily Schedule', githubLink: 'https://github.com/JonBay/daily-calendar', projectLink: 'https://jonbay.github.io/daily-calendar/' },
  ];

  return (
    <div className="container mt-3">
      <h1 className="mb-4">Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="portfolio-item">
              <div className="image-container position-relative overflow-hidden">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    className="img-fluid rounded my-3 portfolio-image"
                    alt={project.title}
                  />
                </a>
                <div className="overlay">
                  <div className="overlay-content text-center text-light">
                    <h3 className="mb-2">
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.title}</a>
                    </h3>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
