// script.js
  document.addEventListener('DOMContentLoaded', function() {
    // Dados das especialidades
    const especialidades = [

      {
          icon: 'fa-user-injured', // Pessoa ferida
          title: 'Crimes Contra a Pessoa',
          content: [
              'Homicídio, lesão corporal, ameaça, calúnia, difamação e injúria.'
          ]
      },
      {
          icon: 'fa-hand-holding-usd', // Representa patrimônio/roubo
          title: 'Crimes Contra o Patrimônio',
          content: [
              'Furto, roubo, estelionato, apropriação indébita, extorsão e danos.'
          ]
      },
      {
          icon: 'fa-venus-mars', // Representa relações sexuais
          title: 'Crimes Contra a Dignidade Sexual',
          content: [
              'Estupro, assédio sexual, importunação sexual e outros crimes previstos na Lei nº 12.015/09.'
          ]
      },
      {
          icon: 'fa-house-user', // Ícone relacionado ao lar
          title: 'Violência Doméstica e Familiar',
          content: [
              'Atuação em defesa de vítimas ou acusados, com base na Lei Maria da Penha.'
          ]
      },
      {
          icon: 'fa-comment-slash', // Comunicação prejudicial
          title: 'Crimes Contra a Honra',
          content: [
              'Calúnia, difamação e injúria, inclusive em ambientes digitais.'
          ]
      },
      {
          icon: 'fa-car-crash', // Representa acidentes de trânsito
          title: 'Crimes de Trânsito',
          content: [
              'Homicídio culposo na direção de veículo, embriaguez ao volante, fuga do local do acidente e omissão de socorro.'
          ]
      },
      {
          icon: 'fa-users', // Representa júri/população
          title: 'Tribunal do Júri',
          content: [
              'Atuação especializada em crimes dolosos contra a vida, como homicídio e tentativa de homicídio.'
          ]
      },
      {
          icon: 'fa-unlock-alt', // Representa execução penal/liberdade
          title: 'Execução Penal',
          content: [
              'Progressão de regime, livramento condicional, indulto, remição de pena e acompanhamento de cumprimento de pena.'
          ]
      },
      {
          icon: 'fa-shield-alt', // Defesa preventiva
          title: 'Defesa Criminal Preventiva',
          content: [
              'Consultoria e acompanhamento em inquéritos policiais e diligências preliminares, com foco na proteção de direitos desde o início da investigação.'
          ]
      },
      {
          icon: 'fa-landmark', // Representa poder público
          title: 'Crimes Contra a Administração Pública',
          content: [
              'Corrupção, peculato, concussão e outros delitos funcionais.'
          ]
      },
      {
          icon: 'fa-tree', // Ambiental
          title: 'Crimes Ambientais',
          content: [
              'Defesa em ações penais relacionadas à legislação ambiental.'
          ]
      },
      {
          icon: 'fa-key', // Liberdade e garantias
          title: 'Habeas Corpus e Medidas Urgentes',
          content: [
              'Ações em caráter emergencial para garantir liberdade e evitar prisões ilegais ou arbitrárias.'
          ]
      },
      {
          icon: 'fa-gavel', // Processo penal geral
          title: 'Atuação em Todas as Fases do Processo Penal',
          content: [
              'Desde o inquérito policial até o trânsito em julgado da sentença.'
          ]
      }
  ];
  

    // Configuração do carrossel
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const itemsPerSlide = 2;
    let currentIndex = 0;

    // Criar slides agrupando as especialidades
    for (let i = 0; i < especialidades.length; i += itemsPerSlide) {
        const slideItems = especialidades.slice(i, i + itemsPerSlide);
        createSlide(slideItems, i / itemsPerSlide);
        createIndicator(i / itemsPerSlide);
    }

    // Inicializar o primeiro slide como ativo
    showSlide(0);

    // Função para criar um slide
    function createSlide(items, slideIndex) {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.dataset.index = slideIndex;

        const row = document.createElement('div');
        row.className = 'row';

        items.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-4';

            const card = document.createElement('div');
            card.className = 'p-4 border rounded bg-dark bg-opacity-75 h-100';

            const icon = document.createElement('i');
            icon.className = `fas ${item.icon} fa-2x mb-3`;
            icon.style.color = '#641520';

            const title = document.createElement('h5');
            title.className = 'fw-bold';
            title.textContent = item.title;

            card.appendChild(icon);
            card.appendChild(title);

            item.content.forEach(text => {
                const paragraph = document.createElement('p');
                paragraph.textContent = text;
                card.appendChild(paragraph);
            });

            col.appendChild(card);
            row.appendChild(col);
        });

        slide.appendChild(row);
        carouselInner.appendChild(slide);
    }

    // Função para criar indicador
    function createIndicator(index) {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.dataset.slide = index;
        indicator.addEventListener('click', () => showSlide(index));
        carouselIndicators.appendChild(indicator);
    }

    // Função para mostrar slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.carousel-indicator');

        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    // Opcional: Auto-rotacionar
    setInterval(() => {
        const slides = document.querySelectorAll('.carousel-item');
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }, 5000);
});