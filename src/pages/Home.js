// import { useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css'
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import weddingPic from '../images/wedding-walk-out.jpg'
import cats from '../images/gracie-and-june.jpg'
import Project from '../components/Project';
import artUnlimited from '../images/art-unlimited.webp'
import victors from '../images/victors.webp'
import irelandContracting from '../images/ireland-contracting.webp'
import roofPro from '../images/roof-pro.webp'
import arrowheadLibrary from '../images/arrowhead-library.webp'
import gorman from '../images/gorman-roofing.webp'
import reliant from '../images/reliant.webp'
import whiteWilderness from '../images/white-wilderness.webp'
import goodNeighbors from '../images/good-neighbors.webp'

// let contactRef = useRef();
// const executeScroll = () => contactRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
// executeScroll();

const projectsList = [
  {
    img: artUnlimited,
    title: 'Art Unlimited React Web App',
    description: 'Redid the previous Art Unlimited website that was done previously in WordPress in React with an entirely new design.',
    link: 'https://www.artunlimitedusa.com/',
  },
  {
    img: victors,
    title: 'Victors Home Solutions React Web App',
    description: 'Redid the previous Victors Home Solutions website that was done previously in WordPress in React with an entirely new design.',
    link: 'https://www.victors.com/',
  },
  {
    img: irelandContracting,
    title: 'Ireland Contracting WordPress Website',
    description: 'Created a new website using WordPress for Ireland Contracting.',
    link: 'https://www.irelandcontracting.com/',
  },
  {
    img: roofPro,
    title: 'RoofPro WordPress Website',
    description: 'Created a new website using WordPress used for marketing to roofing companies.',
    link: 'https://roofpro.artunlimitedusa.com/',
  },
  {
    img: arrowheadLibrary,
    title: 'Arrowhead Library WordPress Website',
    description: 'Created a new website using WordPress for Arrowhead Library.',
    link: 'https://www.alslib.info/',
  },
  {
    img: gorman,
    title: 'Gorman Roofing WordPress Website',
    description: 'Created a new website using WordPress for Gorman Roofing.',
    link: 'https://www.gormanroofing.com/',
  },
  {
    img: reliant,
    title: 'Reliant Roofing WordPress Website',
    description: 'Created a new website using WordPress for Reliant Roofing.',
    link: 'https://www.reliantroofing.com/',
  },
  {
    img: whiteWilderness,
    title: 'White Wilderness WordPress Website',
    description: 'Created a new website using WordPress for White Wilderness.',
    link: 'https://www.whitewilderness.com/',
  },
  {
    img: goodNeighbors,
    title: 'Good Neighbors EMS WordPress Website',
    description: 'Created a new website using WordPress for Good Neighbors EMS.',
    link: 'https://www.goodneighborsems.com/',
  }
]

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
          <h2 style={{textAlign: 'center', fontSize: '50px', marginTop: '75px'}}>Brief Overview</h2>
          <div style={{maxWidth: '100px', height: '8px', margin: 'auto', backgroundColor: '#29b0ff', borderRadius: '5px'}}></div>
          <div className='aboutAndSkills' style={{display: 'flex', gap: 70, fontSize: 20}}>
            <div style={{maxWidth: 575}}>
              <h3 style={{fontSize: '30px', marginBottom: 0}}>About Me</h3>
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
            <div className='mobileMW100' style={{maxWidth: 575}}>
              <h3 style={{fontSize: '30px', marginBottom: 20}}>Technical Skills</h3>
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
              <div>
                <div className='codingHelpers'>
                  <div style={{display: 'flex', paddingTop: 20}}>
                    <img src={weddingPic} style={{maxHeight: 250}} alt='Xavier and I at our wedding'/>
                    <img src={cats} style={{maxHeight: 250}} alt='My pet cats'/>
                  </div>
    
                <p style={{margin: '5px 0 0'}}>My coding helpers: Xavier my husband (he also works remotely as a Software/Application Developer) and Gracie & June our cats! ☺</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="projects" style={{textAlign: 'center', padding: '50px 20px 0', fontSize: 50, maxWidth: 600, margin: 'auto'}}>Check Out Some of My Latest Projects!</h2>
        {projectsList.map((project, index) => (
          <Project key={index} img={project.img} title={project.title} description={project.description} link={project.link}/>
        ))}

        <div id="work-experience" style={{textAlign: 'center', padding: '0 20px', maxWidth: 1050, margin: 'auto'}}>
          <h2 style={{fontSize: 50, marginTop: 75, marginBottom: 50}}>Work Experience</h2>
        </div>

        <Accordion accordionList={workExperience}/>
  
        <div id="contact" className="Contact" style={{textAlign: 'center', maxWidth: 800, margin: 'auto', padding: '0 20px 50px'}}>
          <h2 style={{textAlign: 'center', padding: '50px 0 10px', fontSize: 50, margin: 'auto'}}>Contact Me For Career or Personal Project Opportunities</h2>
          <p>
            I am currently looking for a new career opportunity and would love to connect if you are in need of a full-time, contract, or freelance developer. Feel free to 
            reach out by email or connect with me on LinkedIn and I'd love to chat. Thank you for your interest in me!
          </p>
          <p style={{ display: "inline-block", paddingRight: "3px"}}>Email: <a href="mailto:ronnigschwind@gmail.com<">ronnigschwind@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ronni-gschwind-0a7199177/" target="_blank" rel='noreferrer'>https://www.linkedin.com/in/ronni-gschwind-0a7199177/</a></p>
        </div>
      </div>
    );
  }
  
  export default Home;