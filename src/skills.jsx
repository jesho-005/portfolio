 function Skills(props){
    return(
       <>
       <div className="card">
    <i className={props.logo}></i>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
       </>
    )
}
export default Skills;