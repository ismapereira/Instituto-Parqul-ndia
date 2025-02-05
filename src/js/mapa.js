// Script para configurar o mapa de localização
document.addEventListener('DOMContentLoaded', function() {
    // Coordenadas de exemplo - substituir com a localização real
    const latitude = -23.5505; // São Paulo como exemplo
    const longitude = -46.6333;

    // Inicializar mapa
    const mapa = L.map('mapa-localizacao').setView([latitude, longitude], 15);

    // Adicionar camada de mapa do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);

    // Adicionar marcador para a localização
    L.marker([latitude, longitude])
        .addTo(mapa)
        .bindPopup('Instituto Parquelândia')
        .openPopup();
});
