// Script para gerenciar os objetivos do Instituto
document.addEventListener('DOMContentLoaded', function() {
    const objetivosGrid = document.querySelector('.objetivos-grid');
    const objetivos = [
        {
            titulo: 'Bem-Estar Social',
            descricao: 'Promovemos ações que melhoram a qualidade de vida e o bem-estar da comunidade.',
            icone: '❤️'
        },
        {
            titulo: 'Desenvolvimento Integral',
            descricao: 'Focamos no crescimento pessoal e profissional de cada indivíduo.',
            icone: '🌱'
        },
        {
            titulo: 'Pensamento Coletivo',
            descricao: 'Incentivamos a colaboração e a união como força transformadora.',
            icone: '🤝'
        },
        {
            titulo: 'Ações Sociais',
            descricao: 'Realizamos projetos que impactam positivamente a comunidade local.',
            icone: '🌍'
        }
    ];

    objetivos.forEach(objetivo => {
        const card = document.createElement('div');
        card.classList.add('objetivo-card');
        card.innerHTML = `
            <div class="objetivo-icone">${objetivo.icone}</div>
            <h3>${objetivo.titulo}</h3>
            <p>${objetivo.descricao}</p>
        `;
        card.addEventListener('click', () => {
            // Adicionar modal com mais detalhes (opcional)
            alert(`Mais sobre ${objetivo.titulo}`);
        });
        objetivosGrid.appendChild(card);
    });
});
