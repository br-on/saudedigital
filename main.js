document.getElementById('menuToggle').addEventListener('click', () => {
// Verifica se já existe a div
let existing = document.getElementById('dynamicMenu');
if (existing) return;

// Cria a div
const menu = document.createElement('div');
menu.id = 'dynamicMenu';
menu.innerHTML = `
    <button class="closeBtn" id="closeMenu">&times;</button>
    <div class="menu-content">
    <p><a href="sd.html">Saúde Digital</a></p>
    <p><a href="vigilancia.html">Vigilância em Saúde</a></p>
    
    </div>
`;

document.body.appendChild(menu);

// Evento para fechar
document.getElementById('closeMenu').addEventListener('click', () => {
    menu.remove();
});
});
