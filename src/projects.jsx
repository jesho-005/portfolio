function Projects(props) {
    return (
        <>
          <div className='projects-card'>
             <img width="100%" height="200px" src={`${import.meta.env.BASE_URL}${props.image}`} alt="can't load image" />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
          </div>
        </>
    )
}
export default Projects;