const btnColors = document.querySelectorAll('.btn');

btnColors.forEach(function (colors) {
  colors.addEventListener('click', function (event) {
    const btnColor = event.target.dataset.color;
    document.documentElement.style.setProperty('--theme-color', btnColor);
  });
});
