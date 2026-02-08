import "../Hero/Hero.css"
import myResume from "../../../src/Resume/Resume.pdf"

function Hero() {
    return (
        <>
            <div className="hero-section-body p-5 ">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="fw-bold text-light">Hi, I'm Anandhu</h1>
                        <h4 className="mb-3 text-light">Full Stack Developer | MERN & Spring Boot</h4>
                        <button className="btn btn-light m-3" onClick={() => window.open(myResume, '_blank')}>View Resume</button>
                       
                    </div>

                    <div className="col-sm-6 d-flex  justify-content-end">
                        <div>
                            <p className="text-light">Email : anandhujs1920@gmail.com</p>

                            <p className="text-light">Github : <a className="text-decoration-none text-light"   target="_blank" href="https://github.com/Anandhu-J-S">github profile</a></p>

                            <p className="text-light">Linkedin : <a className="text-decoration-none text-light"   target="_blank" href="https://www.linkedin.com/in/anandhu-js-1673361a6/">linkedin profile</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
