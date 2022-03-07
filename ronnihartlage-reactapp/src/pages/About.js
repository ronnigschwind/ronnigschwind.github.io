import Slideshow from '../components/Slideshow';

function About() {
    return (
      <div className="About">
        <p>About page in progress...</p>
        {/* could list involvement individually and include images alongside each different thing */}
        {/* ideas: - sliders with images, travel/soccer/family */}
        <Slideshow/>
        <p style={{ maxWidth: "750px", margin: "auto", textAlign: "center", marginBottom: "40px" }}>
        First photo: my fiance Xavier and I <br/>
        Second photo: soccer <br/>
        Third photo: graduation with my twin brother and brother with Down Syndrome <br/>
        </p>
      </div>
    );
  }
  
  export default About;