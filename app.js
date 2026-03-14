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
        category: "Psicologia",
        desc: "Sistema desktop premium para psicólogos, com foco em gestão clínica, organização profissional, sigilo local e experiência visual refinada.",
        longDesc: "A WorkMind PSI é a ferramenta disponível hoje na linha WorkMind Global. Reúne prontuário, agenda, documentos, recursos clínicos e uma apresentação muito mais profissional para a prática clínica.",
        features: [
            "Prontuário digital offline",
            "Agenda clínica organizada",
            "Documentos integrados",
            "Recursos clínicos e histórico",
            "Dados salvos localmente",
            "Fluxo premium e profissional"
        ],
        audience: "Psicólogos clínicos, consultórios e clínicas",
        status: "available",
        statusLabel: "Disponível agora",
        badge: "Disponível agora",
        priceFrom: "A partir de R$ 149/mês",
        pricingTitle: "Licenciamento WorkMind PSI",
        pricingNote: "Ferramenta já disponível para contratação e ativação.",
        licensingModel: "Licenças com pacotes separados por período.",
        ctaLabel: "Quero contratar",
        ctaMessage: "Olá Macs, tenho interesse em contratar a WorkMind PSI. Gostaria de conhecer os pacotes disponíveis.",
        plans: [
            {
                name: "Licença Mensal",
                price: "R$ 149",
                period: "/mês",
                subtitle: "Entrada mais leve para começar a usar imediatamente.",
                features: [
                    "Licença para 1 computador",
                    "Atualizações da ferramenta",
                    "Suporte por atendimento direto",
                    "Ideal para início rápido"
                ],
                highlight: false,
                ctaLabel: "Contratar plano"
            },
            {
                name: "Licença Trimestral",
                price: "R$ 397",
                period: "/trimestre",
                subtitle: "Melhor equilíbrio entre investimento e continuidade.",
                features: [
                    "Licença para 1 computador",
                    "Economia em relação ao mensal",
                    "Atualizações inclusas",
                    "Mais estabilidade de uso"
                ],
                highlight: true,
                ctaLabel: "Contratar plano"
            },
            {
                name: "Licença Semestral",
                price: "R$ 747",
                period: "/semestre",
                subtitle: "Mais previsibilidade e custo mais interessante no médio prazo.",
                features: [
                    "Licença para 1 computador",
                    "Economia progressiva",
                    "Atualizações e suporte",
                    "Excelente para rotina consolidada"
                ],
                highlight: false,
                ctaLabel: "Contratar plano"
            },
            {
                name: "Licença Anual",
                price: "R$ 1.497",
                period: "/ano",
                subtitle: "Pacote mais robusto para quem quer continuidade total.",
                features: [
                    "Licença para 1 computador",
                    "Melhor custo anual",
                    "Atualizações inclusas",
                    "Maior previsibilidade comercial"
                ],
                highlight: false,
                ctaLabel: "Contratar plano"
            }
        ]
    },
    {
        id: "fisio",
        name: "WorkFISIO",
        category: "Fisioterapia",
        desc: "Software desktop premium para fisioterapia, com foco em organização clínica, evolução, documentos e uma experiência visual forte para posicionamento profissional.",
        longDesc: "A WorkFISIO entra oficialmente em lançamento em 23 de março de 2026. A estrutura do site já está pronta para apresentar seus pacotes separadamente e facilitar a expansão futura.",
        features: [
            "Cadastro de pacientes",
            "Avaliação e evolução",
            "Documentos integrados",
            "Atlas corporal e recursos visuais",
            "Operação offline",
            "Experiência premium para clínica"
        ],
        audience: "Fisioterapeutas e clínicas",
        status: "launching",
        statusLabel: "Lançamento em 23/03/2026",
        badge: "Lançamento 23/03",
        priceFrom: "Pacotes em preparação",
        pricingTitle: "Licenciamento WorkFISIO",
        pricingNote: "Ferramenta com lançamento programado para 23 de março de 2026.",
        licensingModel: "Estrutura pronta para receber seus preços finais.",
        ctaLabel: "Entrar na lista",
        ctaMessage: "Olá Macs, quero entrar na lista de espera da WorkFISIO e receber informações sobre o lançamento.",
        plans: [
            {
                name: "Licença Mensal",
                price: "Em breve",
                period: "",
                subtitle: "Pacote previsto para o lançamento da ferramenta.",
                features: [
                    "Estrutura preparada no site",
                    "Período mensal separado",
                    "CTA para lista de espera",
                    "Pronto para receber valor final"
                ],
                highlight: false,
                ctaLabel: "Entrar na lista"
            },
            {
                name: "Licença Trimestral",
                price: "Em breve",
                period: "",
                subtitle: "Opção já separada para você preencher quando definir o preço.",
                features: [
                    "Bloco trimestral pronto",
                    "Layout já adaptado",
                    "Fácil atualização no catálogo",
                    "Exibição separada por ferramenta"
                ],
                highlight: true,
                ctaLabel: "Entrar na lista"
            },
            {
                name: "Licença Semestral",
                price: "Em breve",
                period: "",
                subtitle: "Estrutura visual pronta para receber pacote semestral.",
                features: [
                    "Card pronto para uso",
                    "Ajuste simples no app.js",
                    "Visual premium mantido",
                    "Separação clara por software"
                ],
                highlight: false,
                ctaLabel: "Entrar na lista"
            },
            {
                name: "Licença Anual",
                price: "Em breve",
                period: "",
                subtitle: "Opção anual já preparada para lançamento e expansão futura.",
                features: [
                    "Bloco anual pronto",
                    "Fácil manutenção",
                    "Mesma linguagem comercial",
                    "Ideal para expansão posterior"
                ],
                highlight: false,
                ctaLabel: "Entrar na lista"
            }
        ]
    },
    {
        id: "sst",
        name: "WorkMind SST",
        category: "SST",
        desc: "Linha estratégica prevista para expansão futura dentro do ecossistema WorkMind Global.",
        longDesc: "A WorkMind SST não está disponível neste momento. Ela permanece apenas como parte do roadmap futuro da marca, sem exibição comercial como ferramenta pronta.",
        features: [
            "Roadmap futuro",
            "Apresentação institucional",
            "Sem oferta comercial atual"
        ],
        audience: "Empresas e área técnica",
        status: "coming_soon",
        statusLabel: "Em desenvolvimento",
        badge: "Em breve",
        priceFrom: "Não disponível agora",
        pricingTitle: "Expansão futura",
        pricingNote: "Sem exibição de pacotes comerciais neste momento.",
        licensingModel: "Ferramenta fora da vitrine de contratação atual.",
        ctaLabel: "Falar no WhatsApp",
        ctaMessage: "Olá Macs, gostaria de saber sobre o roadmap futuro da WorkMind SST.",
        plans: []
    }
];

const faqs = [
    {
        q: "Quais ferramentas estão disponíveis neste momento?",
        a: "Atualmente a ferramenta disponível para contratação imediata é a WorkMind PSI. A WorkFISIO está com lançamento programado para 23 de março de 2026. Outras soluções permanecem fora da vitrine comercial por enquanto."
    },
    {
        q: "Agora os planos ficam separados por ferramenta?",
        a: "Sim. O site foi reorganizado para exibir os pacotes de cada software de forma separada. Isso melhora a leitura comercial e facilita muito a inclusão de novas ferramentas e novos valores depois."
    },
    {
        q: "Consigo adicionar novos pacotes futuramente?",
        a: "Sim. A lógica foi estruturada para você adicionar novos planos diretamente no catálogo do app.js. Cada ferramenta pode ter seu próprio conjunto de preços, períodos, status e observações."
    },
    {
        q: "A WorkFISIO já aparece no site mesmo antes do lançamento?",
        a: "Sim. Ela já aparece com status de lançamento e com seus blocos de pacotes preparados. Assim você já posiciona a ferramenta e depois só precisa preencher os valores finais."
    },
    {
        q: "Os softwares continuam com proposta desktop e offline?",
        a: "Sim. A comunicação do site continua posicionando a WorkMind Global como um ecossistema de softwares desktop, com foco em organização profissional, privacidade local e experiência premium."
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
                    <span class="meta-chip"><i class="ph ph-monitor"></i> Desktop</span>
                    <span class="meta-chip"><i class="ph ph-lock-key"></i> Offline</span>
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
                    ${product.status === 'available' ? 'Ver detalhes' : product.status === 'launching' ? 'Ver lançamento' : 'Conhecer roadmap'}
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
        ctaBtn.href = getWhatsAppLink(product.ctaMessage);
        ctaBtn.target = "_blank";
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
                <span class="chip-status ${getStatusClass(tool.status)}">${tool.status === 'available' ? 'Agora' : tool.status === 'launching' ? 'Lançamento' : 'Roadmap'}</span>
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

            <a href="${getWhatsAppLink(`Olá Macs, tenho interesse no plano ${plan.name} da ${selected.name}.`)}" target="_blank" class="btn ${plan.highlight || selected.status === 'available' ? 'btn-primary' : 'btn-outline'} full-width">
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
