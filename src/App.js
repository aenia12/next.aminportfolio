import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong className="header">Portfolio</strong>
        <p>
          My name is Aenia Amin, and I am a junior front-end developer based in
          the United States. I use VS Code, GitHub, and Netlify, and use PC
          products, primarily laptop and Android mobile device. I know these
          technologies: JavaScript, React.js, Bootstrap, and Responsive
          development. I enjoy spending time learning, playing with my cats, and
          enjoying good food and books.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/aenia-amin-66b45684/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin Portfolio
        </a>
        <a
          className="Resume-link"
          href="https://www.dropbox.com/scl/fi/4m14npp1mq9360ws75muf/Aenia-Amin-SheCodes-Developer-Resume.pdf?rlkey=a0pns12mzrh0i09gzdnphitlt&st=ny7w9vpb&dl=0S"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          className="Project-link"
          href="https://www.shecodes.io/graduates/77665-aenia-amin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Projects
        </a>
        <a
          className="Contact-link"
          href="mailto:aenia12@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email me at aenia12@gmail.com
        </a>
      </header>
      <footer className="App-footer">
        <small>
          This project is coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/77665-aenia-amin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aenia Amin
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://github.com/aenia12/next.aminportfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://shecodesnextaminportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
