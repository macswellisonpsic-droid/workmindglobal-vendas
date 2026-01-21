/* --- DADOS EDITÁVEIS (Configure seus links aqui) --- */
const CONFIG = {
    whatsappNumber: "5581997243253", // Seu número com DDI e DDD
    calendlyUrl: "https://calendly.com/SEU-LINK-AQUI/demo", // << COLE SEU LINK REAL DO CALENDLY AQUI
    formspreeUrl: "https://formspree.io/f/xkoojory" // Seu endpoint do form
};

// 1. Lista de Produtos (Foco: WorkMind SST Instalável)
const products = [
    {
        id: 1,
        name: "WorkMind SST",
        category: "Segurança",
        desc: "Software instalável para PC. A solução offline para Avaliação de Riscos Psicossociais, emissão de laudos técnicos e conformidade NR-01.",
        features: ["Software Desktop (Windows)", "Funcionamento 100% Offline", "Avaliação de Riscos (NR-01)", "Relatórios Técnicos Automáticos", "Backup Local Seguro"],
        audience: "Engenheiros de Segurança, Técnicos e Psicólogos",
        status: "Finalizada",
        price: "A partir de R$ 349/mês",
        badge: "Disponível Agora"
    },
    {
        id: 2,
        name: "WorkMind PSI",
        category: "Psicologia",
        desc: "Sistema desktop para gestão clínica. Prontuários eletrônicos locais, sem dados na nuvem, garantindo sigilo total.",
        features: ["Instalação no Computador", "Prontuário Digital Offline", "Agenda Inteligente", "Emissão de Documentos"],
        audience: "Psicólogos Clínicos",
        status: "Finalizada",
        price: "A partir de R$ 149/mês",
        badge: "Disponível Agora"
    },
    {
        id: 3,
        name: "WorkMind HR/DP",
        category: "RH/DP",
        desc: "Solução instalável para automação de rotinas de Departamento Pessoal.",
        features: ["Controle de Ponto Offline", "Gestão de Férias", "Admissão Digital", "Indicadores de Turnover"],
        audience: "Gestores de RH e DP",
        status: "Em Construção",
        price: "Em breve",
        badge: null
    },
    {
        id: 4,
        name: "WorkMind Cogni",
        category: "Gestão",
        desc: "Ferramenta de apoio para Terapia Cognitivo Comportamental, instalada diretamente na sua máquina.",
        features: ["Estruturação de Sessão", "Registro de Tarefas", "Biblioteca Local"],
        audience: "Psicólogos TCC",
        status: "Em Construção",
        price: "Em breve",
        badge: null
    }
];

// 2. Lista de Planos (Correção: Termos Instaláveis)
const plans = [
    {
        name: "Licença Mensal",
        price: "R$ 149",
        period: "/mês",
        features: ["Licença de uso para 1 Computador", "Suporte técnico via E-mail", "Atualizações do Software", "Sem fidelidade"],
        highlight: false
    },
    {
        name: "Licença Anual",
        price: "R$ 1.497",
        period: "/ano",
        features: ["2 meses grátis (Economia)", "Instalação Assistida Remota", "Suporte Prioritário (WhatsApp)", "Treinamento de uso", "Atualizações Antecipadas"],
        highlight: true // Destaque
    },
    {
        name: "Licença Vitalícia",
        price: "R$ 2.497",
        period: "(Único)",
        features: ["Pagamento Único (Sem mensalidade)", "Uso Perpétuo da Versão", "1 ano de suporte incluso", "Instalação Multi-Máquinas (Local)", "Ideal para Clínicas e Empresas"],
        highlight: false
    }
];

// 3. Perguntas Frequentes (FAQ - Correção Offline/Instalável)
const faqs = [
    { q: "A WorkMind SST precisa de internet para funcionar?", a: "Não. O software é instalado diretamente no seu computador (Windows) e funciona 100% offline. Você não depende de internet para acessar seus dados ou gerar laudos." },
    { q: "Onde ficam salvos os meus dados?", a: "Como é um software instalável, todos os dados ficam salvos localmente no seu próprio computador. Isso garante total privacidade e conformidade, pois nenhuma informação sai da sua máquina." },
    { q: "Quais ferramentas posso instalar hoje?", a: "A WorkMind SST está finalizada e com instalador disponível imediato. As soluções PSI, HR e Cogni estão em fase de desenvolvimento." },
    { q: "Como funciona a Licença Vitalícia?", a: "Você adquire o instalador definitivo. Paga uma única vez e o software é seu para sempre naquela versão, sem custos mensais recorrentes." },
    { q: "Preciso de um servidor para usar?", a: "Não. A ferramenta é leve e roda em computadores comuns (Desktop ou Notebook). Não há necessidade de servidores ou infraestrutura complexa." }
];

// 4. Dados da Consultoria
const consultancyServices = [
    {
        title: "Consultoria Estratégica RH",
        icon: "ph-users-four",
        items: [
            "Diagnóstico Organizacional Completo",
            "Estruturação de Cargos e Salários",
            "Mapeamento de Processos de DP",
            "Recrutamento & Seleção Técnico"
        ]
    },
    {
        title: "Avaliação de Riscos (NR-01)",
        icon: "ph-warning",
        items: [
            "Levantamento técnico in loco",
            "Aplicação de instrumentos validados",
            "Emissão de Laudo Técnico",
            "Plano de Ação para Conformidade"
        ]
    },
    {
        title: "Mentoria Profissional",
        icon: "ph-chalkboard-teacher",
        items: [
            "Mentoria para Psicólogos Organizacionais",
            "Supervisão de casos técnicos",
            "Orientação de Carreira e Negócios"
        ]
    }
];

const consultancyModels = [
    {
        name: "Consultoria Pontual",
        price: "A partir de R$ 199", // Hora técnica
        features: ["Resolução de dúvidas específicas", "Parecer técnico", "Cobrança por hora", "Ideal para urgências"]
    },
    {
        name: "Projeto Fechado",
        price: "A partir de R$ 2.999",
        features: ["Escopo definido (Início/Meio/Fim)", "Cronograma de entregas", "Diagnóstico + Execução", "Pagamento parcelado"]
    },
    {
        name: "Mentoria Recorrente",
        price: "A partir de R$ 599",
        features: ["Encontros quinzenais/mensais", "Acompanhamento de carreira", "Supervisão técnica", "Acesso direto ao consultor"]
    },
    {
        name: "Assessoria Mensal",
        price: "A partir de R$ 499",
        features: ["Contrato mensal", "Suporte contínuo ao RH/SST", "Reuniões periódicas", "Terceirização de demandas"]
    }
];

/* --- LÓGICA DO SITE --- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts(products);
    renderPlans();
    renderConsultancy();
    renderFAQ();
    initScrollAnimation();
    initMobileMenu();
    initContactForm();
    initGlobalLinks();
});

// --- Gerenciador de Links Dinâmicos ---
function initGlobalLinks() {
    // Atualiza botões de Demo
    document.querySelectorAll('.js-link-demo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(CONFIG.calendlyUrl.includes("SEU-LINK-AQUI")) {
                // Fallback se o usuário não configurou: Manda pro WhatsApp
                const msg = encodeURIComponent("Olá Macs, gostaria de agendar uma demonstração do software WorkMind SST.");
                window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, '_blank');
            } else {
                window.open(CONFIG.calendlyUrl, '_blank');
            }
        });
    });

    // Atualiza botões de WhatsApp
    document.querySelectorAll('.js-link-whatsapp').forEach(btn => {
        btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a instalação da WorkMind Global.")}`;
    });
}

// --- Renderização de Produtos ---
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(list) {
    if(!productsGrid) return;
    productsGrid.innerHTML = list.map(p => `
        <div class="product-card">
            <div class="product-body">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="product-category">${p.category}</span>
                    ${p.badge ? `<span class="badge" style="font-size:0.7rem;">${p.badge}</span>` : ''}
                </div>
                <h3>${p.name}</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.5rem;">${p.desc}</p>
                <div style="margin-top:1rem;">
                    ${p.features.slice(0, 2).map(f => `<small style="display:block; color:var(--text-muted);">• ${f}</small>`).join('')}
                </div>
            </div>
            <div class="product-footer">
                <span style="font-weight:bold; font-size:0.9rem;">
                    ${p.status === 'Finalizada' ? '✅ Disponível' : '🚧 Em Breve'}
                </span>
                <button onclick="openModal(${p.id})" class="btn ${p.status === 'Finalizada' ? 'btn-primary' : 'btn-outline'}" style="padding:0.4rem 1rem; font-size:0.8rem;">
                    ${p.status === 'Finalizada' ? 'Ver Detalhes' : 'Avise-me'}
                </button>
            </div>
        </div>
    `).join('');
}

// Filtros e Busca
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
        renderProducts(filtered);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category.includes(category) || (category === 'Gestão' && p.category === 'Gestão')); 
            renderProducts(filtered);
        }
    });
});

// --- Modal ---
const modal = document.getElementById('product-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.modal-close');

window.openModal = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-category').innerText = product.category;
    document.getElementById('modal-desc').innerText = product.desc;
    document.getElementById('modal-features').innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modal-audience').innerText = product.audience;
    
    // Atualiza Status
    const statusText = product.status === 'Finalizada' ? '✅ Instalador Disponível' : '🚧 Em desenvolvimento';
    document.getElementById('modal-status').innerText = statusText;
    
    // CTA do Modal
    const ctaBtn = document.getElementById('modal-cta');
    let msg = "";
    
    if (product.status === 'Finalizada') {
        msg = `Olá Macs, tenho interesse em instalar o software ${product.name}. Gostaria de saber os passos para contratar.`;
        ctaBtn.innerText = "Adquirir Instalador";
        ctaBtn.classList.remove('btn-outline');
        ctaBtn.classList.add('btn-primary');
    } else {
        msg = `Olá, gostaria de entrar na lista de espera para o ${product.name}.`;
        ctaBtn.innerText = "Entrar na Lista de Espera";
        ctaBtn.classList.remove('btn-primary');
        ctaBtn.classList.add('btn-outline');
    }

    ctaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    ctaBtn.target = "_blank";

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
};

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

if(closeBtn) closeBtn.addEventListener('click', closeModal);
if(modalOverlay) modalOverlay.addEventListener('click', closeModal);

// --- Renderização de Planos ---
function renderPlans() {
    const grid = document.getElementById('plans-grid');
    if(!grid) return;
    grid.innerHTML = plans.map(plan => `
        <div class="plan-card ${plan.highlight ? 'highlight' : ''}">
            ${plan.highlight ? '<span class="badge" style="margin-bottom:1rem; display:inline-block;">Recomendado</span>' : ''}
            <h3>${plan.name}</h3>
            <div class="plan-price">${plan.price}<small style="font-size:1rem; font-weight:400; color:var(--text-muted)">${plan.period}</small></div>
            <ul class="plan-features">
                ${plan.features.map(f => `<li><i class="ph ph-check-circle"></i> ${f}</li>`).join('')}
            </ul>
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá, tenho interesse no plano ' + plan.name + ' da WorkMind Global.')}" target="_blank" class="btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} full-width">
                Contratar Agora
            </a>
        </div>
    `).join('');
}

// --- Renderização da Consultoria ---
function renderConsultancy() {
    const servicesGrid = document.getElementById('consultoria-services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = consultancyServices.map(service => `
            <div class="card-solucao fade-in">
                <div class="icon-box"><i class="ph ${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <ul style="color:var(--text-muted); font-size:0.95rem; margin-top:1rem; list-style:none;">
                    ${service.items.map(item => `<li style="margin-bottom:0.5rem; display:flex; gap:0.5rem;"><span style="color:var(--primary)">•</span> ${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    const modelsGrid = document.getElementById('consultoria-models-grid');
    if (modelsGrid) {
        modelsGrid.innerHTML = consultancyModels.map(model => `
            <div class="plan-card fade-in">
                <h3>${model.name}</h3>
                <div class="plan-price" style="font-size:1.5rem;">${model.price}</div>
                <ul class="plan-features">
                    ${model.features.map(f => `<li><i class="ph ph-check-circle"></i> ${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Olá, tenho interesse no modelo de consultoria: ' + model.name)}" target="_blank" class="btn btn-outline full-width">
                    Solicitar Proposta
                </a>
            </div>
        `).join('');
    }
}

// --- Renderização FAQ ---
function renderFAQ() {
    const list = document.getElementById('faq-list');
    if(!list) return;
    list.innerHTML = faqs.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
                ${item.q}
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
    item.classList.toggle('active');
    const icon = btn.querySelector('i');
    icon.classList.toggle('ph-caret-down');
    icon.classList.toggle('ph-caret-up');
};

// --- Tema Dark/Light ---
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('i');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    icon.className = savedTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.className = newTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
    });
}

// --- Animação ao Scroll ---
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// --- Menu Mobile ---
function initMobileMenu() {
    const btn = document.getElementById('mobile-btn');
    const menu = document.getElementById('nav-menu');
    
    if(!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('mobile-active');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('mobile-active');
        });
    });
}

// --- Formulário de Contato ---
function initContactForm() {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submit-btn');

    if(!form || !btn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        btn.disabled = true;
        btn.innerText = "Enviando...";

        const formData = new FormData(form);
        
        try {
            const response = await fetch(CONFIG.formspreeUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.");
                form.reset();
            } else {
                alert("Ops! Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.");
            }
        } catch (error) {
            alert("Erro de conexão. Verifique sua internet.");
        } finally {
            btn.disabled = false;
            btn.innerText = "Enviar Mensagem";
        }
    });
}
