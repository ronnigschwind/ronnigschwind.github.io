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
    title: 'Web Developer (Remote)',
    description: 
      <div>
        <p style={{margin: 0}}>Art Unlimited | Angora, Minnesota | May 2022 - Present</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>Develop responsive websites using HTML, CSS, JavaScript, Wordpress, and React.</li>
          <li>Continuously innovating web development processes to increase efficiency.</li>
          <li>Spearheading the development of a team lead role for the web developers.</li>
          <li>Enhanced and refined over 50 client websites.</li>
          <li>Built 9 websites as the lead developer from scratch for clients including two full stack websites using React.</li>
          <li>Created template websites that are marketed by the sales team to prospective clients.</li>
        </ul>
      </div>,
    id: 'webDev'
  },
  {
    title: 'Web Development Intern (Remote)',
    description: 
      <div>
        <p style={{margin: 0}}>Art Unlimited | Angora, Minnesota | May 2021 - May 2022</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>Learned the fundamentals of web development through online courses, company training, and working on 25+ client websites. </li>
          <li>Learned how to perform QA (quality assurance) testing on websites before launching them using BrowserStack.</li>
          <li>Added functionality to an internal web application using Visual Basic, SQL Server, and ASP.NET.</li>
        </ul>
      </div>,
    id: 'webDevIntern'
  },
  {
    title: 'Shift Supervisor',
    description: 
      <div>
        <p style={{margin: 0}}> Rite Aid | Oak Harbor, Ohio | May 2020 - May 2021</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>Completed tasks ahead of schedule by delegating work to other employees and increasing efficiency of how tasks were approached.</li>
          <li>Trained new employees.</li>
        </ul>
      </div>,
    id: 'shiftSupervisor'
  }
]

const eduExperience = [
  {
    title: "Bachelor's Degree in Computer Science, Minor in Mathematics",
    description: 
      <div>
        <p style={{margin: 0}}>Wright State University | Dayton, Ohio | Graduated April 2022</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>In progress...</li>
        </ul>
      </div>,
    id: 'WSU'
  },
  {
    title: 'College Credit Plus Program',
    description: 
      <div>
        <p style={{margin: 0}}>Owens Community College, Terra State Community College | Aug. 2017 - May 2019</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>In progress...</li>
        </ul>
      </div>,
    id: 'CCP'
  },
  {
    title: 'High School Honors Diploma',
    description: 
      <div>
        <p style={{margin: 0}}> Oak Harbor High School | Oak Harbor, Ohio | Graduated 2019</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>In progress...</li>
          <li>Valedictorian</li>
        </ul>
      </div>,
    id: 'OHHS'
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
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Technical Skills</h2>
        </div>

        <div className='techSkills' style={{padding: '0 20px', textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 430, margin: 'auto'}}>
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>PHP</p>
          <p>WordPress</p>
          <p>Python</p>
          <p>Java</p>
          <p>C</p>
          <p>C++</p>
        </div>

        <div style={{textAlign: 'center', padding: '0 20px', maxWidth: 1200, margin: 'auto'}}>
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Work Experience</h2>
        </div>

        <Accordion accordionList={workExperience}/>

        <div style={{textAlign: 'center', padding: '0 20px', maxWidth: 1200, margin: 'auto'}}>
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Educational Experience</h2>
        </div>

        <Accordion accordionList={eduExperience}/>
  
        <div style={{textAlign: 'center', margin: '80px 0'}}>
          <Link to='/about' className='glowOnHover' style={{color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '8px'}}>See My Projects</Link>
          <Link to='/about' className='glowOnHover' style={{marginLeft: '20px', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '8px'}}>More About Me</Link>
        </div>
      </div>
    );
  }
  
  export default Home;