import Banner from "../components/Banner";

function Contact() {
    return (
      <div className="Contact">
        <Banner/>
        <p style={{ display: "inline-block", paddingRight: "3px"}}>You can email me at ronnigschwind@gmail.com or check out my</p>
        <a href="https://www.linkedin.com/in/ronni-gschwind-0a7199177/" target="_blank" rel='noreferrer'>LinkedIn</a>
      </div>
    );
  }
  
  export default Contact;