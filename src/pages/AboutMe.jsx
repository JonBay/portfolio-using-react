import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <div style={{ marginLeft: "60px", marginTop: "10px", marginRight: "120px" }}>
      <h1>About Me</h1>
      <img
        src="../src/assets/Portrait.jpg"
        alt="Portrait"
        style={{
          width: "130px",
          height: "150px",
          borderRadius: "30%",
          marginTop: "10px",
          marginBottom: "20px"
        }}
      />
      <p style={{ fontSize: "19px" }}>
        <strong>Jon Bay - Dev Ops Manager</strong>
        <br />
        Greetings! I'm Jon Bay, a Dev Ops Manager with a passion for
        problem-solving and a strong desire to transition into a development
        role. Over the years, I've collaborated closely with development teams,
        troubleshooting issues for our valued customers and gathering essential
        requirements for coding projects.
        <br />
        <br />
        <strong>Background and Proficiency:</strong>
        <br />
        My expertise lies in utilizing SQL Server Management Studio, where I
        consider myself proficient. In addition, I've had the privilege of
        working with a variety of technologies including React, MySQL,
        JavaScript, Node, Express, GraphQL, and Mongo.
        <br />
        <br />
        <strong>Transitioning to Development:</strong>
        <br />
        Inspired by my interactions with developers, I've embarked on a
        transformative journey. Currently, I'm on the verge of completing a
        26-week coding boot camp offered by the University of Utah/edEx. This
        intensive program has equipped me with hands-on experience in a wide
        range of technologies.
        <br />
        <br />
        <strong>Problem-Solving Approach:</strong>
        <br />
        I believe in breaking down complex problems to their simplest form. By
        redefining the problem statement, I ensure a deep understanding before
        proceeding. I'm a firm advocate of starting with a basic solution and
        building from there. Sometimes, the simplest solution is the most
        effective.
        <br />
        <br />
        <strong>Projects and Collaborations:</strong>
        <br />
        In the boot camp, I've had the privilege of working in collaborative
        environments, resulting in the creation of impactful projects. Notable
        among them is a weather app that provides real-time weather updates and
        generates personalized playlists based on weather conditions. Another
        significant project caters to the State of Utah Real-Estate Division,
        simplifying the search for laws and statutes for investigators.
        <br />
        <br />
        <strong>Key Qualities:</strong>
        <br />
        Diligence and a strong work ethic. A team player with experience in
        collaborating with development teams.
        <br />
        <br />
        <strong>Future Endeavors:</strong>
        <br />
        My aspiration is to immerse myself in the field of development,
        embarking on a lifelong learning adventure. I'm committed to honing my
        skills and accelerating my capabilities.
        <br />
        <br />
        <strong>Beyond Development:</strong>
        <br />
        When I'm not immersed in the world of development, I find immense joy in
        spending quality time with my family, especially my beautiful wife.
        Together, we revel in spending time with our children, engaging in many
        different kinds of home improvement and other projects, and community
        involvement. I'm also passionate about playing the piano, reading, my
        endeavors to live a healthy life, and Reeces.
        <br />
        <br />
        <strong>Get in Touch:</strong>
        <br />
        You can find more about me and my work by exploring the links and in the
        footer of this page. Feel free to reach out to me through the "Contact
        Me" tab for any inquiries or collaborations.
      </p>
      <Footer />
    </div>
  );
}
