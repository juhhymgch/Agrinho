// --- MENU HAMBÚRGUER RESPONSIVO ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar num link (para mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});


// --- MODO ESCURO / DARK MODE ---
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        icon.className = 'fa-solid fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'fa-solid fa-sun';
    }
});


// --- SIMULADOR DE IMPACTO AMBIENTAL ---
function calcularImpacto() {
    const hectaresInput = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    const litrosSpan = document.getElementById('litros');
    
    const hectares = parseFloat(hectaresInput.value);
    
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, introduz um número válido de hectares.");
        return;
    }
    
    // Cálculo fictício: cada hectare com irrigação inteligente poupa ~5.000 litros/dia
    const economiaPorHectare = 5000;
    const economiaTotal = hectares * economiaPorHectare;
    
    // Formata o número para o padrão local (ex: 50.000 em vez de 50000)
    litrosSpan.innerText = economiaTotal.toLocaleString('pt-PT');
    
    // Mostra o resultado removendo a classe hidden
    resultadoBox.classList.remove('hidden');
}
