(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <nav class="navbar">
    <a href="#inicio" class="logo">Julio<span> Mejia.</span></a>
    <div class="nav-links">
      <a href="#inicio">Inicio</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </div>
    <a href="#contacto" class="nav-button">Contáctame</a>
  </nav>

  <section class="hero section" id="inicio">
    <div class="hero-content">
      <span class="hero-tag">Ingeniería en Sistemas</span>
      <h1>Hola, soy <span>Julio Mejia</span></h1>
      <p>
        Estudiante de Ingeniería en Sistemas, apasionado por la tecnología,
        el desarrollo web y la creación de soluciones digitales.
      </p>
      <div class="hero-buttons">
        <a href="#proyectos" class="btn btn-primary">Ver proyectos</a>
        <a href="#contacto" class="btn btn-outline">Contactarme</a>
      </div>
    </div>
  </section>

  <section class="about section" id="sobre-mi">
    <span class="eyebrow">CONÓCEME</span>
    <h2>Sobre <span>mí</span></h2>
    <div class="about-content">
      <p>
        Soy Julio Mejia, estudiante de Ingeniería en Sistemas.
        Me interesa el desarrollo de software, el diseño web,
        las bases de datos y las nuevas tecnologías.
        Me considero una persona responsable, creativa y con
        muchas ganas de aprender y mejorar mis conocimientos.
      </p>
    </div>
  </section>

  <section class="skills section" id="habilidades">
    <span class="eyebrow">LO QUE SÉ HACER</span>
    <h2>Mis <span>habilidades</span></h2>
    <div class="skills-grid">
      <div class="skill-card"><h3>HTML</h3><p>Estructura de páginas web.</p></div>
      <div class="skill-card"><h3>CSS / LESS</h3><p>Diseño y estilos web.</p></div>
      <div class="skill-card"><h3>JavaScript</h3><p>Programación e interactividad.</p></div>
      <div class="skill-card"><h3>C#</h3><p>Desarrollo de aplicaciones.</p></div>
      <div class="skill-card"><h3>MySQL</h3><p>Gestión de bases de datos.</p></div>
      <div class="skill-card"><h3>Git y GitHub</h3><p>Control de versiones.</p></div>
    </div>
  </section>

  <section class="projects section" id="proyectos">
    <span class="eyebrow">MI TRABAJO</span>
    <h2>Mis <span>proyectos</span></h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3>Desarrollo Web</h3>
        <p>Creación de sitios web utilizando HTML, CSS y JavaScript.</p>
        <a href="#contacto" class="btn btn-primary">Consultar</a>
      </div>
      <div class="project-card">
        <h3>Sistema de Base de Datos</h3>
        <p>Diseño y administración de bases de datos con MySQL.</p>
        <a href="#contacto" class="btn btn-primary">Consultar</a>
      </div>
      <div class="project-card">
        <h3>Aplicaciones</h3>
        <p>Desarrollo de aplicaciones utilizando C# y programación.</p>
        <a href="#contacto" class="btn btn-primary">Consultar</a>
      </div>
    </div>
  </section>

  <section class="contact section" id="contacto">
    <span class="eyebrow">HABLEMOS</span>
    <h2>¿Trabajamos <span>juntos?</span></h2>
    <p>Estoy abierto a aprender, colaborar y desarrollar nuevas ideas.</p>
    <a href="mailto:julio.mejia@gmail.com" class="btn btn-primary">
      Enviar correo
    </a>
  </section>

  <footer class="footer">
    <p>© 2026 Julio Mejia. Todos los derechos reservados.</p>
  </footer>
`;