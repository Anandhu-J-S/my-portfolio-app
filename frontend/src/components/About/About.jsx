import "../About/About.css"
import img from "../../assets/images/Anandhu_Profile_Pic.jpg"


function About() {
    return (
        <div className="container mb-4 about-section">
            <div className="card shadow-lg p-3">
                <div className="row card-body">
                    <div className="col-sm-3">
                        <img className="img" src={img} alt="image here" />
                    </div>
                    <div className="col-sm-9">
                        <h3>About Me</h3>
                        <p>I'm a full-stack developer specializing in MERN & Spring Boot.</p>
                        <p>Focused on building scalable web applications.</p>
                        <ul>
                            <li>6+ Projects</li>
                            <li>Full Stack Development</li>
                            <li>Internship Experience</li>
                            <li>React, Nodejs, Spring Boot, MySQL, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
