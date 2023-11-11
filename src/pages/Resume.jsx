import Footer from '../components/Footer';
import resumePDF from '../assets/Resume.pdf'

export default function Resume() {
  return (
    <div style={{ marginLeft: "60px", marginTop: "10px", marginRight: "120px" }}>
      <h1>Resume</h1>
      <p style={{ fontSize: "20px" }}>
        Click <a href={resumePDF} target="_blank" rel="noopener noreferrer">Here</a> to view my Resume.
      </p>
      <h4>Front End Profiencies</h4> 
      <p>
        HTML<br />
        CSS<br />
        git<br />
        JavaScript<br />
        Bootstrap<br />
        APIs<br />
        JQuery<br />
        JSON<br />
        AJAX<br />
        Handlebars
      </p>

      <h4>Back End Profiencies</h4> 
      <p>
        Node<br />
        Express<br />
        MySQL<br />
        SQL Server<br />
        Sequelize<br />
        React<br />
        NoSQL<br />
        Mongo
      </p>
      
      <Footer />
    </div>
  );
}
