/* --- DADOS EDITÁVEIS --- */
const CONFIG = {
    whatsappNumber: "5581997243253",
    calendlyUrl: "https://calendly.com/SEU-LINK-AQUI/demo",
    formspreeUrl: "https://formspree.io/f/xkoojory"
};

/*
    Catálogo principal do site.
    Para adicionar novas ferramentas no futuro, basta inserir um novo objeto neste array.
    Cada ferramenta já possui sua própria lista de planos, status, CTA e observações.
*/
const softwareCatalog = [
    {
        id: "psi",
        name: "WorkMind PSI",
        category: "Psicologia Clínica",
        desc: "Software de gestão clínica para psicólogos e clínicas, com prontuário, agenda, documentos, contratos, recursos clínicos, Links Clínicos e apoio fiscal.",
        longDesc: "A WorkMind PSI é uma ferramenta já disponível dentro do ecossistema WorkMind Global. Ela organiza a rotina clínica em um ambiente profissional, com prontuário, agenda, documentos, recursos clínicos, triagem digital, contratos, comunicação e apoio fiscal para psicólogos.",
        features: [
            "Prontuário e histórico clínico",
            "Agenda, sessões e documentos",
            "Triagem digital e Links Clínicos",
            "Contratos e recursos clínicos",
            "Módulo fiscal e recibos",
            "Privacidade e organização profissional"
        ],
        audience: "Psicólogos, consultórios e clínicas",
        platformLabel: "Desktop",
        privacyLabel: "Privacidade local",
        status: "available",
        statusLabel: "Disponível agora",
        badge: "Disponível agora",
        priceFrom: "Planos no site oficial",
        pricingTitle: "Licenciamento WorkMind PSI",
        pricingNote: "Contratação, download, planos e ativação ficam no site oficial da WorkMind PSI.",
        licensingModel: "Licenças por período",
        ctaLabel: "Acessar site da PSI",
        ctaMessage: "Olá Macs, tenho interesse em contratar a WorkMind PSI. Gostaria de conhecer os pacotes disponíveis.",
        externalUrl: "https://download.workmindglobal.online/",
        plans: [
            {
                name: "WorkMind PSI",
                price: "Ver planos",
                period: "",
                subtitle: "Acesse o site oficial da WorkMind PSI para consultar planos, download, licença e ativação.",
                features: [
                    "Página oficial de contratação",
                    "Download e ativação da ferramenta",
                    "Planos atualizados em um único lugar",
                    "Direcionamento seguro pelo domínio oficial"
                ],
                highlight: true,
                ctaLabel: "Acessar site oficial",
                externalUrl: "https://download.workmindglobal.online/"
            }
        ]
    },
    {
        id: "perfil",
        name: "WorkMind Perfil",
        category: "Recrutamento e Seleção",
        desc: "Ferramenta profissional para processos seletivos, avaliação de perfil, entrevistas estruturadas, dinâmicas, competências e relatórios de seleção.",
        longDesc: "A WorkMind Perfil é uma ferramenta já lançada para apoiar consultorias, psicólogos organizacionais e profissionais de RH em avaliações de perfil, entrevistas, dinâmicas, competências e relatórios de seleção com apresentação mais profissional.",
        features: [
            "Avaliação de perfil profissional",
            "Entrevista estruturada",
            "Dinâmicas de grupo",
            "Matriz de competências",
            "Relatórios individuais e completos",
            "Apoio para recrutamento e seleção"
        ],
        audience: "RH, consultorias e psicólogos organizacionais",
        platformLabel: "Web profissional",
        privacyLabel: "Acesso por login",
        status: "available",
        statusLabel: "Disponível agora",
        badge: "Disponível agora",
        priceFrom: "Sob consulta",
        pricingTitle: "Licenciamento WorkMind Perfil",
        pricingNote: "Ferramenta já lançada. A contratação pode ser solicitada diretamente pelo atendimento comercial.",
        licensingModel: "Licença sob consulta",
        ctaLabel: "Solicitar apresentação",
        ctaMessage: "Olá Macs, tenho interesse na WorkMind Perfil. Gostaria de conhecer a ferramenta, os planos e a forma de contratação.",
        plans: [
            {
                name: "WorkMind Perfil",
                price: "Sob consulta",
                period: "",
                subtitle: "Licenciamento para profissionais e consultorias que atuam com recrutamento, seleção e avaliação de perfil.",
                features: [
                    "Apresentação da ferramenta",
                    "Orientação sobre módulos disponíveis",
                    "Condições comerciais sob consulta",
                    "Atendimento direto pelo WhatsApp"
                ],
                highlight: true,
                ctaLabel: "Solicitar apresentação"
            }
        ]
    },
    {
        id: "sst",
        name: "WorkMind SST",
        category: "SST e Riscos Psicossociais",
        desc: "Projeto em desenvolvimento para avaliação de riscos psicossociais, organização técnica, relatórios e apoio à rotina de SST.",
        longDesc: "A WorkMind SST faz parte do roadmap da WorkMind Global e será posicionada como uma solução para avaliação de riscos psicossociais, organização técnica e geração de relatórios para profissionais e consultorias de SST.",
        features: [
            "Avaliação de riscos psicossociais",
            "Matriz de risco",
            "Relatórios técnicos",
            "Organização de evidências",
            "Planejamento para SST",
            "Disponibilidade futura"
        ],
        audience: "Consultorias, empresas e profissionais de SST",
        platformLabel: "Projeto futuro",
        privacyLabel: "Em desenvolvimento",
        status: "coming_soon",
        statusLabel: "Em breve",
        badge: "Em breve",
        priceFrom: "Ainda não disponível",
        pricingTitle: "WorkMind SST",
        pricingNote: "Projeto em desenvolvimento, sem contratação aberta neste momento.",
        licensingModel: "Roadmap futuro",
        ctaLabel: "Acompanhar projeto",
        ctaMessage: "Olá Macs, gostaria de acompanhar novidades sobre a WorkMind SST.",
        plans: []
    },
    {
        id: "people",
        name: "WorkMind People",
        category: "RH e Gestão de Pessoas",
        desc: "Projeto em desenvolvimento para rotinas de RH, gestão de pessoas, ponto, treinamento, desempenho e organização de processos internos.",
        longDesc: "A WorkMind People está prevista como uma solução futura do ecossistema WorkMind Global para apoiar rotinas de RH, gestão de pessoas, treinamento, desempenho, jornada e organização interna.",
        features: [
            "Gestão de colaboradores",
            "Ponto e jornada",
            "Treinamentos",
            "Avaliação de desempenho",
            "Solicitações internas",
            "Disponibilidade futura"
        ],
        audience: "Empresas, RH e consultorias",
        platformLabel: "Projeto futuro",
        privacyLabel: "Em desenvolvimento",
        status: "coming_soon",
        statusLabel: "Em breve",
        badge: "Em breve",
        priceFrom: "Ainda não disponível",
        pricingTitle: "WorkMind People",
        pricingNote: "Projeto em desenvolvimento, sem contratação aberta neste momento.",
        licensingModel: "Roadmap futuro",
        ctaLabel: "Acompanhar projeto",
        ctaMessage: "Olá Macs, gostaria de acompanhar novidades sobre a WorkMind People.",
        plans: []
    },
    {
        id: "fisio",
        name: "WorkFISIO",
        category: "Fisioterapia",
        desc: "Projeto futuro para organização clínica de fisioterapeutas, com cadastro de pacientes, evolução, documentos e recursos visuais.",
        longDesc: "A WorkFISIO permanece como projeto futuro dentro da WorkMind Global. Ela ainda não está disponível para contratação, mas faz parte da expansão planejada do ecossistema.",
        features: [
            "Cadastro de pacientes",
            "Avaliação e evolução",
            "Documentos integrados",
            "Recursos visuais",
            "Projeto em desenvolvimento",
            "Disponibilidade futura"
        ],
        audience: "Fisioterapeutas e clínicas",
        platformLabel: "Projeto futuro",
        privacyLabel: "Em desenvolvimento",
        status: "coming_soon",
        statusLabel: "Em breve",
        badge: "Em breve",
        priceFrom: "Ainda não disponível",
        pricingTitle: "WorkFISIO",
        pricingNote: "Projeto futuro, sem contratação aberta neste momento.",
        licensingModel: "Roadmap futuro",
        ctaLabel: "Acompanhar projeto",
        ctaMessage: "Olá Macs, gostaria de acompanhar novidades sobre a WorkFISIO.",
        plans: []
    }
];

const faqs = [
    {
        q: "Quais ferramentas estão disponíveis atualmente?",
        a: "Atualmente, as ferramentas lançadas dentro da WorkMind Global são a WorkMind PSI e a WorkMind Perfil. As demais soluções aparecem como projetos em desenvolvimento ou em breve."
    },
    {
        q: "Onde contrato ou baixo a WorkMind PSI?",
        a: "A contratação, o download e a ativação da WorkMind PSI ficam no site oficial download.workmindglobal.online. O site da WorkMind Global funciona como apresentação do ecossistema e direciona para a página correta da ferramenta."
    },
    {
        q: "A WorkMind Perfil já está disponível?",
        a: "Sim. A WorkMind Perfil já foi lançada e pode ser apresentada para profissionais de RH, consultorias e psicólogos organizacionais interessados em avaliação de perfil e processos seletivos."
    },
    {
        q: "As outras ferramentas já podem ser contratadas?",
        a: "Não. WorkMind SST, WorkMind People e WorkFISIO devem aparecer como projetos em breve, sem promessa de contratação imediata."
    },
    {
        q: "Cada ferramenta possui planos próprios?",
        a: "Sim. Cada solução pode ter uma estrutura comercial própria, com planos, licenças, apresentação e contratação separadas conforme o estágio de lançamento."
    },
    {
        q: "As ferramentas funcionam offline?",
        a: "A WorkMind PSI tem foco em operação desktop e privacidade local. Outras soluções podem ter recursos online específicos, conforme a proposta de cada ferramenta."
    },
    {
        q: "As ferramentas fazem parte de um ecossistema maior?",
        a: "Sim. A WorkMind Global reúne soluções digitais especializadas para Psicologia, RH, SST e áreas profissionais relacionadas, com identidade própria e expansão gradual."
    },
    {
        q: "Onde posso acompanhar novidades sobre as ferramentas?",
        a: "Você pode acompanhar novidades, atualizações e lançamentos pelo site oficial da WorkMind Global e pelos canais profissionais vinculados à marca."
    }
];

const consultancyServices = [
    {
        title: "Consultoria Estratégica",
        icon: "ph-chart-line-up",
        items: [
            "Estruturação de posicionamento profissional",
            "Análise de apresentação comercial",
            "Diagnóstico de organização de serviço",
            "Apoio técnico e estratégico"
        ]
    },
    {
        title: "Psicologia & Gestão",
        icon: "ph-brain",
        items: [
            "Mentoria profissional",
            "Organização de operação clínica",
            "Estruturação de fluxos de atendimento",
            "Melhoria da experiência profissional"
        ]
    },
    {
        title: "Projetos Autorais",
        icon: "ph-rocket-launch",
        items: [
            "Construção de soluções próprias",
            "Ajuste de apresentação de marca",
            "Posicionamento digital",
            "Organização de portfólio profissional"
        ]
    }
];

const consultancyModels = [
    {
        name: "Consultoria Pontual",
        price: "A partir de R$ 199",
        features: [
            "Resolução de dúvidas específicas",
            "Análise pontual de estrutura",
            "Atendimento direto",
            "Ideal para necessidades rápidas"
        ]
    },
    {
        name: "Projeto Fechado",
        price: "A partir de R$ 2.999",
        features: [
            "Escopo definido",
            "Planejamento e execução",
            "Entrega por etapas",
            "Mais profundidade estratégica"
        ]
    },
    {
        name: "Mentoria Recorrente",
        price: "A partir de R$ 599",
        features: [
            "Encontros periódicos",
            "Acompanhamento de evolução",
            "Suporte contínuo",
            "Visão de crescimento estruturado"
        ]
    }
];

/* --- ESTADO --- */
let selectedSoftwareId = softwareCatalog.find(item => item.status === "available")?.id || softwareCatalog[0]?.id || null;
let currentFilter = "all";
let currentSearchTerm = "";

/* --- LÓGICA DO SITE --- */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
    renderSoftwareSelector();
    renderPricing();
    renderConsultancy();
    renderFAQ();
    initScrollAnimation();
    initMobileMenu();
    initContactForm();
    initGlobalLinks();
    initProductFilters();
});

/* --- Links Dinâmicos --- */
function initGlobalLinks() {
    document.querySelectorAll('.js-link-demo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            if (CONFIG.calendlyUrl.includes("SEU-LINK-AQUI")) {
                const msg = encodeURIComponent("Olá Macs, gostaria de agendar uma apresentação da WorkMind Global.");
                window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, '_blank');
                return;
            }

            window.open(CONFIG.calendlyUrl, '_blank');
        });
    });

    document.querySelectorAll('.js-link-whatsapp').forEach(btn => {
        btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá Macs, gostaria de saber mais sobre as ferramentas da WorkMind Global.")}`;
        btn.target = "_blank";
    });
}

/* --- Utilitários --- */
function getSoftwareById(id) {
    return softwareCatalog.find(item => item.id === id);
}

function getStatusClass(status) {
    if (status === "available") return "available";
    if (status === "launching") return "launching";
    return "coming_soon";
}

function getFilteredProducts() {
    return softwareCatalog.filter(product => {
        const matchesFilter = currentFilter === "all" || product.status === currentFilter;
        const term = currentSearchTerm.trim().toLowerCase();
        const matchesSearch = !term || [
            product.name,
            product.category,
            product.desc,
            product.audience
        ].join(" ").toLowerCase().includes(term);

        return matchesFilter && matchesSearch;
    });
}

function getWhatsAppLink(message) {
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getActionLink(item, fallbackMessage) {
    if (item && item.externalUrl) return item.externalUrl;
    return getWhatsAppLink(fallbackMessage || item?.ctaMessage || "Olá Macs, gostaria de saber mais sobre a WorkMind Global.");
}

function getActionTarget(item) {
    return item && item.externalUrl ? "_self" : "_blank";
}

/* --- Renderização de Produtos --- */
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts() {
    if (!productsGrid) return;

    const list = getFilteredProducts();

    if (!list.length) {
        productsGrid.innerHTML = `
            <div class="product-card" style="grid-column: 1 / -1;">
                <div class="product-body">
                    <h3>Nenhuma ferramenta encontrada</h3>
                    <p class="product-copy">Tente ajustar a busca ou selecionar outro filtro.</p>
                </div>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = list.map(product => `
        <div class="product-card fade-in">
            <div class="product-body">
                <div class="product-card-top">
                    <div>
                        <span class="product-category">${product.category}</span>
                    </div>
                    <span class="product-status-badge ${getStatusClass(product.status)}">${product.badge}</span>
                </div>

                <h3>${product.name}</h3>
                <p class="product-copy">${product.desc}</p>

                <div class="product-meta">
                    <span class="meta-chip"><i class="ph ph-monitor"></i> ${product.platformLabel || "Solução digital"}</span>
                    <span class="meta-chip"><i class="ph ph-lock-key"></i> ${product.privacyLabel || "Uso profissional"}</span>
                    <span class="meta-chip"><i class="ph ph-user-circle"></i> ${product.audience}</span>
                </div>

                <ul class="product-feature-list">
                    ${product.features.slice(0, 4).map(feature => `
                        <li><i class="ph ph-check-circle"></i><span>${feature}</span></li>
                    `).join('')}
                </ul>
            </div>

            <div class="product-footer">
                <div class="product-price-line">
                    <span>${product.statusLabel}</span>
                    <strong>${product.priceFrom}</strong>
                </div>
                <button onclick="openModal('${product.id}')" class="btn ${product.status === 'available' ? 'btn-primary' : 'btn-outline'} full-width">
                    ${product.status === 'available' ? 'Ver detalhes' : 'Ver previsão'}
                </button>
            </div>
        </div>
    `).join('');

    initScrollAnimation();
}

function initProductFilters() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value || "";
            renderProducts();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const active = document.querySelector('.filter-btn.active');
            if (active) active.classList.remove('active');

            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            renderProducts();
        });
    });
}

/* --- Modal --- */
const modal = document.getElementById('product-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.modal-close');

window.openModal = (id) => {
    const product = getSoftwareById(id);
    if (!product || !modal) return;

    const statusClass = getStatusClass(product.status);
    const title = document.getElementById('modal-title');
    const category = document.getElementById('modal-category');
    const desc = document.getElementById('modal-desc');
    const features = document.getElementById('modal-features');
    const audience = document.getElementById('modal-audience');
    const status = document.getElementById('modal-status');
    const ctaBtn = document.getElementById('modal-cta');

    if (title) title.innerText = product.name;
    if (category) {
        category.innerText = product.category;
        category.className = `badge ${statusClass}`;
    }
    if (desc) desc.innerText = product.longDesc || product.desc;
    if (features) features.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    if (audience) audience.innerText = product.audience;
    if (status) status.innerText = product.statusLabel;

    if (ctaBtn) {
        ctaBtn.innerText = product.ctaLabel;
        ctaBtn.href = getActionLink(product, product.ctaMessage);
        ctaBtn.target = getActionTarget(product);
        ctaBtn.classList.remove('btn-primary', 'btn-outline');
        ctaBtn.classList.add(product.status === 'available' ? 'btn-primary' : 'btn-outline');
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
};

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

/* --- Selector de Ferramentas / Planos --- */
function renderSoftwareSelector() {
    const selector = document.getElementById('software-selector');
    if (!selector) return;

    const pricingTools = softwareCatalog.filter(item => item.plans && item.plans.length);

    selector.innerHTML = pricingTools.map(tool => `
        <button class="software-chip ${tool.id === selectedSoftwareId ? 'active' : ''}" data-software-id="${tool.id}">
            <div class="chip-title">
                <span>${tool.name}</span>
                <span class="chip-status ${getStatusClass(tool.status)}">${tool.status === 'available' ? 'Agora' : 'Em breve'}</span>
            </div>
            <small>${tool.statusLabel}</small>
        </button>
    `).join('');

    selector.querySelectorAll('.software-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedSoftwareId = btn.getAttribute('data-software-id');
            renderSoftwareSelector();
            renderPricing();
        });
    });
}

function renderPricing() {
    const selected = getSoftwareById(selectedSoftwareId);
    const summary = document.getElementById('pricing-summary');
    const grid = document.getElementById('plans-grid');

    if (!selected || !summary || !grid) return;

    summary.innerHTML = `
        <div class="summary-card">
            <span class="badge">${selected.pricingTitle}</span>
            <h3>${selected.name}</h3>
            <p>${selected.desc}</p>
            <div class="summary-meta">
                <span class="summary-tag"><i class="ph ph-info"></i> ${selected.statusLabel}</span>
                <span class="summary-tag"><i class="ph ph-wallet"></i> ${selected.priceFrom}</span>
                <span class="summary-tag"><i class="ph ph-stack"></i> ${selected.licensingModel}</span>
            </div>
        </div>
        <div class="summary-card summary-note">
            <strong>Observação comercial</strong>
            <span>${selected.pricingNote}</span>
        </div>
    `;

    grid.innerHTML = selected.plans.map(plan => `
        <div class="plan-card ${plan.highlight ? 'highlight' : ''}">
            <div class="plan-top">
                <h3>${plan.name}</h3>
                ${plan.highlight ? '<span class="plan-badge">Destaque</span>' : ''}
            </div>

            <div class="plan-price">${plan.price}${plan.period ? `<small>${plan.period}</small>` : ''}</div>
            <p class="plan-subtitle">${plan.subtitle}</p>

            <ul class="plan-features">
                ${plan.features.map(feature => `<li><i class="ph ph-check-circle"></i><span>${feature}</span></li>`).join('')}
            </ul>

            <a href="${getActionLink(plan, `Olá Macs, tenho interesse no plano ${plan.name} da ${selected.name}.`)}" target="${getActionTarget(plan)}" class="btn ${plan.highlight || selected.status === 'available' ? 'btn-primary' : 'btn-outline'} full-width">
                ${plan.ctaLabel || selected.ctaLabel}
            </a>
        </div>
    `).join('');
}

/* --- Consultoria --- */
function renderConsultancy() {
    const servicesGrid = document.getElementById('consultoria-services-grid');
    const modelsGrid = document.getElementById('consultoria-models-grid');

    if (servicesGrid) {
        servicesGrid.innerHTML = consultancyServices.map(service => `
            <div class="card-solucao fade-in">
                <div class="icon-box"><i class="ph ${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <ul style="display:grid; gap:0.55rem; margin-top:1rem;">
                    ${service.items.map(item => `
                        <li style="display:flex; gap:0.55rem; color:var(--text-muted);">
                            <span style="color:#9fc4ff;">•</span>
                            <span>${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    if (modelsGrid) {
        modelsGrid.innerHTML = consultancyModels.map(model => `
            <div class="plan-card fade-in">
                <div class="plan-top">
                    <h3>${model.name}</h3>
                </div>

                <div class="plan-price" style="font-size:1.8rem;">${model.price}</div>
                <p class="plan-subtitle">Modelo de contratação para suporte técnico e estratégico.</p>

                <ul class="plan-features">
                    ${model.features.map(feature => `<li><i class="ph ph-check-circle"></i><span>${feature}</span></li>`).join('')}
                </ul>

                <a href="${getWhatsAppLink(`Olá Macs, tenho interesse no modelo de consultoria ${model.name}.`)}" target="_blank" class="btn btn-outline full-width">
                    Solicitar proposta
                </a>
            </div>
        `).join('');
    }
}

/* --- FAQ --- */
function renderFAQ() {
    const list = document.getElementById('faq-list');
    if (!list) return;

    list.innerHTML = faqs.map(item => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
                <span>${item.q}</span>
                <i class="ph ph-caret-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

window.toggleFaq = (btn) => {
    const item = btn.parentElement;
    if (!item) return;

    item.classList.toggle('active');

    const icon = btn.querySelector('i');
    if (icon) {
        icon.classList.toggle('ph-caret-down');
        icon.classList.toggle('ph-caret-up');
    }
};

/* --- Tema --- */
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', savedTheme);
    if (icon) icon.className = savedTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        if (icon) icon.className = next === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    });
}

/* --- Scroll Animation --- */
let scrollObserver;

function initScrollAnimation() {
    if (scrollObserver) scrollObserver.disconnect();

    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(el => scrollObserver.observe(el));
}

/* --- Menu Mobile --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-btn');
    const menu = document.getElementById('nav-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('mobile-active');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('mobile-active'));
    });
}

/* --- Formulário de Contato --- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submit-btn');

    if (!form || !btn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        btn.disabled = true;
        btn.innerText = "Enviando...";

        const formData = new FormData(form);

        try {
            const response = await fetch(CONFIG.formspreeUrl, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("Obrigado! Sua mensagem foi enviada com sucesso.");
                form.reset();
            } else {
                alert("Ops! Ocorreu um erro ao enviar. Tente novamente ou use o WhatsApp.");
            }
        } catch (error) {
            alert("Erro de conexão. Verifique sua internet.");
        } finally {
            btn.disabled = false;
            btn.innerText = "Enviar Solicitação";
        }
    });
}
