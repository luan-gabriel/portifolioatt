function projetos(section) {
  section.innerHTML = `
  <header class="text-center mb-8">
    <h2 class="text-3xl font-bold">Projetos</h2>
  </header>

  <div class="flex items-center justify-center min-h-screen">
    <!-- Container fixo com rolagem -->
    <div class="w-full max-w-5xl h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 space-y-6 text-gray-900 dark:text-white">

      <!-- CARD 1 -->
      <div class="card p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 class="text-xl font-bold mb-2">016-empregos</h3>
        <div class="img-wrapper relative mb-2">
          <img src="./assets/images/projects/016empregosImagem.png" alt="Imagem do projeto." class="w-full h-64 object-cover rounded-md" />
          <div class="buttons absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition">
            <a href="https://github.com/luan-gabriel/empregos" target="_blank" title="Repositório no Github">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)" />
              </svg>
            </a>
            <a href="https://zero16-empregos.onrender.com/" target="_blank" title="Ver Projeto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </a>
          </div>
        </div>





        <section class="projeto" id="projeto-textos">
          <h2>📄 Projeto: Empregos</h2>
          <p><strong>Descrição:</strong><br>
          Aplicação web desenvolvida para facilitar a divulgação de vagas de emprego na cidade de Franca-SP. O projeto tem como foco a acessibilidade e simplicidade, permitindo que usuários encontrem oportunidades locais de forma rápida e intuitiva.</p>
          <p><strong>Objetivo:</strong><br>
          Conectar candidatos e empregadores da região por meio de uma plataforma leve, funcional e de fácil navegação.</p>
          <p><strong>Principais funcionalidades:</strong></p>
          <ul>
            <li>✔️ Listagem de vagas com dados estruturados em JSON</li>
            <li>✔️ Interface responsiva com HTML, CSS e JavaScript</li>
            <li>✔️ Renderização dinâmica com EJS</li>
            <li>✔️ Integração com bot do WhatsApp para contato direto com os anunciantes</li>
            <li>✔️ Deploy como site estático via Render</li>
          </ul>
          <p><strong>Tecnologias utilizadas:</strong></p>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, EJS</li>
            <li><strong>Backend:</strong> Node.js</li>
            <li><strong>Hospedagem:</strong> Render</li>
            <li><strong>Extras:</strong> JSON, Bot do WhatsApp</li>
          </ul>
          <p><strong>Destaques:</strong></p>
          <ul>
            <li>🌍 Projeto voltado para uma necessidade real da comunidade local</li>
            <li>🔧 Estrutura modular e escalável para futuras melhorias</li>
            <li>🎯 Design simples e funcional, com foco na experiência do usuário</li>
          </ul>
          <p class="tecnologias"><strong>Stack:</strong> HTML - CSS - JS</p>
        </section>
      </div>
      </div>

      <!-- CARD 2 -->
      <div class="card p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 class="text-xl font-bold mb-2">Editor de estapas</h3>
        <div class="img-wrapper relative mb-2">
          <img src="./assets/images/projects/imagemdropado.PNG" alt="Imagem do projeto." class="w-full h-64 object-cover rounded-md"/>
          <div class="buttons absolute inset-0 flex justify-center items-center gap-2 opacity-0 hover:opacity-100 transition">
            <a href="https://github.com/luan-gabriel/camisas" target="_blank" title="Repositório no Github">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)" />
              </svg>
            </a>
            <a href="https://camisas-rp7n.onrender.com/" target="_blank" title="Ver Projeto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </a>
          </div>
        </div>
        <section class="projeto" id="projeto-textos">
          <h2>👕 Projeto: Camisas</h2>
          <p><strong>Descrição:</strong><br>
          Aplicação web interativa que permite aos usuários personalizar camisetas em um ambiente 3D. Utiliza renderização avançada com Three.js para criar visualizações realistas e dinâmicas dos modelos.</p>
          <p><strong>Objetivo:</strong><br>
          Oferecer uma experiência imersiva de personalização de camisetas, onde o usuário pode escolher cores, aplicar logos e visualizar o resultado em tempo real.</p>
          <p><strong>Principais funcionalidades:</strong></p>
          <ul>
            <li>🎨 Escolha de cores para o modelo de camiseta</li>
            <li>📁 Upload de logos e imagens personalizadas</li>
            <li>🌀 Visualização 3D com iluminação e sombreamento realistas</li>
            <li>📱 Interface responsiva e intuitiva</li>
            <li>📦 Envio de pedidos via WhatsApp</li>
          </ul>
          <p><strong>Tecnologias utilizadas:</strong></p>
          <ul>
            <li><strong>Frontend:</strong> React, Tailwind CSS, Vite</li>
            <li><strong>3D:</strong> Three.js, @react-three/fiber, @react-three/drei</li>
            <li><strong>Animações:</strong> Framer Motion</li>
            <li><strong>Gerenciamento de estado:</strong> Valtio</li>
            <li><strong>Extras:</strong> react-color, maath</li>
          </ul>
          <p><strong>Destaques:</strong></p>
          <ul>
            <li>🧵 Experiência de personalização em tempo real</li>
            <li>⚡ Performance otimizada com Vite</li>
            <li>📱 Integração com WhatsApp para pedidos rápidos</li>
            <li>🖼️ Visual moderno e responsivo</li>
          </ul>
          <p class="tecnologias"><strong>Stack:</strong> React - Three.js - Tailwind</p>
        </section>
      </div>

      <!-- CARD 3 -->
      <div class="card p-4 bg-gray-50 rounded-lg shadow-sm">
  <h3 class="text-xl font-bold mb-2">LGATEC</h3>
  <div class="img-wrapper relative mb-2">
    <video width="100%" height="auto" controls poster="./assets/images/projects/thumblgatec.png" class="rounded-md mb-2">
      <source src="./assets/images/projects/videolgatec.mp4" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>
    
    <div class="flex items-center space-x-3">
      <!-- Link GitHub -->
      <a href="https://github.com/luan-gabriel/lgatec?tab=readme-ov-file#lgatec" target="_blank" title="Repositório no Github">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)"/>
        </svg>
      </a>

      <!-- Botão para o site -->
         <a href="http://146.235.25.36:8069?db=odoo17_banco" target="_blank" title="Acessar Site" id="site-btn">
        Acessar Site
      </a>
    </div>
    </div>
        
        </div>
        
        <section class="projeto" id="projeto-textos">
          <h2>🧾 Projeto: Lgatec (Odoo)</h2>
          <p><strong>Descrição:</strong><br>
          Este projeto consiste em uma instalação e configuração personalizada do ERP <strong>Odoo</strong>, utilizada no servidor da empresa <strong>Lgatec</strong>. O repositório reúne módulos customizados, ajustes técnicos e scripts para facilitar o desenvolvimento e o deploy da plataforma.</p>
          <p><strong>Objetivo:</strong><br>
          Criar uma base sólida e automatizada para rodar o Odoo com configurações específicas, otimizando o ambiente de trabalho e a gestão empresarial da Lgatec.</p>
          <p><strong>Principais funcionalidades:</strong></p>
          <ul>
            <li>⚙️ Instalação automatizada com ambiente virtual isolado</li>
            <li>🗃️ Configuração de banco de dados PostgreSQL</li>
            <li>📁 Organização de módulos customizados</li>
            <li>📝 Arquivo de configuração <code>odoo.conf</code> com parâmetros ajustáveis</li>
            <li>🚀 Execução local do Odoo via terminal</li>
          </ul>
          <p><strong>Tecnologias utilizadas:</strong></p>
          <ul>
            <li><strong>Backend:</strong> Python 3.10+, PostgreSQL</li>
            <li><strong>Ambiente:</strong> Virtualenv / venv</li>
            <li><strong>Ferramentas:</strong> Git, wkhtmltopdf</li>
            <li><strong>ERP:</strong> Odoo</li>
          </ul>
          <p><strong>Destaques:</strong></p>
          <ul>
            <li>🏢 Projeto aplicado em ambiente real de uma empresa</li>
            <li>🔧 Estrutura modular e organizada para manutenção e expansão</li>
            <li>📄 Documentação clara para instalação e execução</li>
            <li>🧩 Licença MIT para uso e modificação livre</li>
          </ul>
          <p class="tecnologias"><strong>Stack:</strong> Python - PostgreSQL - Odoo</p>
        </section>
      </div>

    </div>
  </div>`;
}

export { projetos };