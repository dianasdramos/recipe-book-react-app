import dianaRamos from "../assets/images/dianaRamos.jpeg"
import gabrielaSilva from "../assets/images/gabrielaSilva.jpeg"
import { Link } from "react-router-dom";

function About() {
    return (
        <section id="about">
            <div>
                <h1>About</h1>
                <p>about the project</p>
            </div>
                <div id="aboutCards">
                    <div>
                        <img className="profilePic" src={gabrielaSilva} />
                        <h2>Gabriela Silva</h2>
                        <p>about Gabriela</p>
                        <Link href="https://www.linkedin.com/in/gabrielavieira-da--silva/">Linkedin</Link>
                    </div>
                    <div>
                        <img className="profilePic" src={dianaRamos} />
                        <h2>Diana Ramos</h2>
                        <p>about Diana</p>
                        <Link href="https://www.linkedin.com/in/dianaramos/">Linkedin</Link>
                    </div>
                    <div>
                        <Link to="/"><button>Back</button></Link>
                    </div>
                </div>
        </section>
    )
}

export default About;