import dianaRamos from "../assets/images/dianaRamos.jpeg"
import gabrielaSilva from "../assets/images/gabrielaSilva.jpeg"
import linkedin from "../assets/images/linkedin.png"
import github from "../assets/images/github.png"
import { Link } from "react-router-dom";

function About() {
    return (
        <section>
            <div id="about">
                <h1>About</h1>
                <p>React App mini project to gain practical experience with React, learn core React concepts, and build our first single-page application (SPA).</p>
            </div>
            <div id="aboutCards">
                <div className="profileCard">
                    <div>
                        <img className="profilePic" src={gabrielaSilva} />
                    </div>
                    <div className="profileText">
                        <h2>Gabriela Silva</h2>
                        <p>As a UI/UX Designer, I have a couple of years experience in creating engaging and user-friendly web applications for the fleet management industry. I worked with Solution4Fleet, a leading company in the field, where I used Figma to design and prototype responsive and interactive interfaces for their clients. My core competencies include user experience research, user interface design, information architecture, and user-centered design. I also have a background in life sciences and teaching, which gives me a unique perspective and great, listening , empahtizing and solving problem skills. I am also a Web developer student where I develop in Javascript and React.</p>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/gabrielavieira-da--silva/"><img id="profileLinkedin" src={linkedin} /></a>
                        <a href="https://github.com/gabys17"><img id="profileGit" src={github} /></a>
                    </div>
                </div>
                <div className="profileCard">
                    <div>
                        <img className="profilePic" src={dianaRamos} />
                    </div>
                    <div className="profileText">
                        <h2>Diana Ramos</h2>
                        <p>Full-Stack Web Developer currently learning at the Ironhack Tech BootCamp, with a background of 13 years in digital marketing and teaching. Worked in several business types with Portuguese and International cross-functional teams, developing strategic and creative problem-solving skills. As a self-motivated and open-minded individual, believe things should evolve and we have the power to create a better future. Love learning new skills and being part of new challenges.</p>
                    </div>
                    <div>
                     <a href="https://www.linkedin.com/in/dianaramos/"><img id="profileLinkedin" src={linkedin} /></a>
                     <a href="https://github.com/dianasdramos"><img id="profileGit" src={github} /></a>
                    </div>
                </div>
            </div>
            <div className="buttonDiv">
                <Link to="/" style={{ textDecoration: 'none' }}><button id="profileBackButton">Back</button></Link>
            </div>
        </section>
    )
}

export default About;