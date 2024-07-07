
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.skills .skills-itens');

  items.forEach((item) => {
    item.addEventListener('animationend', function() {
   
      const parent = item.parentNode;
      parent.appendChild(item);
    
      item.classList.remove('skills-itens');
      void item.offsetWidth;
      item.classList.add('skills-itens');
    });
  });
});