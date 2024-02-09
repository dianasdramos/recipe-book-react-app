import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
function Footer() {
  return (
    <footer>
      <div className="firstLine">
        <img src={linkedin} />

        <a href="https://www.linkedin.com/in/gabrielavieira-da--silva/">
          <b>Gabriela Silva</b>
        </a>
        <a href="https://www.linkedin.com/in/dianaramos/">
          <b>Diana Ramos</b>
        </a>
      </div>
      <div className="secondLine">
        <img src={github} alt="github icon" />
        <a href="https://github.com/dianasdramos/recipe-book-react-app">
          
          Repository - 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;
