import './styles/styles.css';




function App() {


  return (
    <div className="conteiner-principal">
      <body>
        <div className = 'containerImg'>
            <img className = 'imgBru'src="/bru.png" alt="bru-png" />
        </div>
        <header className="conteiner-header">

          <div>
            <h1 className  = "title">Seja bem vindo(a) a minha página</h1>
          </div>
            <hr className='divisao'></hr>
          <div>
              <h2 className = "subtitle">Click nas opções do menu e viaje pela página</h2>
          </div>
          <nav className='conteiner-nav'>
            <ul className='informations'>
             <li><a href="#sobre">Sobre mim</a></li>
             <li><a href="#tecnologias">Minhas Tecnologias</a></li>
             <li><a href="#contatos">Contatos</a></li>
            </ul>
          </nav>
        
        </header>

        <hr className='divisao'></hr>

        <main className='main1' id = 'tecnologias'>
          <br /><br />
              <h2 className='tec-1'>Minhas tecnologias</h2>
          <br /><br />    
              <img className = 'tec-pc' src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="html" />
              <img className = 'tec-pc' src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="css" />
              <img className = 'tec-pc' src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png" alt="javascipt" />
              <img className = 'tec-pc' src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png" alt="mysql" />
              <img className = 'tec-pc' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="bootstrap" />
              <img className = 'tec-pc' src="https://helpx.adobe.com/content/dam/help/en/experience-design/help/adobe-experience-design-on-mobile-faq/jcr%3Acontent/main-pars/imageandtext/imageandtextimage/xd-mobile-icon.png.img.png" alt="adobexd" />
              <img className = 'tec-pc' src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="react" />
              <img className = 'tec-pc' src="https://iconape.com/wp-content/png_logo_vector/postman.png" alt="postman" />
              <img className = 'tec-pc' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_171159.png" alt="figma" />
              <img className = 'tec-pc' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="nodejs" />
              <img className = 'tec-pc' src="https://cdn.icon-icons.com/icons2/1381/PNG/512/xampp_94513.png" alt="xampp" />


        </main>
        <main className='main'>
          <h1 className  = "title-nav" id = 'sobre'>Sobre Mim</h1>
          <hr></hr>
            <p className = 'text-span'>🚀 Sou um profissional dedicado e apaixonado por tecnologia, com habilidades especializadas em desenvolvimento de software e design. Minha formação em Análise e Desenvolvimento de Softwares, combinada com um conjunto diversificado de habilidades técnicas, me preparou para contribuir de maneira significativa no campo da tecnologia.
                👨‍💻 Minhas habilidades técnicas incluem:
                Desenvolvimento Front-End: Com experiência em HTML, CSS, JavaScript e Bootstrap, crio interfaces de usuário responsivas e intuitivas.
                React: Capacitado em desenvolver aplicativos front-end dinâmicos e eficientes.
                Desenvolvimento Back-End: Proficiente em Node.js e Express, implementando soluções back-end robustas.
                Banco de Dados: Habilidade em gerenciar e otimizar bancos de dados MySQL, com conhecimento prático em Sequelize.
                Design UX/UI: Competente em Adobe XD, transformando conceitos em designs visuais atraentes e funcionais.
                Controle de Versão: Experiente em Git e GitHub para um fluxo de trabalho de desenvolvimento colaborativo eficiente.
                🎓 Minha formação acadêmica e prática em Análise e Desenvolvimento de Softwares aprofundou meu entendimento dos princípios fundamentais de engenharia de software, programação orientada a objetos e boas práticas de codificação.
                🔄 Estou em um momento de transição de carreira e extremamente animado para mergulhar de cabeça na indústria da tecnologia. Meu objetivo é integrar uma equipe onde posso aplicar, expandir e aprimorar minhas habilidades, contribuindo para o desenvolvimento de soluções inovadoras.
                🔗 Estou aberto a oportunidades e conexões dentro da comunidade tecnológica. Vamos unir forças e criar algo incrível juntos!
            </p>
<hr />
       <footer>
        <div className='footer-port'>
          <h1 id='contatos' className='footer-contatos'>Entre em contato ou veja meus portfólios</h1>
          <a href="https://github.com/BrunoSan1991"  target="_blank">
          <img className = 'contatos1'src="https://pngimg.com/d/github_PNG65.png" alt="github" href= 'https://github.com/BrunoSan1991'style={{width : '50dvh'}} />
          </a>
          <a href="https://www.linkedin.com/in/bsanperfil/" target="_blank">
          <img className = 'contatos1' src="https://static-00.iconduck.com/assets.00/linkedin-color-icon-512x512-mjjzcwxp.png" alt="linkedin" style={{width : '20dvh'}}/>
          </a>
          <a href="https://www.behance.net/bsandesignIoI" target="_blank">
          <img className = 'contatos1'src="https://cdn-icons-png.flaticon.com/512/145/145799.png" alt="behance" style={{width : '20dvh'}}/>
          </a>
          <a href="" target="_blank">
          <img className = 'contatos1'src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="whatsaap" style={{width : '20dvh'}} />
          </a>
        </div>
       </footer>
        </main>


      </body>
      
        
            
                

        
    </div>
    
  )
}

export default App
