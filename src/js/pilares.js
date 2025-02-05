// Script para gerenciar os pilares do Instituto
document.addEventListener('DOMContentLoaded', function() {
    const pilaresGrid = document.querySelector('.pilares-grid');
    const pilares = [
        {
            titulo: 'Inclusão Social',
            descricao: 'Quebrando barreiras, construindo pontes para todos.',
            icone: '🌈'
        },
        {
            titulo: 'Desenvolvimento Comunitário',
            descricao: 'Fortalecendo comunidades através da educação e empoderamento.',
            icone: '🏘️'
        },
        {
            titulo: 'Colaboração',
            descricao: 'Unidos somos mais fortes, transformando desafios em oportunidades.',
            icone: '🤲'
        },
        {
            titulo: 'Ação Transformadora',
            descricao: 'Cada ação importa, cada pessoa faz a diferença.',
            icone: '✨'
        }
    ];

    pilares.forEach(pilar => {
        const card = document.createElement('div');
        card.classList.add('pilar-card');
        card.innerHTML = `
            <div class="pilar-icone">${pilar.icone}</div>
            <h3>${pilar.titulo}</h3>
            <p>${pilar.descricao}</p>
        `;
        pilaresGrid.appendChild(card);
    });
});
