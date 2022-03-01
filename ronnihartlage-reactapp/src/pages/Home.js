import { Link} from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        {/* do 2 boxes side by side? one image of me and other box with written content */}
        <p style={{ paddingLeft: "20px" }}>Home page in progress...</p>
        <p style={{ padding: "20px" }}>In addition to being a Student and Web Developer, I am also a Residential Assistant (RA), 
        and National Residence Hall Honorary (NRHH) Vice President of Recognition at Wright State University (WSU). I am currently
        in my last semester at WSU and will graduate this Spring with a Bachelors of Science in Computer Science and a minor in
        Mathematics. I graduated in 2019 from High School as Valedictorian of Oak Harbor High School.</p>
        {/* could list involvement individually and include images alongside each different thing */}
        {/* ideas: - sliders with images, travel/soccer/family */}

        <Link to="/about" style={{ marginLeft: "20px", color: "white", background: "black", padding: "10px", borderRadius: "8px"}}>More About Me</Link>
      </div>
    );
  }
  
  export default Home;