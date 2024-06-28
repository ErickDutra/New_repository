const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    isRight = e.target.classList.contains("arrow-right");


    if (isRight) {
      currentItem += 1;
    }
    else {
      currentItem -= 1;
    };


    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "instant",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

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