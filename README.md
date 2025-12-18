🏔️ Everest Parallax Journey
Uma landing page imersiva e visualmente rica que utiliza técnicas avançadas de parallax scrolling e animações de entrada para contar a história e os desafios do Monte Everest.

🎯 Sobre o Projeto
Este projeto foi desenvolvido para demonstrar o uso de bibliotecas modernas de animação JavaScript em um contexto de storytelling. A página guia o usuário desde uma abertura abstrata até as profundezas informativas sobre o "Topo do Mundo", utilizando camadas de imagens que se movem em diferentes velocidades para criar uma ilusão de profundidade (3D).

🚀 Funcionalidades
Zoom Parallax Inicial: Um efeito de escala (zoom) em uma imagem de abertura que cria uma transição suave para o conteúdo principal.

Layered Mountain Parallax: Seção principal com múltiplas camadas (céu, nuvens, montanhas de fundo, meio e frente) que reagem ao scroll do usuário de forma independente.

Animações de Entrada (AOS): Elementos de texto, cards e imagens que surgem com efeitos de fade, zoom e deslizamento conforme entram na viewport.

Cards Interativos: Uma galeria de "Outros pontos turísticos" com um sistema de expansão suave (estilo sanfona horizontal) ao clicar.

Design Responsivo: Adaptado para diferentes tamanhos de tela, garantindo a legibilidade em dispositivos móveis e desktops.

🛠️ Tecnologias Utilizadas
O projeto utiliza as seguintes ferramentas:

HTML5 & CSS3: Estrutura e estilização avançada com Variáveis CSS e Flexbox/Grid.

GSAP (GreenSock Animation Platform): O motor principal para animações de alta performance.

ScrollTrigger: Plugin do GSAP para sincronizar animações com a barra de rolagem.

AOS (Animate On Scroll): Para animações de revelação de elementos.

jQuery: Utilizado para a manipulação rápida de classes nos cards interativos.

Remix Icon: Biblioteca de ícones vetoriais.

📦 Como Rodar o Projeto
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git
Abra o diretório:

Bash

cd nome-do-repositorio
Execução: Como o projeto utiliza apenas arquivos estáticos (HTML, CSS e JS), basta abrir o arquivo index.html em qualquer navegador ou utilizar a extensão Live Server do VS Code.

📂 Estrutura de Arquivos
index.html: Estrutura da página e importação de bibliotecas via CDN.

style.css: Design System, layout responsivo e estilização dos componentes.

script.js: Configurações do GSAP, timelines de parallax e lógica dos cards.

img/: Pasta contendo os assets visuais (montanhas, nuvens, ícones).
