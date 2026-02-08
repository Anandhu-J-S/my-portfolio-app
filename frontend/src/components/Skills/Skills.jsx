import java from "../../assets/images/java.png"
import mongodb from "../../assets/images/mongodb.png"
import mysql from "../../assets/images/mysql.png"
import node from "../../assets/images/nodejs.png"
import react from "../../assets/images/reactlogo.png"
import springboot from "../../assets/images/springboot.png"
import "../Skills/Skills.css"
function Skills() {

    const skills = [
        { name: "React", img:  react  },
        { name: "Java",  img:  java  },
        { name: "Node.js", img:  node  },
        { name: "Spring Boot",  img:  springboot  },
        { name: "MySQL",  img:  mysql  },
        { name: "MongoDB",  img:  mongodb  }
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
                                    <div className="d-flex">
                                        <img className="img-size me-3" src={skill.img} alt="undefined img" />
                                        <h5 className="card-title mt-3">{skill.name}</h5>
                                    </div>
                                  
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
