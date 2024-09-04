document.getElementById('about').addEventListener('click', function() {
  showSection('about-section');
});

document.getElementById('home').addEventListener('click', function() {
  showSection('home-section');
});

document.getElementById('projects').addEventListener('click', function() {
  showSection('projects-section');
});

function showSection(sectionId) {
  // Esconde todas as seções
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('projects-section').style.display = 'none';

  // Mostra a seção selecionada
  document.getElementById(sectionId).style.display = 'block';
}