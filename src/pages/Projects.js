import Project from '../components/Project';
import artUnlimited from '../images/art-unlimited.webp'
import victors from '../images/victors.webp'
import roofPro from '../images/roof-pro.webp'
import gorman from '../images/gorman-roofing.webp'
import whiteWilderness from '../images/white-wilderness.webp'
import goodNeighbors from '../images/good-neighbors.webp'

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

function Projects() {
    return (
      <div className="Projects">
        <h1 style={{textAlign: 'center', padding: '50px 20px', fontSize: 50, maxWidth: 600, margin: 'auto'}}>Check Out Some of My Latest Projects!</h1>
        {projectsList.map((project, index) => (
          <Project key={index} img={project.img} title={project.title} description={project.description} link={project.link}/>
        ))}
      </div>         
    );
  }
  
  export default Projects;