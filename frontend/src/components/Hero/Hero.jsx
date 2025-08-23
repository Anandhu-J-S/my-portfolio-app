import "../Hero/Hero.css"

function Hero() {
    return (
        <>
            <div className="hero-section-body p-5 ">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="fw-bold text-light">Hi, I'm Anandhu</h1>
                        <h4 className="mb-3 text-light">Full Stack Developer | MERN & Spring Boot</h4>
                        <button className="btn btn-light m-3">View Resume</button>
                        <button className="btn btn-outline-light">Hire Me</button>
                    </div>

                    <div className="col-sm-6 d-flex  justify-content-end">
                        <div>
                            <p className="text-light">Email : anandhujs1920@gmail.com</p>

                            <p className="text-light">Github : <a className="text-decoration-none text-light" href="https://github.com/Anandhu-J-S">github profile</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
