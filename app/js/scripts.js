document.addEventListener('DOMContentLoaded', function () {

  // accordion
  let acc = document.querySelectorAll('.accordion__item_button');
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        panel.style.maxHeight = 0 + 'px';
      } else {
        panel.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
});