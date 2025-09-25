import './App.css';

function App() {
  return (
    <>
      <header>

        <h1>Amanda Lyckenius </h1>
        <h2>Software Developer</h2>
      </header>

      <main>
        <div className='about-me-container section-card'>
          <h3>About me</h3>
          <p>
           I am a software developer with an interest in, and experience of, 
           both front- and backend. I am curious, driven, and committed, with the ability 
           to quickly acquire new skills. I thrive in collaboration with others, 
           am communicative and social, and I am happy to take on new challenges with 
           great commitment and a desire to develop.
          </p>
        </div>

        <div className='sections-flex'>
          <div className='technical-skills-container section-card'>
            <h3>Technical skills</h3>
            <ul>
              <li>Programming Languages: Java, JavaScript, TypeScript, SQL, HTML, CSS</li>
              <li>Frameworks & Libraries: React, Angular, Node.js, Express.js, Spring Boot</li>
              <li>Build Tools: Maven, Gradle, Vite</li>
              <li>Databases: MySQL, Postgres, MongoDB</li>
              <li>Version Control: Git, GitHub</li>
              <li>Testing & Other tools: JUnit, Postman, Mockito</li>
              <li>Deployment & Other tools: Docker, Docker compose, fly.io, Vercel, Azure, REST-API</li>
            </ul>

          </div>

          <div className='academic-background-container section-card'>
            <h3>Academic Background</h3>
            <h4>STI - Stockholms Tekniska Institut</h4>
            <p>Java Developer</p>
            <ul> 
              <li>Courses in Java programming, databases, cloud services, 
                IT and information security and agile project methodology</li>
              <li>Frontend development with HTML, CSS, JavaScript, and TypeScript</li>
            </ul>

            <h4>Linköping University</h4>
            <p>Nursing Degree</p>
            <ul>
              <li>Courses in nursing science, medicine, interprofessional learning, 
                pharmaceutical calculations, scientific methodology and leadership</li>
              <li>Work-based education</li>
            </ul>
            
          </div>


        </div>
      </main>

      <footer className='footer-container'>
        <a href="https://www.linkedin.com/in/amanda-lyckenius/">LinkedIn</a>
        <a href="https://github.com/AmandaLyckenius">GitHub</a>
      </footer>


    </>
  );
}

export default App;
