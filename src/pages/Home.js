import { Link} from 'react-router-dom';
import '../styles/Home.css'
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import weddingPic from '../images/wedding-walk-out.jpg'
import cats from '../images/gracie-and-june.jpg'

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

function Home() {
    return (
      <div className="Home">
        <Hero/>
        <div style={{padding: '0 20px', maxWidth: 1050, margin: 'auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Brief Overview</h2>
          <div style={{maxWidth: '100px', height: '8px', margin: 'auto', backgroundColor: '#29b0ff', borderRadius: '5px'}}></div>
          <div style={{display: 'flex', gap: 70, fontSize: 20}}>
            <div style={{maxWidth: 575}}>
              <h3 style={{fontSize: '30px', fontFamily: 'monospace', marginBottom: 0}}>About Me</h3>
              <p>Firstly, thanks for checking out my website!</p>
              <p>
                I am a passionate developer with a wide range of programming experience. I first developed a passion for programming 
                in the 8th grade when I discovered and explored some programming courses on Khanacademy. I continued learning to program 
                for many years, starting with JavaScript, followed by HTML and CSS during a course I took through a local college during 
                my Junior year of high school, and in college I learned Java, Python, C, C++, among many other things. 
              </p>
              <p>
                Fast forward to today, I am now a Web Developer with a passion for producing the highest quality websites and web 
                applications using primarily React and WordPress. I look forward to taking on a lot more personal projects that I am 
                interested in during the upcoming months to continue learning new frameworks and technologies to keep my skills sharp
                and my career opportunities open. 
              </p>
            </div>
            <div style={{maxWidth: 575}}>
              <h3 style={{fontSize: '30px', fontFamily: 'monospace', marginBottom: 20}}>Technical Skills</h3>
              {/* textAlign: 'center', justifyContent: 'center', maxWidth: 500, margin: 'auto', padding: '0 20px' */}
              <div className='techSkills' style={{display: 'flex', flexWrap: 'wrap', gap: '10px 20px', maxWidth: 500, marginRight: 'auto'}}>
                <p>React</p>
                <p>Next.js</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>PHP</p>
                <p>WordPress</p>
                <p>Python</p>
                <p>Java</p>
                <p>C</p>
                <p>C++</p>
                <p>GitHub</p>
                <p>MySQL</p>
                <p>SQL</p>
                <p>Postgres</p>
              </div>
              <div style={{display: 'flex', paddingTop: 20}}>
                <img src={weddingPic} style={{maxHeight: 250}} alt='Xavier and I at our wedding'/>
                <img src={cats} style={{maxHeight: 250}} alt='My pet cats'/>
              </div>
              <p style={{margin: '5px 0 0'}}>My coding helpers: Xavier my husband (he also works remotely as a Software/Application Developer) and Gracie & June our cats! ☺</p>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center', padding: '0 20px', maxWidth: 1050, margin: 'auto'}}>
          <h2 style={{fontSize: '40px', marginTop: '75px', fontFamily: 'monospace'}}>Work Experience</h2>
        </div>

        <Accordion accordionList={workExperience}/>
  
        <div style={{textAlign: 'center', margin: '80px 0'}}>
          <Link to='/projects' className='glowOnHover' style={{color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '8px'}}>See My Projects</Link>
          <Link to='/contact' className='glowOnHover' style={{marginLeft: '20px', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '8px'}}>Connect With Me</Link>
        </div>
      </div>
    );
  }
  
  export default Home;