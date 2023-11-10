import Footer from '../components/Footer';
import "./Portfolio.css";
import AudibleAtmosphere from '../assets/Audible Atmosphere.png';
import RealEstate from '../assets/real-estate-admin-rules.png';
import Readme from '../assets/Generate Readme.png';
import Quiz from '../assets/Javascript quiz.png';
import PasswordGen from '../assets/Random Password Generator.png';
import Calendar from '../assets/Simple Calendering App.png';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img
            src={AudibleAtmosphere}
          />
        </div>

        <div className="portfolio-item">
          <img
            src={RealEstate}
          />
        </div>

        <div className="portfolio-item">
          <img
            src={Readme}
          />
        </div>

        <div className="portfolio-item">
          <img
            src={Quiz}
          />
        </div>

        <div className="portfolio-item">
          <img
            src={PasswordGen}
          />
        </div>

        <div className="portfolio-item">
          <img
            src={Calendar}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
