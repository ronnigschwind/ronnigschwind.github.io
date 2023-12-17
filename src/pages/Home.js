import '../styles/Home.css'
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import weddingPic from '../images/wedding-walk-out.jpg'
import cats from '../images/gracie-and-june.jpg'
import Project from '../components/Project';
import artUnlimited from '../images/art-unlimited.webp'
import victors from '../images/victors.webp'
import roofPro from '../images/roof-pro.webp'
import gorman from '../images/gorman-roofing.webp'
import whiteWilderness from '../images/white-wilderness.webp'
import goodNeighbors from '../images/good-neighbors.webp'
import mossRoofing from '../images/moss-roofing.webp'
import threejm from '../images/3jm-exteriors.webp'
import sutryk from '../images/sutryk-and-son.webp'
import vanguardRoofing from '../images/vanguard-roofing.webp'

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
    img: mossRoofing,
    title: 'Moss Roofing WordPress Website',
    description: 'Created a new website using WordPress for Moss Roofing.',
    link: 'https://www.mossroofing.com/',
  },
  {
    img: threejm,
    title: '3JM Exteriors WordPress Website',
    description: 'Created a new website using WordPress for 3JM Exteriors.',
    link: 'https://www.3jmext.com/',
  },
  {
    img: sutryk,
    title: 'Sutryk & Son WordPress Website',
    description: 'Created a new website using WordPress for Sutryk & Son.',
    link: 'https://www.sutrykandson.com/',
  },
  {
    img: vanguardRoofing,
    title: 'Vanguard Roofing WordPress Website',
    description: 'Created a new website using WordPress for Vanguard Roofing.',
    link: 'https://www.vanguardroofing.com/',
  },
  {
    img: roofPro,
    title: 'RoofPro WordPress Website',
    description: 'Created a new website using WordPress used for marketing to roofing companies.',
    link: 'https://roofpro.artunlimitedusa.com/',
  },
  {
    img: gorman,
    title: 'Gorman Roofing WordPress Website',
    description: 'Created a new website using WordPress for Gorman Roofing.',
    link: 'https://www.gormanroofing.com/',
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
    title: 'Web Developer Team Lead (Remote)',
    description: 
      <div>
        <p style={{margin: 0}}>Art Unlimited | Angora, Minnesota | October 2023 - Present</p>
        <ul style={{paddingLeft: 15, margin: '10px 0 5px'}}> 
          <li>Be proactive in finding ways to improve team efficiency.</li>
          <li>Answer general and technical questions for the Web and Software Developers.</li>
          <li>Assist supervisor with assigning tasks and reviewing capacities.</li>
          <li>Keep abreast of the latest web development best practices.</li>
        </ul>
      </div>,
    id: 'webDevTeamLead'
  },
  {
    title: 'Web Developer (Remote)',
    description: 
      <div>
        <p style={{margin: 0}}>Art Unlimited | Angora, Minnesota | May 2022 - October 2023</p>
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
  }
]

function Home() {
    return (
      <div className="Home">
        <Hero/>
        <div style={{padding: '0 20px', maxWidth: 1050, margin: 'auto'}}>
          <h2 style={{textAlign: 'center', fontSize: 50, marginTop: 75}}>Brief Overview</h2>
          <div style={{maxWidth: 100, height: 8, margin: 'auto', backgroundColor: '#29b0ff', borderRadius: 5}}></div>
          <div className='aboutAndSkills' style={{display: 'flex', gap: 70, fontSize: 20}}>
            <div style={{maxWidth: 575}}>
              <h3 style={{fontSize: 30, marginBottom: 0}}>About Me</h3>
              <p>Firstly, thanks for checking out my website!</p>
              <p>
                I am a passionate developer with a wide range of programming experience. I first developed a passion for programming 
                in the 8th grade when I discovered and explored some programming courses on Khanacademy. I continued learning to program 
                for many years, starting with JavaScript, followed by HTML and CSS during a course I took through a local college during 
                my Junior year of high school, and in college I learned Java, Python, C, C++, among many other things. 
              </p>
              <p>
                Fast forward to today, I am now a Web Developer Team Lead with a passion for producing the highest quality websites 
                using primarily React and WordPress and continuously looking to improve efficiencies amongst the other developers 
                (including myself) on my team.
              </p>
            </div>
            <div className='mobileMW100' style={{maxWidth: 575}}>
              <h3 style={{fontSize: 30, marginBottom: 20}}>Technical Skills</h3>
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