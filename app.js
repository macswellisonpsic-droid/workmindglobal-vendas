/* --- DADOS EDITÁVEIS --- */

// 1. Lista de Produtos
const products = [
    {
        id: 1,
        name: "WorkMind SST",
        category: "Segurança",
        desc: "Ferramenta para emissão de documentos e avaliação de riscos psicossociais, com organização técnica e conformidade.",
        features: ["Avaliação de Riscos Psicossociais", "Emissão de Documentos Técnicos", "Gestão de Prazos Legais", "Conformidade com Normas"],
        audience: "Engenheiros, Técnicos de Segurança e Psicólogos",
        status: "Finalizada",
        price: "Ver Planos",
        badge: "Disponível"
    },
    {
        id: 2,
        name: "WorkMind PSI",
        category: "Psicologia",
        desc: "Sistema focado na gestão clínica e prontuários eletrônicos para profissionais da psicologia.",
        features: ["Prontuário Digital", "Agenda Integrada", "Emissão de Documentos", "Segurança de Dados" , "Evolução Digital"],
        audience: "Psicólogos Clínicos",
        status: "Em Construção",
        price: "Em breve",
        badge: null
    },
    {
        id: 3,
        name: "WorkMind HR/DP",
        category: "RH/DP",
        desc: "Solução para automação de rotinas de Departamento Pessoal e Recursos Humanos.",
        features: ["Controle de Ponto", "Gestão de Férias", "Admissão Digital", "Indicadores de RH"],
        audience: "Gestores de RH e DP",
        status: "Em Construção",
        price: "Em breve",
        badge: null
    },
    {
        id: 4,
        name: "WorkMind Cogni",
        category: "Gestão",
        desc: "Ferramenta de apoio para psicólogos da terapia cognitivo comportamental, para auxiliar na organização de documentos.",
        features: ["Emissão de Documentos", "Controle de Agendamento", "Sugestões de Ferramentas", "Integração de Dados"],
        audience: "Diretores e Consultores",
        status: "Em Construção",
        price: "Em breve",
        badge: null
    }
];

// 2. Lista de Planos
const plans = [
    {
        name: "Licença Mensal",
        price: "R$ 97",
        period: "/mês",
        features: ["Acesso total à ferramenta", "Suporte via E-mail", "Atualizações Mensais", "Sem fidelidade"],
        highlight: false
    },
    {
        name: "Licença Anual",
        price: "R$ 997",
        period: "/ano",
        features: ["2 meses grátis (desconto)", "Acesso total à ferramenta", "Suporte Prioritário", "Atualizações Imediatas", "Treinamento de uso"],
        highlight: true // Plano destaque
    },
    {
        name: "Licença Vitalícia",
        price: "Sob Consulta",
        period: "(Único)",
        features: ["Pagamento Único", "Acesso perpétuo à versão", "1 ano de suporte incluso", "Customização Básica", "Ideal para empresas"],
        highlight: false
    }
];

// 3. Perguntas Frequentes (FAQ)
const faqs = [
    { q: "Quais ferramentas estão disponíveis hoje?", a: "Atualmente, a WorkMind SST está finalizada e pronta para uso. As ferramentas WorkMind PSI, HR/DP e Cogni estão em fase de construção e testes." },
    { q: "Como funciona o licenciamento?", a: "Você adquire uma licença de uso para a ferramenta específica (ex: SST). Oferecemos planos mensais (recorrência), anuais (com desconto) ou licença vitalícia (compra única)." },
    { q: "Preciso instalar algo no computador?", a: "Não. Nossas soluções são desenvolvidas para rodar diretamente no navegador, garantindo leveza e acessibilidade de qualquer lugar." },
    { q: "Existe suporte técnico?", a: "Sim. Todos os planos incluem suporte técnico para dúvidas de uso e correções. O plano Anual e Vitalício possuem prioridade no atendimento." },
    { q: "Os dados são seguros?", a: "Absolutamente. Utilizamos protocolos modernos de segurança e criptografia para garantir que as informações técnicas e pessoais estejam protegidas." }
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
});

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
                    ${p.status === 'Finalizada' ? '✅ Finalizada' : '🚧 Em Construção'}
                </span>
                <button onclick="openModal(${p.id})" class="btn btn-outline" style="padding:0.4rem 1rem; font-size:0.8rem;">
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
    
    // Atualiza Status Texto no Modal
    const statusText = product.status === 'Finalizada' ? '✅ Disponível para Uso' : '🚧 Em fase de desenvolvimento';
    document.getElementById('modal-status').innerText = statusText;
    
    // Configura botão do modal
    const ctaBtn = document.getElementById('modal-cta');
    let msg = "";
    
    if (product.status === 'Finalizada') {
        msg = `Olá, tenho interesse na licença da ferramenta ${product.name}.`;
        ctaBtn.innerText = "Adquirir Licença";
        ctaBtn.classList.remove('btn-outline');
        ctaBtn.classList.add('btn-primary');
    } else {
        msg = `Olá, gostaria de entrar na lista de espera para o ${product.name}.`;
        ctaBtn.innerText = "Entrar na Lista de Espera";
        ctaBtn.classList.remove('btn-primary');
        ctaBtn.classList.add('btn-outline');
    }

    ctaBtn.href = `https://wa.me/5581997243253?text=${encodeURIComponent(msg)}`;

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
            <a href="https://wa.me/5581997243253?text=Olá, gostaria de saber mais sobre o plano ${plan.name} para a ferramenta WorkMind SST" target="_blank" class="btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} full-width">
                Falar no WhatsApp
            </a>
        </div>
    `).join('');
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

    // Fecha ao clicar em um link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('mobile-active');
        });
    });
}

// --- Formulário de Contato (Mailto) ---
function initContactForm() {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submit-btn');

    if(!form || !btn) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // --- COLE SEU LINK DO FORMSPREE AQUI ---
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoojory"; 

        btn.disabled = true;
        btn.innerText = "Enviando...";

        const formData = new FormData(form);
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Feedback de Sucesso
                alert("Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.");
                form.reset();
            } else {
                // Erro do Servidor
                alert("Ops! Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.");
            }
        } catch (error) {
            // Erro de Conexão
            alert("Erro de conexão. Verifique sua internet.");
        } finally {
            btn.disabled = false;
            btn.innerText = "Enviar Mensagem";
        }
    });
}

// 4. Dados da Consultoria (ATUALIZADO)
const consultancyServices = [
    {
        title: "Consultoria em RH",
        icon: "ph-users-four",
        items: [
            "Diagnóstico Organizacional",
            "Estruturação de RH e DP",
            "Mapeamento e Padronização de Processos",
            "Recrutamento & Seleção Estratégico",
            "Treinamento e Desenvolvimento",
            "Avaliação de Desempenho",
            "Cargos, Salários e Carreira",
            "Indicadores e Relatórios Gerenciais"
        ]
    },
    {
        title: "Avaliação de Riscos Psicossociais (NR-01)",
        icon: "ph-brain",
        items: [
            "Levantamento técnico",
            "Aplicação de instrumentos",
            "Relatório técnico",
            "Plano de ação",
            "Evidências e conformidade legal"
        ]
    },
    {
        title: "Assessoria / Mentoria Profissional",
        icon: "ph-chalkboard-teacher",
        items: [
            "Acompanhamento contínuo",
            "Mentoria estratégica",
            "Suporte técnico",
            "Orientação em boas práticas"
        ]
    }
];

const consultancyModels = [
    {
        name: "Pacote Mensal",
        price: "Sob Consulta",
        features: ["Acompanhamento contínuo", "Reuniões periódicas", "Suporte prioritário", "Relatórios de progresso"]
    },
    {
        name: "Projeto Fechado",
        price: "Sob Consulta",
        features: ["Escopo definido", "Cronograma fixo", "Entrega pontual", "Diagnóstico + Execução"]
    },
    {
        name: "Consultoria por Demanda",
        price: "Sob Consulta",
        features: ["Hora técnica", "Pareceres específicos", "Flexibilidade total", "Ideal para dúvidas pontuais"]
    },
    {
        name: "Mentoria Recorrente",
        price: "Sob Consulta",
        features: ["Encontros online", "Foco em liderança", "Resolução de conflitos", "Desenvolvimento de Carreira"]
    }
];

// Função de Renderização da Consultoria
function renderConsultancy() {
    // Renderiza Serviços
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

    // Renderiza Modelos
    const modelsGrid = document.getElementById('consultoria-models-grid');
    if (modelsGrid) {
        modelsGrid.innerHTML = consultancyModels.map(model => `
            <div class="plan-card fade-in">
                <h3>${model.name}</h3>
                <div class="plan-price" style="font-size:1.5rem;">${model.price}</div>
                <ul class="plan-features">
                    ${model.features.map(f => `<li><i class="ph ph-check-circle"></i> ${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/5581997243253?text=Olá, tenho interesse no modelo de consultoria: ${model.name}" target="_blank" class="btn btn-outline full-width">
                    Solicitar Orçamento
                </a>
            </div>
        `).join('');
    }
}
