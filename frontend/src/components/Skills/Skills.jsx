

function Skills() {

    const skills = [
        { name: "React", level: 88 },
        { name: "Java", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Spring Boot", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 }
    ]



    return (
       <div className="container mb-5">
         <div className="card shadow-lg p-3">
            <h3>Skills</h3>
            <div className="row">
                {skills.map((skill, index) => (
                    <div className="col-sm-4 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{skill.name}</h5>
                                <p>{`${skill.level}%`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    )
}

export default Skills
