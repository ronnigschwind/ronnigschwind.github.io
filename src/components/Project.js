import '../styles/project.css';

function Project(props) {
  return (
    <div className='Project' style={{display: 'flex', gap: 50, alignItems: 'center', padding: '0 20px 50px', maxWidth: 1200, margin: 'auto'}}>
        <a href={props.link} target="_blank" rel="noreferrer"><img src={props.img} style={{maxWidth: 600, boxShadow: '10px 10px 15px #888888'}} alt='Website Project'/></a>
        <div>
          <h2>{props.title}</h2>
          <p style={{paddingBottom: 20}}>{props.description}</p>
          <a href={props.link} className='glowOnHover' target="_blank" rel="noreferrer" style={{ color: "white", background: "black", padding: "5px", borderRadius: "8px" }}>Check Out the Project</a>
        </div>
    </div>
  )
}
    
export default Project