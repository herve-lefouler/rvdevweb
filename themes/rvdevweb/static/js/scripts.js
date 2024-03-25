
window.addEventListener('load', function () {

  const colorSwitcherEle = document.querySelector('.js-color-switcher');
  colorSwitcherEle.addEventListener('click', function(event) {
      var bodyEle = document.querySelector('body');
      console.log(bodyEle);
      document.querySelector('body').classList.toggle('light');
      event.preventDefault();
  });
}, false);
