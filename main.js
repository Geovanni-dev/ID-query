   console.log(firebaseConfig);  // Verificar se a configuração do Firebase está correta
   
   // Inicializa o Firebase
   firebase.initializeApp(firebaseConfig);

   // Conecta o Database
   const database = firebase.database();

 function buscarID() {
  const busca = document.getElementById('campoBusca').value.trim();
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = 'Verificando...';

  if (!busca) {
    resultadoDiv.innerHTML = 'Digite um ID para buscar.';
    return;
  }

  const idsRef = database.ref('ids');

  idsRef.once('value', (snapshot) => {
    const data = snapshot.val();
    let encontrados = [];

    // normaliza a busca (tira espaços extras, deixa tudo em minúsculo)
    const buscaNormalizada = busca.replace(/\s+/g, " ").trim().toLowerCase();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];

        // valor salvo no banco (ex: "54723546 (2345)")
        const idCompleto = item.id.trim();

        // pega só a parte antes do espaço -> "54723546"
        const idPuro = idCompleto.split(" ")[0];

        // normaliza também os valores do banco
        const idCompletoNormalizado = idCompleto.replace(/\s+/g, " ").trim().toLowerCase();
        const idPuroNormalizado = idPuro.toLowerCase();

        // compara: ou é igual ao id puro, ou é igual ao id completo
        if (
          buscaNormalizada === idPuroNormalizado ||
          buscaNormalizada === idCompletoNormalizado
        ) {
          encontrados.push(item);
        }
      }
    }

    if (encontrados.length === 0) {
      resultadoDiv.innerHTML = 'O ID não está na lista.';
    } else {
      const listaHTML = encontrados
        .map(i => `<p>${i.exibicao}</p>`)
        .join('');
      resultadoDiv.innerHTML = `
        <p style="color: white; margin-bottom: 10px; font-family: 'Roboto', sans-serif;">ID'S ENCONTRADOS:</p>
        ${listaHTML}
      `;
    }
  }, (error) => {
    resultadoDiv.innerHTML = 'Erro ao buscar ID: ' + error.message;
  });
}



 
// Partículas - Configuração otimizada para mobile
function initParticles() {
  // Detecta se é mobile
  const isMobile = window.innerWidth <= 768;
  
  particlesJS("particles-js", {
    particles: {
      number: { 
        value: isMobile ? 8 : 20, 
        density: { enable: true, value_area: isMobile ? 1000 : 700 } 
      },
      color: { value: "#1b1e34" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000" },
        polygon: { nb_sides: 6 }
      },
      opacity: {
        value: isMobile ? 0.7 : 0.9,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: isMobile ? 60 : 80,
        random: true,
        anim: { 
          enable: isMobile ? false : true, 
          speed: 15, 
          size_min: isMobile ? 20 : 40, 
          sync: false 
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: isMobile ? 7 : 20,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}

// Inicializa as partículas quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Pequeno delay para garantir que o DOM esteja pronto
  setTimeout(initParticles, 100);
});

// Recarrega as partículas quando a orientação mudar (útil para mobile)
window.addEventListener('orientationchange', function() {
  setTimeout(function() {
    // Remove o canvas existente
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      particlesContainer.innerHTML = '';
      // Reinicializa as partículas
      initParticles();
    }
  }, 500);
});

// Recarrega as partículas quando a janela for redimensionada
window.addEventListener('resize', function() {
  setTimeout(function() {
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
      particlesContainer.innerHTML = '';
      initParticles();
    }
  }, 300);
});

// Tirar zoom
let lastTouchEnd = 0;

document.addEventListener('touchend', function (event) {
  let now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault(); // evita o zoom do double tap
  }
  lastTouchEnd = now;
}, false);
