
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p>Welcome to my personal website! Explore my work and get in touch</p>
        <img 
  src={`${process.env.PUBLIC_URL}http://localhost:3000/images/port.jpg

`} 
 
  style={{ width: '200px', borderRadius: '50%' }}
/>

        </header>
          {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm ALONA SUNNY, a Web Developer, Designer. I love building modern, responsive, and user-friendly web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1:</strong> <a href="https://github.com/AlonaSunny/alokart-django" target="_blank" rel="noopener noreferrer">E-commerce Website</a> - A full-stack e-commerce app.
          </li>
          <li>
            <strong>Project 2:</strong> <a href="https://github.com/AlonaSunny/projects-of-internship" target="_blank" rel="noopener noreferrer">Python internship</a> - This portfolio you're viewing right now.
          </li>
          
        </ul>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <p>
          - Node js <br />
          - JavaScript (ES6+) <br />
          - CSS3, HTML5 <br />
          - MySQL
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaboration or just to say hi!</p>
        <p>
          <strong>Email:</strong> <a href="alonasunny295@gmail.com " target="_blank" rel="noopener noreferrer">alonasunny295@gmail.com</a><br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alona-sunny-89b047227/" target="_blank" rel="noopener noreferrer">Your LinkedIn</a> <br />
          <strong>GitHub:</strong> <a href="https://github.com/AlonaSunny" target="_blank" rel="noopener noreferrer">Your GitHub</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Alona Sunny. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
