/**
 * OTTURISMO – script.js
 * ─────────────────────────────────────────────────────────────
 * ⚙️  CONFIGURAÇÃO: altere apenas a constante abaixo
 * ─────────────────────────────────────────────────────────────
 */

// ⚠️ Número do WhatsApp com DDI + DDD (sem espaços ou traços)
const WHATSAPP_NUMBER = "5581997858972";

/**
 * Gera o link do WhatsApp com mensagem personalizada para cada destino.
 * @param {string} destino - Nome do destino turístico
 * @returns {string} URL do WhatsApp
 */
function gerarLinkWhatsApp(destino) {
  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse no pacote para ${destino} e gostaria de mais informações.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;
}

/* ═══════════════════════════════════════════════════════════
   DADOS DOS PACOTES
   Para adicionar/editar pacotes, mexa apenas neste array.
═══════════════════════════════════════════════════════════ */
const pacotes = [

  {
    destino: "Bonito",
    estado: "PE",
    imagem: "images/outubro.png",
    duracao: "18/10",
    preco: "R$ 220,00",
    badge: "18/10",
    descricao: "Venha viver uma experiência inesquecível em um dos destinos mais encantadores de Pernambuco, com paisagens deslumbrantes e muita aventura!",
    inclusos: ["Café da manhã","Almoço","Transporte ida e volta","Taxas das trilhas inclusas","Guia credenciado acompanhando o grupo","Seguro viagem e transporte","Brindes exclusivos","Pulseiras de identificação"],
    esgotado: false
  },
  {
    destino: "Ilha Santo Aleixo",
    estado: "PE",
    imagem: "images/novembro.png",
    duracao: "20/11, 21/11 e 22/11",
    preco: "R$ 900,00",
    badge: "20/11",
    descricao: "Venha viver dias inesquecíveis conhecendo a beleza da Praia dos Carneiros e da encantadora Ilha de Santo Aleixo, com muito conforto, diversão e experiências incríveis!",
    inclusos: ["3 almoços","🍽️ 2 jantares","☕ 2 cafés da manhã","🏨 Hospedagem","⛵ Passeio de catamarã","🚤 Passeio de lancha","🔥 Luau especial","🎁 Brindes exclusivos","🧭 Guia credenciado acompanhando o grupo","🎟️ Pulseira de identificação","🎉 Sorteios durante a viagem","🛡️ Seguro passageiro"],
    esgotado: false
  },
  {
    destino: "Garanhuns",
    estado: "PE",
    imagem: "images/dezembro.png",
    duracao: "12/12 e 13/12",
    preco: "R$ 400,00",
    badge: "12/12",
    descricao: "Dois dias de pura alegria em Garanhuns: Natal Luz, com hospedagem e visita a vários pontos turísticos.",
    inclusos: ["Hospedagem inclusa","Café da manhã no primeiro dia","Transporte ida e volta","Visita a vários pontos turísticos","Guia credenciado acompanhando o grupo","Seguro viagem e transporte","Brindes exclusivos","Pulseiras de identificação"],
    esgotado: false
  },
  {
    destino: "Vale do Catimbau",
    estado: "PE",
    imagem: "images/dezembro2.png",
    duracao: "05/12 e 06/12",
    preco: "R$ 660,00",
    badge: "05/12",
    descricao: "Prepare-se para viver dias inesquecíveis entre trilhas, paisagens deslumbrantes e cenários de tirar o fôlego no incrível Vale do Catimbau.",
    inclusos: ["Hospedagem inclusa","As 4 principais refeições inclusas","Transporte ida e volta","Taxas das trilhas inclusas","Guia credenciado acompanhando o grupo","Seguro viagem e transporte","Brindes exclusivos","Pulseiras de identificação","Luau especial","Ponto de hidratação durante a programação"],
    esgotado: false
  },
];

/* ═══════════════════════════════════════════════════════════
   DADOS DOS DEPOIMENTOS
═══════════════════════════════════════════════════════════ */
const depoimentos = [
  {
    texto: "Viagem perfeita para Porto de Galinhas! Tudo organizado nos mínimos detalhes. A equipe da Otturismo é incrível, super atenciosa do início ao fim!",
    nome: "Ana Paula S.",
    origem: "Recife, PE",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    estrelas: 5,
  },
  {
    texto: "Já viajei 3 vezes com a Otturismo e cada uma foi melhor que a anterior. O custo-benefício é impossível de bater. Indico pra todo mundo!",
    nome: "Carlos Mendes",
    origem: "Caruaru, PE",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    estrelas: 5,
  },
  {
    texto: "Fui com minha família para Maceió e foi simplesmente perfeito. Hotel excelente, traslado pontual, passeios organizados. Voltaremos com certeza!",
    nome: "Fernanda Lima",
    origem: "Paulista, PE",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    estrelas: 5,
  },
  {
    texto: "Contratei pelo WhatsApp mesmo, foi super fácil e prático. Em menos de uma hora já tinha tudo resolvido. Adorei o atendimento personalizado!",
    nome: "Ricardo Souza",
    origem: "Olinda, PE",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    estrelas: 5,
  },
  {
    texto: "Salvador foi um sonho realizado! Os guias locais da Otturismo conhecem cada cantinho. Experiência autêntica e inesquecível.",
    nome: "Mariana Costa",
    origem: "João Pessoa, PB",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    estrelas: 5,
  },
];

/* ═══════════════════════════════════════════════════════════
   DADOS DO FAQ
═══════════════════════════════════════════════════════════ */
const faqItems = [
  {
    pergunta: "Como funciona o processo de compra?",
    resposta:
      "É super simples! Entre em contato pelo WhatsApp, escolha seu destino e período. Após a confirmação, você recebe todas as informações e pode parcelar em até 12x no cartão.",
  },
  {
    pergunta: "Como funciona o transporte durante a viagem?",
    resposta:
      "Nossas viagens são realizadas em ônibus confortáveis, com saídas programadas. Todo o transporte já está incluso no pacote, garantindo praticidade e segurança do início ao fim da viagem.",
  },
  {
    pergunta: "É possível personalizar o roteiro?",
    resposta:
      "Com certeza! Trabalhamos com roteiros sob medida para famílias, casais, grupos de amigos ou viagens corporativas. Basta nos contar seus interesses.",
  },
  {
    pergunta: "Qual é a política de cancelamento?",
    resposta:
      "Cancelamentos com mais de 15 dias de antecedência têm reembolso integral. Entre 7 e 15 dias, 50% de reembolso. Abaixo de 7 dias, sem reembolso. Recomendamos seguro viagem.",
  },
  {
    pergunta: "Os pacotes já incluem hospedagem?",
    resposta:
      "Sim! Nossos pacotes incluem hospedagem selecionada para garantir conforto e uma boa experiência durante a viagem. Os detalhes de cada hospedagem são informados no momento do atendimento.",
  },
  {
    pergunta: "Como entro em contato fora do horário comercial?",
    resposta:
      "Você pode nos enviar mensagem pelo WhatsApp a qualquer hora! Retornamos em até 8 horas. Para emergências durante a viagem, temos um número de plantão exclusivo para clientes.",
  },
];

/* ═══════════════════════════════════════════════════════════
   RENDERIZAÇÃO – CARDS DE PACOTES
═══════════════════════════════════════════════════════════ */
function renderizarPacotes() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  pacotes.forEach((p, index) => {
    const card = document.createElement("article");
    // Adiciona a classe "sold-out" automaticamente quando p.esgotado === true
    card.className = `package-card reveal${p.esgotado ? " sold-out" : ""}`;
    card.style.transitionDelay = `${index * 0.08}s`;

    // Botão WhatsApp: quando esgotado, vira um <span> (não é link) para
    // ficar 100% sem interação — não navega, não abre aba, não responde a clique.
    const botaoHTML = p.esgotado
      ? `<span class="card-btn card-btn-disabled" aria-disabled="true">
          <i class="fab fa-whatsapp"></i>
          Pacote Esgotado
        </span>`
      : `<a 
          href="${gerarLinkWhatsApp(p.destino)}" 
          target="_blank" 
          class="card-btn"
          aria-label="Reservar pacote para ${p.destino}"
        >
          <i class="fab fa-whatsapp"></i>
          Reservar Agora
        </a>`;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img 
          src="${p.imagem}" 
          alt="Foto de ${p.destino}" 
          loading="lazy"
        />
        <span class="card-badge">${p.badge}</span>
      </div>

      <div class="card-body">
        <h3 class="card-destination">${p.destino}</h3>
        <p class="card-state"><i class="fas fa-map-marker-alt"></i> ${p.estado}</p>

        <div class="card-info">
          <span class="card-info-item">
            <i class="fas fa-calendar-alt"></i> ${p.duracao}
          </span>
        </div>

        ${p.descricao ? `<p class="card-desc">${p.descricao}</p>` : ""}

        ${
          Array.isArray(p.inclusos) && p.inclusos.length
            ? `<ul class="card-inclusos">
                ${p.inclusos.map((item) => `<li>✅ ${item}</li>`).join("")}
              </ul>`
            : ""
        }

        <div class="card-price-row">
          <div>
            <span class="card-from">A partir de</span>
            <div class="card-price">${p.preco}</div>
            <span class="card-price-sub">por pessoa</span>
          </div>
        </div>

        <!-- Botão WhatsApp com mensagem dinâmica (ou "Pacote Esgotado") -->
        ${botaoHTML}
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════
   RENDERIZAÇÃO – DEPOIMENTOS
═══════════════════════════════════════════════════════════ */
function renderizarDepoimentos() {
  const track = document.getElementById("testimonialsTrack");
  const dotsContainer = document.getElementById("testDots");
  if (!track || !dotsContainer) return;

  depoimentos.forEach((d, i) => {
    // Card
    const card = document.createElement("div");
    card.className = "testimonial-card reveal";
    card.innerHTML = `
      <div class="test-stars">${"★".repeat(d.estrelas)}</div>
      <p class="test-text">"${d.texto}"</p>
      <div class="test-author">
        <img src="${d.avatar}" alt="${d.nome}" class="test-avatar" loading="lazy"/>
        <div>
          <p class="test-name">${d.nome}</p>
          <p class="test-origin"><i class="fas fa-map-marker-alt"></i> ${d.origem}</p>
        </div>
      </div>
    `;
    track.appendChild(card);

    // Dot de navegação
    const dot = document.createElement("button");
    dot.className = `dot ${i === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `Depoimento ${i + 1}`);
    dot.addEventListener("click", () => {
      const cards = track.querySelectorAll(".testimonial-card");
      if (cards[i]) {
        cards[i].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
      dotsContainer.querySelectorAll(".dot").forEach((d, di) => {
        d.classList.toggle("active", di === i);
      });
    });
    dotsContainer.appendChild(dot);
  });
}

/* ═══════════════════════════════════════════════════════════
   RENDERIZAÇÃO – FAQ
═══════════════════════════════════════════════════════════ */
function renderizarFaq() {
  const lista = document.getElementById("faqList");
  if (!lista) return;

  faqItems.forEach((item) => {
    const el = document.createElement("div");
    el.className = "faq-item reveal";

    el.innerHTML = `
      <button class="faq-question">
        ${item.pergunta}
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="faq-answer">
        <p>${item.resposta}</p>
      </div>
    `;

    // Toggle abrir/fechar
    el.querySelector(".faq-question").addEventListener("click", () => {
      const isOpen = el.classList.contains("open");
      // Fecha todos os outros
      document.querySelectorAll(".faq-item.open").forEach((o) => o.classList.remove("open"));
      if (!isOpen) el.classList.add("open");
    });

    lista.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR – escurecer ao rolar
═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // Menu mobile
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      // Anima hambúrguer → X
      hamburger.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   REVEAL ON SCROLL (Intersection Observer)
═══════════════════════════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observa todos os elementos com classe .reveal
  const observarElementos = () => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  };

  // Executa após renderizar os cards dinâmicos
  setTimeout(observarElementos, 100);
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL – links âncora
═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 70; // altura do navbar fixo
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   BOTÃO FLUTUANTE – aparece após scroll
═══════════════════════════════════════════════════════════ */
function initFloatButton() {
  const btn = document.getElementById("whatsappFloat");
  if (!btn) return;

  // Começa escondido e aparece após rolar 300px
  btn.style.opacity = "0";
  btn.style.transform = "scale(0.8)";
  btn.style.transition = "opacity .3s, transform .3s";

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 300;
    btn.style.opacity = show ? "1" : "0";
    btn.style.transform = show ? "scale(1)" : "scale(0.8)";
    btn.style.pointerEvents = show ? "auto" : "none";
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════
   GALERIA – seção Quem Somos
═══════════════════════════════════════════════════════════ */
function initAboutGallery() {
  const track = document.getElementById("aboutGalleryTrack");
  const prev = document.getElementById("aboutPrev");
  const next = document.getElementById("aboutNext");

  if (!track || !prev || !next) return;

  const scrollAmount = () => track.clientWidth;

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
}
/* ═══════════════════════════════════════════════════════════
   MÊS DO CLIENTE – vídeo obrigatório + formulário
═══════════════════════════════════════════════════════════ */

// ⚠️ Cole aqui o ID do vídeo do YouTube (não a URL inteira).
// Ex: se o link é https://youtu.be/AbCdEfGhIjK, o ID é "AbCdEfGhIjK".
// Pode ser um vídeo "Não listado" normalmente, não precisa ser público.
const CLIENT_MONTH_VIDEO_ID = "2WwtwKcUL1c";

// ⚠️ Cole aqui o link do seu Google Forms (o link normal de compartilhar, não precisa ser o de embed)
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeYgCjJ3nRbA2XHQk7NMNI3utjBWlsyI8cA2FUPick_XMqrFg/viewform";

let cmPlayer = null;
let cmWatchInterval = null;
let cmMaxTime = 0;      // maior ponto que a pessoa já assistiu de verdade
let cmDuration = 0;
let cmUnlocked = false;

// Carrega a API do YouTube (só injeta o script uma vez)
function loadYouTubeAPI() {
  const container = document.getElementById("clientMonthPlayer");
  if (!container) return; // seção não existe nesta página

  if (window.YT && window.YT.Player) {
    createClientMonthPlayer();
    return;
  }

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);

  // Callback global exigido pela API do YouTube
  window.onYouTubeIframeAPIReady = createClientMonthPlayer;
}

function createClientMonthPlayer() {
  cmPlayer = new YT.Player("clientMonthPlayer", {
    videoId: CLIENT_MONTH_VIDEO_ID,
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
    events: {
      onReady: () => {
        cmDuration = cmPlayer.getDuration();
      },
      onStateChange: onClientMonthStateChange,
    },
  });
}

function onClientMonthStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!cmWatchInterval) {
      cmWatchInterval = setInterval(checkClientMonthProgress, 500);
    }
  } else {
    clearInterval(cmWatchInterval);
    cmWatchInterval = null;
  }

  if (event.data === YT.PlayerState.ENDED) {
    unlockClientMonthForm();
  }
}

// Roda a cada 0.5s enquanto o vídeo está tocando:
// atualiza a barra de progresso e impede "pular" pra frente (seek).
function checkClientMonthProgress() {
  if (!cmPlayer || typeof cmPlayer.getCurrentTime !== "function") return;

  const current = cmPlayer.getCurrentTime();
  const duration = cmDuration || cmPlayer.getDuration();

  // Se a pessoa arrastou a barra pra frente do que já assistiu, volta.
  if (current > cmMaxTime + 1.5) {
    cmPlayer.seekTo(cmMaxTime, true);
  } else {
    cmMaxTime = Math.max(cmMaxTime, current);
  }

  const pct = duration ? Math.min(100, (cmMaxTime / duration) * 100) : 0;
  const fill = document.getElementById("videoProgressFill");
  if (fill) fill.style.width = pct + "%";

  // Libera perto do final (98%) pra não travar quem chegou no último segundo
  if (pct >= 98 && !cmUnlocked) unlockClientMonthForm();
}

function unlockClientMonthForm() {
  if (cmUnlocked) return;
  cmUnlocked = true;

  const wrapper = document.getElementById("clientMonthFormWrapper");
  const overlay = document.getElementById("formLockOverlay");
  const hint = document.getElementById("videoHint");
  const link = document.getElementById("clientMonthFormLink");

  if (wrapper) wrapper.classList.remove("locked");
  if (overlay) overlay.remove();
  if (hint) {
    hint.innerHTML = '<i class="fas fa-check-circle"></i> Vídeo concluído! Formulário liberado 🎉';
  }
  if (link) {
    link.href = GOOGLE_FORM_URL;
    link.target = "_blank";
    link.rel = "noopener";
    link.removeAttribute("aria-disabled");
  }
}

/* ═══════════════════════════════════════════════════════════
   MÊS DO CLIENTE – contador regressivo
═══════════════════════════════════════════════════════════ */

// ⚠️ Data limite. Horário de Recife (-03:00), vale até 23h59 desse dia.
const CLIENT_MONTH_DEADLINE = new Date("2026-09-27T23:59:59-03:00");

function initClientMonthCountdown() {
  const box = document.getElementById("clientMonthCountdown");
  if (!box) return;

  const elDays = document.getElementById("cdDays");
  const elHours = document.getElementById("cdHours");
  const elMinutes = document.getElementById("cdMinutes");
  const elSeconds = document.getElementById("cdSeconds");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const diff = CLIENT_MONTH_DEADLINE.getTime() - Date.now();

    if (diff <= 0) {
      box.classList.add("ended");
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMinutes.textContent = "00";
      elSeconds.textContent = "00";
      clearInterval(cmCountdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
  }

  tick();
  cmCountdownInterval = setInterval(tick, 1000);
}

let cmCountdownInterval = null;

/* ═══════════════════════════════════════════════════════════
   POP-UP DE ENTRADA – avisa sobre o Mês do Cliente
═══════════════════════════════════════════════════════════ */
function initClientMonthPopup() {
  const overlay = document.getElementById("cmPopupOverlay");
  const closeBtn = document.getElementById("cmPopupClose");
  const ctaBtn = document.getElementById("cmPopupCta");
  const target = document.getElementById("mes-cliente");

  if (!overlay || !target) return;

  // Só mostra 1x por sessão do navegador, pra não incomodar quem já viu
  if (sessionStorage.getItem("cmPopupShown") === "1") return;

  function showPopup() {
    overlay.classList.add("visible");
    sessionStorage.setItem("cmPopupShown", "1");
  }

  function hidePopup() {
    overlay.classList.remove("visible");
  }

  function goToVideo() {
    hidePopup();
    const offset = 70; // altura do navbar fixo
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // Pequeno atraso pra não ser abrupto assim que a página carrega
  setTimeout(showPopup, 1800);

  if (closeBtn) closeBtn.addEventListener("click", hidePopup);
  if (ctaBtn) ctaBtn.addEventListener("click", goToVideo);

  // Fecha clicando fora do card
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) hidePopup();
  });

  // Fecha com a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hidePopup();
  });
}

/* ═══════════════════════════════════════════════════════════
   INICIALIZAÇÃO
═══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderizarPacotes();
  renderizarFaq();
  initNavbar();
  initReveal();
  initSmoothScroll();
  initFloatButton();
  initAboutGallery();
  loadYouTubeAPI();
  initClientMonthCountdown();
  initClientMonthPopup();

  console.log("🏖️ Otturismo – Site carregado com sucesso!");
  console.log(`📱 WhatsApp configurado: +${WHATSAPP_NUMBER}`);
});