import { Link} from 'react-router-dom';
import '../styles/Home.css'

import Hero from '../components/Hero';

// purple -> #7e29ff
// blue -> #29b0ff
// green -> #40ff2b

// Home page content
function Home() {
    return (
      <div className="Home">
        <Hero/>
        <p style={{ paddingLeft: "20px" }}>Home page in progress...</p>

        <p style={{ padding: "20px" }}>I am a Web Developer and recent graduate of Wright State University (WSU). I graduated this 
        Spring with a Bachelor of Science in Computer Science and a minor in Mathematics. I graduated in 2019 from Oak Harbor High 
        School as Valedictorian while taking classes through both Terra State Community College and Owens Community College. On this 
        page you can learn more about my work experience and education, more of personal information about me on the "About" page, 
        see some of my past and current projects on the "Projects" page, and more info on how to contact me on the "Contact" page. 
        Thanks for checking out my website! </p>

        <div className="workExp" style={{ paddingLeft: "20px" }}>
          <h2 style={{ textDecoration: "underline" }}>Work Experience</h2>
          <p style={{ fontWeight: "bold" }}>Art Unlimited</p>
          <p>Web Developer: May 2022 - Present</p>
          <p>Web Development Intern: May 2021 - May 2022</p>

          <p style={{ fontWeight: "bold" }}>Wright State University</p>
          <p>Residential Assistant: January 2022 - Present</p>

          <p style={{ fontWeight: "bold" }}>Rite Aid</p>
          <p>Shift Supervisor: May 2020 - May 2021</p>
          <p>Sales Associate: Jan. 2019 - June 2019</p>
          <br/>
        </div>
        <div className="techSkills" style={{ paddingLeft: "20px" }}>
          <h2 style={{ textDecoration: "underline" }}>Technical Skills</h2>
          <p><span style={{ display: "inline", fontWeight: "bold" }}>Programming Languages:</span> Visual Basic, Python, Java, C++, C, Ruby</p>
          <p><span style={{ display: "inline", fontWeight: "bold" }}>Web Development:</span> HTML, CSS, JavaScript, PHP, Wordpress, Wix, WP Engine</p>
          <p><span style={{ display: "inline", fontWeight: "bold" }}>App Development:</span> ASP.NET, React, Swift, Xcode, Android Studio</p>
          <br/>
        </div>
        <div className="edu" style={{ paddingLeft: "20px" }}>
          <h2 style={{ textDecoration: "underline" }}>Education</h2>
          <p><span style={{ display: "inline", fontWeight: "bold" }}>Wright State University:</span> Graduated April 2022</p>
          <p>Bachelors of Science in Computer Science, Minor in Mathematics</p>

          <p><span style={{ display: "inline", fontWeight: "bold" }}>College Credit Plus Program:</span> Aug. 2017 - May 2019</p>
          <p>Owens Commmunity College</p>
          <p>Terra State Commmunity College</p>

          <p><span style={{ display: "inline", fontWeight: "bold" }}>Oak Harbor High School:</span> Graduated 2019</p>
          <p>High School Diploma, Valedictorian</p>
          <br/><br/>
        </div>
        <Link to="/about" className='glowOnHover' style={{ marginLeft: "20px", color: "white", background: "black", padding: "10px", borderRadius: "8px"}}>More About Me</Link>
      </div>
    );
  }
  
  export default Home;