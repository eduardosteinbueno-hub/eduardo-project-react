import { useState } from 'react' 
import heroImg from './assets/hero.png' 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg' 
import './App.css'

function App() {
  return (
    <>
      {/* MENU */}
      <div className="hero">
        <h1>SENAI</h1>

        <div className="links">
          <a href="#inicio">Início</a>
          <a href="#curso">Sobre o curso</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
        </div>
      </div>

      {/* INÍCIO */}
      <section id="inicio" className="banner">
        <h2 className="titulo">
          <span>&lt;/&gt;</span> 💻 Técnico em
          <strong> Desenvolvimento de Sistemas</strong>
        </h2>
      </section>

      {/* SOBRE O CURSO */}
      <section id="curso" className="conteudo">

        <h2>
          <span>💻</span> Desenvolvimento de Sistemas
        </h2>

        <div className="card">
          <h3>01. O que é Desenvolvimento de Sistemas?</h3>
          <p>
            Desenvolvimento de Sistemas é a área da tecnologia responsável por criar,
            desenvolver e manter programas, sites, aplicativos e sistemas. Esses sistemas
            são feitos para facilitar tarefas, organizar informações e ajudar pessoas e
            empresas a resolver diferentes problemas.
          </p>
        </div>

        <div className="card">
          <h3>02. Qual o objetivo do curso?</h3>
          <p>
            O objetivo do curso é preparar os alunos para trabalhar com tecnologia e
            programação. Durante o curso, o aluno aprende a criar sistemas, desenvolver
            sites, trabalhar com banco de dados e entender diferentes linguagens de
            programação, além de aprender a encontrar soluções para problemas.
          </p>
        </div>

        <div className="card">
          <h3>03. O que um profissional dessa área faz?</h3>
          <p>
            O profissional de Desenvolvimento de Sistemas pode criar e atualizar
            programas, sites e aplicativos. Ele também identifica e corrige erros,
            melhora o funcionamento dos sistemas, organiza dados e desenvolve novas
            funções de acordo com as necessidades dos usuários e das empresas.
          </p>
        </div>

      </section>

      {/* CONHECIMENTOS */}
      <section className="conhecimentos">

        <h2>💻 Conhecimentos Desenvolvidos no Curso</h2>

        <p className="subtitulo">
          Durante o curso, os alunos desenvolvem conhecimentos em diversas áreas da tecnologia.
        </p>

        <div className="cards">

          <div className="card-tec">
            <span>🧠</span>
            <h3>Lógica de Programação</h3>
            <p>
              Aprendizado de lógica, algoritmos e resolução de problemas através da programação.
            </p>
          </div>

          <div className="card-tec">
            <span>🌐</span>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criação de sites e sistemas web utilizando diferentes tecnologias.
            </p>
          </div>

          <div className="card-tec">
            <span>🎨</span>
            <h3>Frontend</h3>
            <p>
              Desenvolvimento da parte visual e interativa de sites e aplicações.
            </p>
          </div>

          <div className="card-tec">
            <span>⚙️</span>
            <h3>Backend</h3>
            <p>
              Desenvolvimento da parte responsável pelo funcionamento dos sistemas.
            </p>
          </div>

          <div className="card-tec">
            <span>🗄️</span>
            <h3>Banco de Dados</h3>
            <p>
              Organização, armazenamento e gerenciamento das informações dos sistemas.
            </p>
          </div>

          <div className="card-tec">
            <span>🔗</span>
            <h3>Desenvolvimento de APIs</h3>
            <p>
              Criação de recursos que permitem a comunicação entre diferentes sistemas.
            </p>
          </div>

          <div className="card-tec">
            <span>📱</span>
            <h3>Aplicativos</h3>
            <p>
              Conhecimentos para desenvolver aplicações voltadas para dispositivos móveis.
            </p>
          </div>

          <div className="card-tec">
            <span>💾</span>
            <h3>Versionamento de Código</h3>
            <p>
              Uso de ferramentas para controlar, organizar e acompanhar alterações no código.
            </p>
          </div>

        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="tecnologias">

        <h2>🚀 Tecnologias</h2>

        <p className="subtitulo">
          Algumas das principais tecnologias relacionadas ao curso de Desenvolvimento de Sistemas.
        </p>

        <div className="tecnologias-grid">

          <div className="tec-card">
            <div className="icone">🌐</div>
            <h3>HTML</h3>
            <p>Estrutura das páginas web.</p>
          </div>

          <div className="tec-card">
            <div className="icone">🎨</div>
            <h3>CSS</h3>
            <p>Estilização e aparência dos sites.</p>
          </div>

          <div className="tec-card">
            <div className="icone">⚡</div>
            <h3>JavaScript</h3>
            <p>Interatividade e funcionalidades.</p>
          </div>

          <div className="tec-card">
            <div className="icone">⚛️</div>
            <h3>React</h3>
            <p>Criação de interfaces modernas.</p>
          </div>

          <div className="tec-card">
            <div className="icone">🟢</div>
            <h3>Node.js</h3>
            <p>Desenvolvimento no lado do servidor.</p>
          </div>

          <div className="tec-card">
            <div className="icone">🗄️</div>
            <h3>SQL</h3>
            <p>Gerenciamento de bancos de dados.</p>
          </div>

          <div className="tec-card">
            <div className="icone">🔀</div>
            <h3>Git</h3>
            <p>Controle e versionamento de código.</p>
          </div>

          <div className="tec-card">
            <div className="icone">🐙</div>
            <h3>GitHub</h3>
            <p>Hospedagem e compartilhamento de projetos.</p>
          </div>

        </div>

      </section>

      {/* PROJETOS / POSSIBILIDADES PROFISSIONAIS */}
      <section id="projetos" className="profissoes">

        <h2>🚀 Possibilidades Profissionais</h2>

        <p className="subtitulo">
          O curso de Desenvolvimento de Sistemas pode abrir diferentes caminhos na área de tecnologia.
        </p>

        <div className="profissoes-grid">

          <div className="profissao-card">
            <div className="icone">🎨</div>
            <h3>Desenvolvimento Frontend</h3>
            <p>
              Criação da parte visual e interativa de sites e sistemas.
            </p>
          </div>

          <div className="profissao-card">
            <div className="icone">⚙️</div>
            <h3>Desenvolvimento Backend</h3>
            <p>
              Desenvolvimento da parte responsável pelo funcionamento e processamento dos sistemas.
            </p>
          </div>

          <div className="profissao-card">
            <div className="icone">💻</div>
            <h3>Desenvolvimento Full Stack</h3>
            <p>
              Trabalho envolvendo tanto o Frontend quanto o Backend de uma aplicação.
            </p>
          </div>

          <div className="profissao-card">
            <div className="icone">📱</div>
            <h3>Desenvolvimento de Aplicações</h3>
            <p>
              Criação de aplicativos e soluções digitais para diferentes necessidades.
            </p>
          </div>

          <div className="profissao-card">
            <div className="icone">🗄️</div>
            <h3>Banco de Dados</h3>
            <p>
              Organização, armazenamento e gerenciamento das informações dos sistemas.
            </p>
          </div>

          <div className="profissao-card">
            <div className="icone">🔧</div>
            <h3>Suporte e Manutenção</h3>
            <p>
              Identificação de problemas, correção de erros e manutenção de sistemas.
            </p>
          </div>

        </div>

      </section>

      {/* CHAMADA FINAL */}
      <section className="chamada">

        <div className="chamada-conteudo">

          <span className="chamada-icone">🚀</span>

          <h2>Seu futuro na tecnologia pode começar aqui.</h2>

          <p>
            Conheça o curso <strong>Técnico em Desenvolvimento de Sistemas</strong>
            e prepare-se para transformar suas ideias em tecnologia.
          </p>

          <a href="#curso" className="botao-curso">
            Conheça o curso →
          </a>

        </div>

      </section>

      {/* RODAPÉ */}
      <footer className="rodape">

        <div className="rodape-conteudo">

          <div className="rodape-titulo">
            <h2>&lt;/&gt; Desenvolvimento de Sistemas</h2>
            <p>SENAI</p>
          </div>

          <div className="rodape-info">
            <p><strong>Curso:</strong> Técnico em Desenvolvimento de Sistemas</p>
            <p><strong>Instituição:</strong> SENAI</p>
            <p><strong>Ano:</strong> 2026</p>
            <p><strong>Aluno:</strong> Eduardo Steinbach Bueno</p>
          </div>

        </div>

        <div className="rodape-final">
          <p>© 2026 • Técnico em Desenvolvimento de Sistemas • SENAI</p>
        </div>

      </footer>

    </>
  )
}

export default App