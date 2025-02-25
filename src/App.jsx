import { useState } from "react";
import './App.css';

// Componente principal do portfólio
const App = () => {
  // Função para scroll suave ao clicar nos links do menu
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Cabeçalho com navegação */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Leidervan Francisqueti</h1>
          
          {/* Menu de navegação principal */}
          <nav className="main-nav">
            <ul className="nav-list">
              {['Sobre mim', 'Habilidades', 'Formação', 'Projetos', 'Contatos'].map((item) => (
                <li key={item} className="nav-item">
                  <a 
                    href={`#${item}`} 
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="main-content">
        
        {/* Seção Sobre Mim */}
        <section id="Sobre mim" className="section">
          <div className="section-content">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="section-text">
              Olá! Meu nome é Leidervan Francisqueti, tenho 22 anos e sou acadêmico do curso de 
              Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência 
              e Tecnologia de Rondônia (IFRO), atualmente cursando o 4º período.
            </p>
          </div>
        </section>

        {/* Seção Habilidades */}
        <section id="Habilidades" className="section">
          <div className="section-content">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <ul className="Habilidades-list">
              {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'C#', 'SQL', 'CANVA'].map((skill, index) => (
                <li key={index} className="Habilidades-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Seção Formação Acadêmica */}
        <section id="Formação" className="section">
          <div className="section-content">
            <h2 className="section-title">Formação Acadêmica</h2>
            <div className="Formação-item">
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>IFRO - Cursando 4º período (2021 - 2025)</p>
            </div>
            <div className="Formação-history">
              <h3>Histórico Educacional</h3>
              <ul>
                <li>Ensino Fundamental I - Concluído em 2013</li>
                <li>Ensino Fundamental II - Concluído em 2017</li>
                <li>Ensino Médio - Concluído em 2020</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="Projetos" className="section">
          <div className="section-content">
            <h2 className="section-title">Projetos Destacados</h2>
            
            <div className="Projetos-grid">
              {/* Projeto 1 */}
              <article className="Projetos-card">
                <h3>Formulário em React</h3>
                <div className="Projetos-image">
                  <img 
                    src="public\Captura de tela 2025-02-24 214253.png" 
                    alt="Interface do formulário" 
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://github.com/Leidervan/Aprimoramento_Do_Formulario_Em_React"
                  className="Projetos-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </article>

              {/* Projeto 2 */}
              <article className="Projetos-card">
                <h3>Site SOSNET Responsivo</h3>
                <div className="Projetos-image">
                  <img 
                    src="public\Captura de tela 2025-02-24 214011.png" 
                    alt="Layout do site SOSNET" 
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://github.com/Leidervan/Site-SOSNET-Responsivo"
                  className="Projetos-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </article>

              {/* Projeto 3 */}
              <article className="Projetos-card">
                <h3>Site Engraçado para Aula</h3>
                <div className="Projetos-image">
                  <img 
                    src="public\Captura de tela 2025-02-24 213823.png" 
                    alt="Captura de tela do site" 
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://github.com/Leidervan/Site-engra-ado-para-aula-de-web-1"
                  className="Projetos-link"
                  target="_blank"
                  rel="lazy"
                >
                  Ver Projeto
                </a>
              </article>

              {/* Projeto 4 */}
              <article className="Projetos-card">
                <h3>Relógio Digital</h3>
                <div className="Projetos-image">
                  <img 
                    src="public\Captura de tela 2025-02-24 213217.png"
                    alt="Layout do site Relógio Digital com HTML,CSS e JavaScript" 
                    loading="lazy"
                  />
                </div>
                <a
                  href="https://github.com/Leidervan/Rel-gioDigital"
                  className="Projetos-link"
                  target="_blank"
                  rel="lazy"
                >
                  Ver Projeto
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="Contatos" className="section">
          <div className="section-content">
            <h2 className="section-title">Contato</h2>
            <div className="Contatos-info">
              <p>
                Email:{" "}
                <a href="mailto:leidervanfrancisquete48@gmail.com" className="Contatos-link">
                  leidervanfrancisquete48@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/leidervan-francisqueti-b04583182/"
                  className="Contatos-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leidervan Francisqueti
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Leidervan"
                  className="Contatos-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leidervan
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Leidervan Francisqueti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;