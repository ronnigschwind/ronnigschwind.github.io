import { Link} from 'react-router-dom';
import '../styles/Home.css'

import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';

// purple -> #7e29ff
// blue -> #29b0ff
// green -> #18cd3c

const workExperience = [
  {
    title: 'Web Developer',
    description: {
      bulletOne: 'Develop responsive websites using HTML, CSS, JavaScript, Wordpress, and React.',
      bulletTwo: 'Continuously innovating web development processes to increase efficiency.',
      bulletThree: 'Spearheading the development of a team lead role for the web developers.',
      bulletFour: 'Enhanced and refined over 50 client websites.',
      bulletFive: 'Built 9 websites as the lead developer from scratch for clients including two full stack websites using React.',
      bulletSix: 'Created template websites that are marketed by the sales team to prospective clients.'
    }
  }
]

function Home() {
    return (
      <div className="Home">
        <Banner/>
        <Hero/>

        <div style={{textAlign: 'center', padding: '0 20px', maxWidth: 1200, margin: 'auto'}}>
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Brief Overview</h2>
          <div style={{maxWidth: '100px', height: '8px', margin: 'auto', backgroundColor: '#29b0ff', borderRadius: '5px'}}></div>
          <p style={{margin: '35px auto', maxWidth: 650, fontSize: 20}}>Firstly, thanks for checking out my website! On this page you will find more information on my professional and educational experiences.</p>
        </div>

        <div style={{textAlign: 'center', padding: '0 20px', maxWidth: 1200, margin: 'auto'}}>
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Work Experience</h2>
          {/* <div style={{maxWidth: '100px', height: '8px', margin: 'auto', backgroundColor: '#29b0ff', borderRadius: '5px'}}></div> */}
          {/* <p style={{margin: '35px auto', maxWidth: 650, fontSize: 20}}>Firstly, thanks for checking out my website! On this page you will find more information on my professional and educational experiences.</p> */}
        </div>

        <Accordion titleAndDescription={workExperience}/>

        <div className="workExp" style={{ paddingLeft: "20px" }}>
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